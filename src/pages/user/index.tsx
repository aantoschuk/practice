import { useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState<{ name: string }[]>([]);

  const loadUsers = async () => {
    // request from next.js api routes
    const response = await fetch("/api/user");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <>
      <h1>Users</h1>
      <button onClick={loadUsers}>Load users</button>
      {users && users.map((user) => <p key={user.name}>{user.name}</p>)}
    </>
  );
};

export default UsersPage;
