import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SITE_URL } from "src/pricing/utils";

export default async function handler(req, res) {
  const supabaseServerClient = createServerComponentSupabaseClient({
    req,
    res,
  });

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  if (!user) {
    return res.status(401).send("Unauthorized");
  }

  const { data: profile } = await supabaseServerClient
    .from("Profile")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .single();

  const session = await stripe.billingPortal.sessions.create({
    customer: profile.stripe_customer_id,
    return_url: SITE_URL,
  });

  res.send({ url: session.url });
}
