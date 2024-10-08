import { LuMenu } from 'react-icons/lu';

type HeaderProps = {
  toggleAside: () => void;
  isAsideOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleAside, isAsideOpen }: HeaderProps) => {

  return (
    <header className="bg-gray-800 text-white flex justify-end fixed top-0 w-full shadow-md">
      <button
        onClick={toggleAside}
        className={`flex items-center justify-center w-12 h-8 border-2 border-gray-400 rounded-lg hover:bg-slate-300 m-2 cursor-pointer transition-transform duration-500 ease-in-out ${isAsideOpen ? 'mr-[170px]' : 'mr-5'}`}>
        <LuMenu className='w-12 h-6 text-gray-600' />
      </button>
    </header>
  );
};

export default Header;
