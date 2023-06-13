import {
  createServerSupabaseClient
} from "@supabase/auth-helpers-nextjs";
import { SITE_URL } from "src/pricing/utils";
import { stripe } from "src/pricing/utils/stripe";

export default async function handler(req, res) {
  const supabaseServerClient = createServerSupabaseClient({
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
    .from("profile")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .single();

  const session = await stripe.billingPortal.sessions.create({
    customer: user.user_metadata.stripe_customer_id,
    return_url: SITE_URL,
  });

  res.send({ url: session.url });
}
