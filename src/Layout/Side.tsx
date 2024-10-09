import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbLogout } from "react-icons/tb";
import UseUsers from '../hooks/UseUsers';

interface SideProps {
  isOpen: boolean;
}

const Side: React.FC<SideProps> = ({ isOpen }) => {
  const { logout } = UseUsers();
  return (
    <aside
      className={`fixed top-0 right-0 w-[150px] h-full bg-black text-white p-4 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ zIndex: 1000 }}
    >
      {/* לוגו */}
      <div className='relative flex justify-center items-center mb-8 mt-1'>
        <div className='absolute text-black text-sm top-[33px] font-bold'>
          Simplicity
        </div>
        <img src="../../public/images/M.png" alt="Image" className='w-28' />
      </div>

      {/* קישורים במרכז */}
      <div className='flex flex-col items-center space-y-4'>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? 'text-green-400 border-b-2 border-green-400'
              : 'hover:text-green-400 hover:border-b-2 hover:border-green-400 transition-colors duration-200'}>
          Users
        </NavLink>
      </div>

      {/* כפתור התנתקות בתחתית */}
      <div className='flex flex-col items-center'>
        <h2 className='mb-4'>MSbit</h2>
        <button onClick={logout} className="text-xl hover:text-red-400 transition-colors duration-200">
          <TbLogout />
        </button>
      </div>
    </aside>
  );
};

export default Side;
