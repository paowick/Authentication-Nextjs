"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Deleteuser } from "./Deleteuser";
export default function UserTable({ users }) {
  const router = useRouter();
  return (
    <div>
      <h1>User List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>role</th>
            <th>Reg Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
              <td>
                <button
                  onClick={() =>
                    router.push(`/admin/user-mgmt/edit/${user.id}`)
                  }
                >
                  Edit
                </button>
                <button onClick={() => Deleteuser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
