import { useState } from "react";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: "member" | "admin";
};

type Sort = {
  key: keyof User | null;
  direction: "asc" | "desc";
};

const initialData: User[] = [
  {
    id: "12439",
    first_name: "Meir",
    last_name: "Banker",
    email: "meirb@gmail.com",
    status: "admin",
  },
  {
    id: "1102",
    first_name: "Samuel",
    last_name: "Mori",
    email: "shmuelb@gmail.com",
    status: "member",
  },
  {
    id: "3",
    first_name: "Alex",
    last_name: "Techerov",
    email: "alexT@gmail.com",
    status: "member",
  },
  {
    id: "4567",
    first_name: "Rachel",
    last_name: "Cohen",
    email: "rachelc@gmail.com",
    status: "admin",
  },
  {
    id: "987",
    first_name: "David",
    last_name: "Levi",
    email: "davidl@gmail.com",
    status: "member",
  },
  {
    id: "564",
    first_name: "Sarah",
    last_name: "Gold",
    email: "sarahg@gmail.com",
    status: "member",
  },
  {
    id: "2220",
    first_name: "John",
    last_name: "Doe",
    email: "johnd@gmail.com",
    status: "member",
  },
  {
    id: "8901",
    first_name: "Lily",
    last_name: "Smith",
    email: "lilys@gmail.com",
    status: "member",
  },
  {
    id: "1309",
    first_name: "Michael",
    last_name: "Jordan",
    email: "mjordan@gmail.com",
    status: "admin",
  },
  {
    id: "664",
    first_name: "Tina",
    last_name: "Turner",
    email: "tinat@gmail.com",
    status: "member",
  },
];

const Table = () => {
  const [data, setData] = useState<User[]>(initialData);
  const [sortConfig, setSortConfig] = useState<Sort>({
    key: null,
    direction: "asc",
  });

  const sortData = (key: keyof User) => {
    const sortedData: User[] = [...data];
    const direction = sortConfig.direction === "asc" ? "desc" : "asc";

    sortedData.sort((a, b) => {
      if (a[key] < b[key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto bg-gray-200 p-5 w-full h-full">
      <table className="min-w-[600px] w-[80%] text-center border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-white">
            <th
              onClick={() => sortData("first_name")}
              className="p-3 cursor-pointer"
            >
              First name
            </th>
            <th
              onClick={() => sortData("last_name")}
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
            <th
              onClick={() => sortData("status")}
              className="p-3 cursor-pointer border-l-2"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="transition-transform duration-300 ease-in-out  hover:bg-purple-100 hover:scale-105 bg-white"
            >
              <td className="p-3">{item.first_name}</td>
              <td className="p-3">{item.last_name}</td>
              <td className="p-3">{item.email}</td>
              <td
                className={`p-3 ${
                  item.status === "admin" ? "text-green-500" : "text-blue-500"
                }`}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
