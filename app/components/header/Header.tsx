import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/app/components/header/SearchBar";
import Navbar from "@/app/components/header/Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container grid grid-cols-3 relative">
        <Link href={"/"} className="relative flex items-center h-10 my-auto">
          <Image
            alt="logo-img"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            }
            fill
            className="object-contain object-left"
          />
        </Link>
        <SearchBar />
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
