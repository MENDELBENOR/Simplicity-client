import { LuMenu } from 'react-icons/lu';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleTheme } from '../redux/slices/themeSlice';

type HeaderProps = {
  toggleAside: () => void;
  isAsideOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleAside, isAsideOpen }: HeaderProps) => {
  const user = useSelector((state: RootState) => state.user.user);
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center fixed top-0 w-full shadow-md">
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <p className='p-2'>{user?.firstName}</p>
      <button
        onClick={toggleAside}
        className={`flex items-center justify-center w-12 h-8 border-2 border-gray-400 rounded-lg hover:bg-slate-300 m-2 cursor-pointer transition-transform duration-500 ease-in-out ${isAsideOpen ? 'mr-[170px]' : 'mr-5'}`}>
        <LuMenu className='w-12 h-6 text-gray-600 z-40' />
      </button>
    </header>
  );
};

export default Header;
