import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  const links = [
    { path: '/admin', title: 'Dasboard' },
    { path: '/admin/users', title: 'Users' },
  ];
  return (
    <div className="">
      <div className="flex justify-between items-center shadow p-4">
        <Link to={'/'} className="text-blue-600">
          Home
        </Link>
        <span>Logout</span>
      </div>
      <h1>Dashboard</h1>
      <div className="flex">
        <div className="w-80 border-r h-screen p-4 flex flex-col gap-2">
          {links.map((u) => (
            <Link
              key={u.title}
              to={u.path}
              className="text-blue-600 hover:text-red-400"
            >
              {u.title}
            </Link>
          ))}
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
