import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function LoginForm() {
  const [error , setError] = useState('')
  const [isloading , setIsLoading] = useState(false)
const supabaseClient = useSupabaseClient();

async function onSubmit(event) {
  setIsLoading(true)
  event.preventDefault();
  const email = event.target.elements.email.value;
  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: window.location.origin,
    },
  });

  console.log("error login form",error)
  if(error){
      setError(error.message)
      setIsLoading(false)
      console.log(error)
  }else{
      setError('')
      setIsLoading(false)
  }
}
return (
  <form onSubmit={onSubmit} className="content-grid home-hero">
    {error && (
      <div className="danger" role="alert">
          {error}
      </div>
    )}
    <h1>welcome back</h1>
    <section className="email-input">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" autoComplete="email" />
    </section>
    <button type="submit" className="large-button">
      <div className="large-button-text">Login</div>
    </button>
  </form>
);
}
