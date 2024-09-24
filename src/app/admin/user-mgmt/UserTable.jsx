"use client";
import React from "react";
import { useRouter } from 'next/navigation';
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
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td><button onClick={()=> router.push(`/admin/user-mgmt/edit/${user.id}`)} >Edit</button></td>
              <td><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
