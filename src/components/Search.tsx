import { searchUser } from '../hooks/UseUsers';
import { IUser } from '../utils/types';

type Props = {
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export default function Search({ setUsers }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;

        if (text.length === 0) return;

        // function to search for user
        searchUser(text, setUsers);
    }

    return (
        <input
            type="text"
            placeholder="Search"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none ring-2 focus:ring-blue-500 transition duration-150"
            minLength={2}
            onChange={handleChange}
            required
        />
    )
}