import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div
      className="flex items-center justify-center flex-col h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80)',
      }}
    >
      <div className="bg-white p-8 text-center rounded">
        <h1>Hello to react router map</h1>
        <p>
          <Link to={'/admin'} className="text-blue-500">
            Visit Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}
