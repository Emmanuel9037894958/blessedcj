import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import NavList from "./nav/NavList";
import SearchNav from "./SearchNav";
function NavBar() {
  // const location = useLocation();
  // const isActive = (path: any) => location.pathname === path;

  const [menu, setMenu] = useState(false);

  const menuDropDown = () => {
    setMenu(!menu);
  };

  return (
    <section className="relative overflow-hidden">
      <header className={`fixed z-50 flex justify-between pr-2 pt-2 gap-16 w-full extrasix:hidden ${menu && "bg-white"}`}>
        <SearchNav  />
        <div>
          <div onClick={menuDropDown} className="">
            {menu ? <X className="size-11 bg-gray-200 rounded-full" /> : <Menu className="size-11 bg-gray-200 box" />}
          </div>
          <div>{menu && <NavList />}</div>
        </div>
      </header>
      <div>
      <header className="hidden md:flex fixed z-50 w-full bg-gray-800 shadow-md p-4 box">  
        <div className=" items-center w-full">  
          <nav className="">   
         <ul  className="flex space-x-6 text-white extrasix:ml-7 xl:pl-[400px] xl:gap-9 extrapoint:pl-20 extrapoint:gap-5 lg:pl-15 lg:gap-9">
         <li className="hover:underline hover:text-green-800"><Link to="/" className="text-2xl font- lg:text- lg:font-bold">Home</Link></li>  
         <li className="hover:underline hover:text-green-800"> <Link to="/AboutUs" className="text-2xl font- lg:text- lg:font-bold">AboutUs</Link></li>  
         <li className="hover:underline hover:text-green-800">
         <Link to="/Contact" className="text-2xl font- lg:text- lg:font-bold">Contact</Link></li>  
          <li className="hover:underline hover:text-green-800"><Link to="/Media" className="text-2xl font- lg:text- lg:font-bold">Media</Link> </li> 
         <li className="hover:underline hover:text-green-800"> <Link to="/Sustainability" className="text-2xl font- lg:text- lg:font-bold">Sustainability</Link> </li> 
         <li className="hover:underline hover:text-green-800"> <Link to="/OurServices" className="text-2xl font- lg:text- lg:font-bold">OurServices</Link></li>  
         </ul>
            
          </nav>    
        </div>  
      </header> 
      </div>
    </section>
  );
}

export default NavBar;
