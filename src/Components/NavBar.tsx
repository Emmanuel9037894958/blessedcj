import { useState } from "react";
import { Menu, SearchIcon, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isActive = (path: any) => location.pathname === path;

  const [menu, setMenu] = useState(false);

  const menuDropDown = () => {
    setMenu((prevMenu) => !prevMenu);
  };

//   sm: 640px (small)
// md: 768px (medium)
// lg: 1024px (large)
// xl: 1280px (extra large)
// 2xl: 1536px (2x extra large)

  return (
    <section>
      <header className="flex justify-between fixed z-10 text-white w-full">
        <div className="flex bg-gray-200 xl:w-full h-10 items-center rounded-full px-1 w-60 justify-end mt-1 xl:mt-0 xl:h-[50px] xl:ml-0 xl:rounded-none xl:bg-gray-800 extra:ml-[190px] extraone:ml-52 extrathree:ml-[350px] extrasix:ml-[360px] lg:ml-4 ">
         <a href=""> <SearchIcon className="size-8 text-black xl:text-white" /></a>
          <input
            type="text"
            placeholder="Search limited products:"
            className="pl-3 rounded-full h-8 text-black bg-gray-200"
          />
        </div>
        <div className="flex gap-4 justify-items-end items-center pr-1 xl:hidden lg:hidden extra:pr-10 extrasix:pr-20 extraeight:pr-7">
          <div onClick={menuDropDown} className="flex">
            {menu ? (
              <X className="size-10 bg-gray-100 rounded-full ml-3 text-black mt-1 md:mt-3 absolute " />
            ) : (
              <Menu className="size-10" />
            )}
            {menu && (
              <div className="">
                <nav className="">
                  <ul
                    className="flex flex-col gap-7 pt-20 font-bold font-serif text-orange-600 md:pt-20  md:pr-6 md:text-2xl extrasix:text-lg extraone:pr-80 extranine:pl-3"
                    style={{
                      color: isActive("/contact")
                        ? "white"
                        : "rgb(234 88 12 / var(--tw-text-opacity, 1))",
                    }}
                  >
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/aboutus">About us</Link>
                    </li>
                    <li>
                      <Link to="/our-services">Our services</Link>
                    </li>
                    <li>
                      <Link to="/media">Media</Link>
                    </li>
                    <li>
                      <Link to="/sustainability">Sustainability</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="hidden xl:block absolute z-20 lg:flex">
        <ul className="flex text-white text-2xl gap-8 pl-[350px] pt-3 lg:fixed xl:text-2xl  lg:font-semibold xl:flex xl:gap-8 xl:ml-[80px] lg:flex lg:gap-8 lg:text-lg lg:ml-9">
          <li className="hover:text-green-700 xl:hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-700 xl:hover:underline">
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li className="hover:text-green-700 xl:hover:underline">
            <Link to="/ourservices">Our Services</Link>
          </li>
          <li className="hover:text-green-700 xl:hover:underline">
            <Link to="/media">Media</Link>
          </li>
          <li className="hover:text-green-700 xl:hover:underline">
            <Link to="/sustainability">Sustainability</Link>
          </li>
          <li className="hover:text-green-700 xl:hover:underline">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NavBar;
