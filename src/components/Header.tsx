import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl p-2 font-semibold">Welcome to Management User</h2>
      <p className="text-gray-500 text-sm">
        Manage your data user with this app, action is create, update, delete
      </p>
    </div>
  );
};

export default Header;
