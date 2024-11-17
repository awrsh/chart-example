import React from "react";
import { FaHome, FaChartBar, FaUser, FaBars } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`h-full bg-blue-800 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Toggle Button */}
      <div
        className="p-4 flex justify-end cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </div>
      {/* Menu Items */}
      <div className="flex h-[90%] flex-col justify-between">
        <ul className="mt-4">
          <li
            className={`flex items-center gap-2 px-4 py-3 hover:bg-blue-600 ${
              isOpen ? "" : "justify-center"
            }`}
          >
            <FaHome size={20} />
            {isOpen && <span>داشبورد</span>}
          </li>
          <li
            className={`flex items-center gap-2 px-4 py-3 hover:bg-blue-600 ${
              isOpen ? "" : "justify-center"
            }`}
          >
            <FaChartBar size={20} />
            {isOpen && <span>گزارش‌ها</span>}
          </li>
          <li
            className={`flex items-center gap-2 px-4 py-3 hover:bg-blue-600 ${
              isOpen ? "" : "justify-center"
            }`}
          >
            <FaUser size={20} />
            {isOpen && <span>پروفایل</span>}
          </li>
        </ul>
        {/* Footer */}
        <div
          className={`p-4 text-center border-t border-blue-700 ${
            isOpen ? "" : "text-sm"
          }`}
        >
          {isOpen ? <p>نسخه 1.0.0</p> : <p>1.0.0</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
