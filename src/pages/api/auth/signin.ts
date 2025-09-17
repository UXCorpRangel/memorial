import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import type { Provider } from "@supabase/supabase-js";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const provider = formData.get("provider")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (provider) {
    const validProviders = ["twitch"];

    if (validProviders.includes(provider)) {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider as Provider,
        options: {
          redirectTo: `${
            import.meta.env.SITE || "http://localhost:4321"
          }/api/auth/callback`,
        },
      });

      if (error) {
        return new Response(error.message, { status: 500 });
      }

      return redirect(data.url);
    }

    return new Response("Proveedor no válido", { status: 400 });
  }

  if (!email || !password) {
    return new Response("Email y contraseña son requeridos", { status: 400 });
  }

  if (email.trim().length === 0 || password.trim().length === 0) {
    return new Response("Email y contraseña no pueden estar vacíos", {
      status: 400,
    });
  }

  const { data, error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    return new Response(signInError.message, { status: 500 });
  }

  if (data.session && data.user) {
    // Configuración de cookies para desarrollo local
    const isProduction = process.env.NODE_ENV === "production";

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
    cookies.set(
      "user-data",
      JSON.stringify({
        id: data.user.id,
        email: data.user.email,
        user_metadata: data.user.user_metadata,
        app_metadata: data.user.app_metadata,
      }),
      {
        path: "/",
        httpOnly: false, // Accesible desde JavaScript
        secure: isProduction,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 días
      }
    );
  }

  return redirect("/");
};
