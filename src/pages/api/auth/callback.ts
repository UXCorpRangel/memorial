import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return new Response("No authorization code found", { status: 400 });
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  if (data.session && data.user) {
    // Configuración de cookies para desarrollo local
    const isProduction = process.env.NODE_ENV === 'production';
    
    cookies.set("sb-access-token", data.session.access_token, {
      path: "/",
      httpOnly: true,
      secure: isProduction, // Solo secure en producción
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 días
    });
    
    cookies.set("sb-refresh-token", data.session.refresh_token, {
      path: "/",
      httpOnly: true,
      secure: isProduction, // Solo secure en producción
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 días
    });

    // Guardar información del usuario en una cookie accesible desde el cliente
    cookies.set("user-data", JSON.stringify({
      id: data.user.id,
      email: data.user.email,
      user_metadata: data.user.user_metadata,
      app_metadata: data.user.app_metadata,
    }), {
      path: "/",
      httpOnly: false, // Accesible desde JavaScript
      secure: isProduction,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 días
    });
  }

  return redirect("/");
};
