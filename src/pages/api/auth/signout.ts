import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ cookies, redirect }) => {
  try {
    // Obtener el token de acceso de las cookies
    const accessToken = cookies.get("sb-access-token")?.value;
    
    if (accessToken) {
      // Cerrar sesión en Supabase
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error("Error signing out from Supabase:", error);
      }
    }

    // Limpiar todas las cookies relacionadas con la autenticación
    cookies.delete("sb-access-token", { path: "/" });
    cookies.delete("sb-refresh-token", { path: "/" });
    cookies.delete("user-data", { path: "/" });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error during signout:", error);
    
    // Aún así limpiar las cookies en caso de error
    cookies.delete("sb-access-token", { path: "/" });
    cookies.delete("sb-refresh-token", { path: "/" });
    cookies.delete("user-data", { path: "/" });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};