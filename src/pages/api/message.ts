import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const fullName = formData.get("fullName")?.toString();
  const message = formData.get("message")?.toString();

  if (!message) {
    return new Response("Message is required", { status: 400 });
  }

  const { data, error } = await supabase.from("messages").insert({
    fullName: fullName,
    message,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/");
};

export const GET: APIRoute = async ({ request }) => {
  const { data, error } = await supabase.from("messages").select("*");

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
};
