import React, { useState } from 'react'
import { IUser } from '../utils/types';
import InputField from './InputField';

type Props = {
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export default function Search({ setUsers }: Props) {

    const [search, setSearch] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);

        // function to search for user
    }

    return (
        <InputField
            id="search-user"
            label=''
            type='text'
            isValid={(text: string) => text.trim().length < 30}
            value={search} onChange={handleChange}
            placeholder='search...' />
    )
}