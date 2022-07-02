import {Avatar, Table} from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { useEffect, useState } from "react";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a href="!#">{ text }</a>
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="!#">{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "role",
    render: (text) => <a href="!#">{ text }</a>,
  },
  {
    title: "Avatar",
    key: "avatar",
    dataIndex: "avatar",
    render: (text) => <Avatar src={ text } />,
  },
];

export default function UserList() {
  const [users, setUsers] = useState([]);
  //  console.log(users)
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/users")
      .then((res) => setUsers(res?.data));
  }, []);

  return (
  <Table columns={columns} dataSource={users} />
  );
}
