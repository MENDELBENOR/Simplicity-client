import { useState } from "react";
import { IUser } from "../utils/types";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin7Line } from "react-icons/ri";
import UpdateUser from "../pages/UpdateUser";

type Sort = {
  key: keyof IUser | null;
  direction: "asc" | "desc";
};

type Prop = {
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  users: IUser[];
};

const Table = ({ setUsers, users }: Prop) => {
  const [popUpdateUser, setPopUpdateUser] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [sortConfig, setSortConfig] = useState<Sort>({
    key: null,
    direction: "asc",
  });

  // Function to handle sorting
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
    <>
      <table className="min-w-[400px] w-[80%] text-center overflow-x-auto border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-white">
            <th className="p-2 cursor-pointer">Icon</th>
            <th className="p-2 cursor-pointer border-l-2">Edit</th>
            <th
              onClick={() => sortData("firstName")}
              className="p-2 cursor-pointer border-l-2"
            >
              First name
            </th>
            <th
              onClick={() => sortData("lastName")}
              className="p-2 cursor-pointer border-l-2"
            >
              Last name
            </th>
            <th
              onClick={() => sortData("email")}
              className="p-2 cursor-pointer border-l-2"
            >
              Email
            </th>
            <th className="p-2 cursor-pointer border-l-2">Phone</th>
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
                  {user.icon ? (
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={user.icon}
                      alt=""
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full flex justify-center items-center object-cover bg-gray-200">
                      👤
                    </div>
                  )}
                </div>
              </td>
              <td className="p-2 text-center">
                <div className="flex flex-row items-center justify-center">
                  {/* Edit Button */}
                  <div className="rounded-full flex justify-center items-center object-cover hover:bg-gray-100">
                    <LiaEdit
                      onClick={() => {
                        setSelectedUser(user);
                        setPopUpdateUser(true);
                      }}
                      className="m-2 hover:bg-gray-200"
                    />
                  </div>
                  {/* Delete Button */}
                  <div className="rounded-full flex justify-center items-center object-cover hover:bg-gray-100">
                    <RiDeleteBin7Line className="m-2 hover:bg-gray-200" />
                  </div>
                </div>
              </td>
              <td className="p-2">{user.firstName}</td>
              <td className="p-2">{user.lastName}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>


      {popUpdateUser && selectedUser && (
        <UpdateUser
          setPopUpdateUser={setPopUpdateUser}
          data={selectedUser}
        />
      )}
    </>
  );
};

export default Table;
