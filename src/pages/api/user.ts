import { supabase } from "../../lib/supabase";

export async function GET() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  if (!user) {
    return new Response(JSON.stringify({ message: "Not authenticated" }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify(user), { status: 200 });
}
