import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      <div className="bg-gray-800">
        <div className="h-16 px-8 flex items-center">
          <p className="text-white font-bold">Employee Management System</p>
        </div>
      </div>

      <div className="container mx-auto my-8 h-12 p-4">
        <button
          onClick={() => setIsAdding(true)}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;
