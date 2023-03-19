import { ChangeEvent, useState } from "react";

type TUser = {
  name: string;
};

const UsersPage = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [user, setUser] = useState<TUser>({ name: "" });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ name: event.target.value });
  };

  const createUser = async () => {
    try {
      // POST request
      await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ user }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUsers((prevState) => [...prevState, user]);
    } catch (error) {
      console.log(error);
    }
  };

  const loadUsers = async () => {
    // request from next.js api routes
    const response = await fetch("/api/user");
    const data = await response.json();
    setUsers(data);
  };

  const deleteUser = async () => {
    const response = await fetch(`/api/user/${1}`, { method: "DELETE" });
  };

  return (
    <>
      <h1>Users</h1>
      <button onClick={loadUsers}>Load users</button>
      {users.length > 0 && (
        <div>
          <input
            placeholder="User name"
            onChange={onChange}
            value={user?.name}
          />
          <button onClick={createUser}>Add user</button>
          <button onClick={deleteUser}>delete</button>
          {users.map((user) => (
            <p key={user.name}>{user.name}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default UsersPage;
