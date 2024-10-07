import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Outlet } from 'react-router-dom';
import Side from "./Side";

const Layout: React.FC = () => {
  const [isAsideOpen, setAsideOpen] = useState<boolean>(false);

  const toggleAside = () => {
    setAsideOpen(!isAsideOpen)
  }

  return (
    <div className={`flex flex-col transition-transform duration-300  ${isAsideOpen ? `mr-[150px] ` : `mr-0`}`} >
      <Header toggleAside={toggleAside} isAsideOpen={isAsideOpen} />

      <Footer isAsideOpen={isAsideOpen} />
      <Side isOpen={isAsideOpen} />

      {/* allow to the routers to render */}
      <Outlet />
    </div>
  )
}
export default Layout;