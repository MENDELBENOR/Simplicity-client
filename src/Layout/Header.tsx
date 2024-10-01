import { LuMenu } from 'react-icons/lu';

interface HeaderProps {
  toggleAside: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleAside }) => {

  return (
    <header className="bg-gray-800 text-white flex justify-end items-center relative">
      <div onClick={toggleAside} className="flex items-center justify-center w-12 h-8 border-2 border-gray-400 rounded-lg hover:bg-slate-300 m-2 cursor-pointer">
        <LuMenu className='w-12 h-6 text-gray-600 ' />
      </div>
    </header>

  );
};

export default Header;