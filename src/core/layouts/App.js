import { useRouter } from "next/router";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

const hideNavbarPages = ["/success"];

export default function AppLayout({ children }) {
  const router = useRouter();
  const hideNavbar = hideNavbarPages.includes(router.asPath);
  console.log("hidenavbar -->", hideNavbar);

  return (
    <>
      <Meta />
      {hideNavbar ? null : <Navbar />}
      {children}
    </>
  );
}
