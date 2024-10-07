import { useEffect, useState } from "react";
import { IUser } from "../utils/types";
import { getUsers } from "../hooks/UseUsers";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin7Line } from "react-icons/ri";
import UpdateUser from "../pages/UpdateUser";


type Sort = {
  key: keyof IUser | null;
  direction: "asc" | "desc";
};

const Table = () => {
  const [popUpdateUser, setPopUpdateUser] = useState<boolean>(false);
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
    <div className="w-full overflow-x-auto">
      <table className="min-w-[400px] w-[80%] text-center border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-white">
            <th className="p-3 cursor-pointer">
              Icon
            </th>
            <th
              className="p-3 cursor-pointer border-l-2"
            >
              Edit
            </th>
            <th
              onClick={() => sortData("firstName")}
              className="p-3 cursor-pointer border-l-2"
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
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              className="transition-transform duration-300 ease-in-out bg-white"
            >
              <td>
                <div className="w-full flex justify-center items-center">
                  {user.icon ? <img className="w-10 h-10 rounded-full object-cover" src={user.icon} alt="" /> : <div className="w-10 h-10 rounded-full flex justify-center items-center object-cover bg-gray-200">👤</div>}
                </div>
              </td>
              <td className="p-3 text-center">
                <div className="flex flex-row items-center justify-center">
                  <div className="rounded-full flex justify-center items-center object-cover hover:bg-gray-100">
                    <LiaEdit
                      onClick={() => { setPopUpdateUser(true) }}

                      className="m-2 hover:bg-gray-200" />
                    {popUpdateUser && <UpdateUser setPopUpdateUser={setPopUpdateUser} data={user} />}
                  </div>
                  <div className="rounded-full flex justify-center items-center object-cover hover:bg-gray-100">
                    <RiDeleteBin7Line className="m-2 hover:bg-gray-200" />
                  </div>
                </div>
              </td>
              <td className="p-3">{user.firstName}</td>
              <td className="p-3">{user.lastName}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default Table;

