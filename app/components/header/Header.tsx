import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-yellow-200 shadow-md py-4">
      <div className="container">
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
      </div>
    </header>
  );
};
export default Header;
