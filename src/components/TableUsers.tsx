import { useState } from "react";
import useUsers from "../hooks/UseUsers";
import { IUser } from "../utils/types";


type Sort = {
  key: keyof IUser | null;
  direction: "asc" | "desc";
};

const initialData: IUser[] = [
  {
    _id: "12439",
    firstName: "Meir",
    lastName: "Banker",
    email: "meirb@gmail.com",
    phone: "0538700916", 
    icon: "",
    password: "",
    workSpaceList: [""]
  },
  {
    _id: "1102",
    firstName: "Samuel",
    lastName: "Mori",
    email: "shmuelb@gmail.com",
    phone: "0506538466",
    password: "",
    workSpaceList: [],
    icon: ""
  },
  {
    _id: "3",
    firstName: "Alex",
    lastName: "Techerov",
    email: "alexT@gmail.com",
    phone: "0523446999",
    password: "",
    workSpaceList: [],
    icon: ""
  },
  {
    _id: "4567",
    firstName: "Rachel",
    lastName: "Cohen",
    email: "rachelc@gmail.com",
    phone: "05839402777",
    password: "",
    workSpaceList: [],
    icon: ""
  },
  {
    _id: "987",
    firstName: "David",
    lastName: "Levi",
    email: "davidl@gmail.com",
    phone: "02573950389",
    password: "",
    workSpaceList: [],
    icon: "https://img.freepik.com/free-photo/portrait-smiley-man-looking-camera_23-2148289238.jpg?t=st=1727553036~exp=1727556636~hmac=de13ddfbc9452e54ea3bf97b00c673a06c1ea2e25373c548d5232cadf14455d2&w=360"
  },
  {
    _id: "564",
    firstName: "Sarah",
    lastName: "Gold",
    email: "sarahg@gmail.com",
    phone: "0592645552",
    password: "",
    workSpaceList: [],
    icon: "https://img.freepik.com/premium-photo/confident-young-man-denim-shirt-smiling-outdoors_1281228-863.jpg?size=626&ext=jpg&ga=GA1.1.382465061.1723013712&semt=ais_hybrid"
  },
  {
    _id: "2220",
    firstName: "John",
    lastName: "Doe",
    email: "johnd@gmail.com",
    phone: "02749294759",
    password: "",
    workSpaceList: [],
    icon: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?t=st=1727552985~exp=1727556585~hmac=35ab2e38702edd179ff1191a0c03bba9e8d822b9c72675b67c6b7e6ca54d9b52&w=996"
  },
  {
    _id: "8901",
    firstName: "Lily",
    lastName: "Smith",
    email: "lilys@gmail.com",
    phone: "05927495009",
    password: "",
    workSpaceList: [],
    icon: "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?t=st=1727552674~exp=1727556274~hmac=d48155f8724e8a9a69f80eacc2ccfb0b623f45a847478d47dc149d726863db9f&w=996"
  },
  {
    _id: "1309",
    firstName: "Michael",
    lastName: "Jordan",
    email: "mjordan@gmail.com",
    phone: "05069274033",
    password: "",
    workSpaceList: [],
    icon: "https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg?t=st=1727552923~exp=1727556523~hmac=528136b9775728f453b0ff842b495c3032f75b20190cf79473f6410bd82235b0&w=996"
  },
  {
    _id: "664",
    firstName: "Tina",
    lastName: "Turner",
    email: "tinat@gmail.com",
    phone: "03349535647",
    password: "",
    workSpaceList: [],
    icon: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1727552563~exp=1727556163~hmac=b3b622afca692e41e1f81a829acc36b26cd389092bcc54bef03da180fd505055&w=996"
  }
];



const Table = () => {
  const { error, loading } = useUsers();
  const [data, setData] = useState<IUser[]>(initialData);
  const [sortConfig, setSortConfig] = useState<Sort>({
    key: null,
    direction: "asc",
  });

  const sortData = (key: keyof IUser) => {
    const sortedData: IUser[] = [...data];
    const direction = sortConfig.direction === "asc" ? "desc" : "asc";

    sortedData.sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

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
          {data.map((item) => (
            <tr
              key={item._id}
              className="transition-transform duration-300 ease-in-out hover:bg-purple-100 hover:scale-105 bg-white"
            >
              <td className="p-3">{item.firstName}</td>
              <td className="p-3">{item.lastName}</td>
              <td className="p-3">{item.email}</td>
              <td className="p-3">{item.phone}</td>
              <td className="w-full flex justify-center items-center">
                {item.icon !== "" ? <img className="w-10 h-10 rounded-full object-cover" src={item.icon} alt="" /> : <div className="w-10 h-10 rounded-full object-cover">👤</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

