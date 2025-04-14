import React from "react";
import { Home, Calendar, Globe, MessageSquare, LogOut } from "lucide-react";

const Menu = () => {
  return (
<div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-zinc-800 bg-opacity-10 p-2 rounded-2xl shadow-lg flex gap-4 z-50 w-auto backdrop-blur-md">


      <NavItem Icon={Home} color="bg-green-700" />
      <NavItem Icon={Calendar} color="bg-yellow-700" />
      <NavItem Icon={Globe} color="bg-blue-700" />
      <NavItem Icon={MessageSquare} color="bg-blue-700" />
      <NavItem Icon={LogOut} color="bg-red-700" />
    </div>
  );
};

const NavItem = ({ Icon, color }) => {
  return (
    <button className={`p-2 rounded-full text-white ${color} hover:opacity-80`}>
      <Icon size={20} />
    </button>
  );
};

export default Menu;
