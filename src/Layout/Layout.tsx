import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import Side from "./Side";

const Layout: React.FC = () => {
  const [isAsideOpen, setAsideOpen] = useState<boolean>(true);

  const toggleAside = () => {
    setAsideOpen(!isAsideOpen)
  }

  return (
    <div className={`flex flex-col min-h-screen transition-transform duration-30 ${isAsideOpen ? `mr-[150px]` : `mr-0`}`} >
      <Header toggleAside={toggleAside} />
      <main className="flex-grow">

      </main>
      <Footer />
      <Side isOpen={isAsideOpen}/>
    </div>
  )
}
export default Layout;