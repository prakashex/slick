import Image from "next/image";
import logo from "../../../public/assets/logo.svg"
export default function Logo(props) {
  return (
    <div className="">
      <div className="flex">
        <Image width="100" src={logo} alt="logo" {...props} />
          <p className="text-black ml-8 my-auto font-bold text-3xl">Let It Sway</p>
        </div>
    </div>
  );
}

