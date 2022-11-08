import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

const usertabs = [
  {
    path: '/admin/users',
    name: 'Admins',
  },
  {
    path: '/admin/users/parents',
    name: 'Parents',
  },
];

export default function DashboarUsers() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>We have many users</p>
      <div>
        <div className="flex py-2 flex gap-4 shadow w-full">
          {usertabs.map((t) => (
            <Link to={t.path} className="text-blue-500 hover:text-red-500">
              {t.name}
            </Link>
          ))}
        </div>
        <div className="p-4 border">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
