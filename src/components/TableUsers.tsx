import { useEffect, useState } from "react";
import { IUser } from "../utils/types";
import { getUsers } from "../hooks/UseUsers";


type Sort = {
  key: keyof IUser | null;
  direction: "asc" | "desc";
};

const Table = () => {

  const [users, setUsers] = useState<IUser[]>([]);
  const [sortConfig, setSortConfig] = useState<Sort>({
    key: null,
    direction: "asc",
  });

  useEffect(() => {
    getUsers(setUsers)
  }, [])

  const sortData = (key: keyof IUser) => {
    const sortedData: IUser[] = [...users];
    const direction = sortConfig.direction === "asc" ? "desc" : "asc";

    sortedData.sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setUsers(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto bg-gray-200 p-5 w-full h-full">
      <table className="min-w-[600px] w-[80%] text-center border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-white">
            <th
              onClick={() => sortData("firstName")}
              className="p-3 cursor-pointer"
            >
              First name
            </th>
            <th
              onClick={() => sortData("lastName")}
              className="p-3 cursor-pointer border-l-2"
            >
              Last name
            </th>
            <th
              onClick={() => sortData("email")}
              className="p-3 cursor-pointer border-l-2"
            >
              Email
            </th>
            <th className="p-3 cursor-pointer border-l-2">
              Phone
            </th>
            <th className="p-3 cursor-pointer border-l-2">
              Icon
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              className="transition-transform duration-300 ease-in-out hover:bg-purple-100 hover:scale-105 bg-white"
            >
              <td className="p-3">{user.firstName}</td>
              <td className="p-3">{user.lastName}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.phone}</td>
              <td className="w-full flex justify-center items-center">
                {user.icon !== "" ? <img className="w-10 h-10 rounded-full object-cover" src={user.icon} alt="" /> : <div className="w-10 h-10 rounded-full object-cover">👤</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

