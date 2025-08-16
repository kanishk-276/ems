import React from 'react'

export const Header = () => {
  return (
    <div>
      <div className="flex justify-center w-screen gap-x-300">
        <h1 className="text-xl font-semibold">
          Hello, Sarthak <span className="text-yellow-400">👋</span>
        </h1>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Log Out
        </button>
      </div>
    </div>
  );
}
export default Header;