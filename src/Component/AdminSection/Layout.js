import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react"; // Optional icon

const Layout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-700 text-white shadow">
        <div className="text-xl font-semibold">Admin Panel</div>
        <button onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar (Mobile + Desktop) */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-gray-700 text-white md:min-h-screen shadow-lg transition-all duration-300`}
      >
        <div className="hidden md:block text-2xl font-bold text-center py-6 border-b border-gray-900">
          Admin Panel
        </div>
        <nav className="flex flex-col p-4 gap-4">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-blue-600 ${
                isActive ? "bg-blue-600 font-semibold" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/upload"
            className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-blue-600 ${
                isActive ? "bg-blue-600 font-semibold" : ""
              }`
            }
          >
            Upload New
          </NavLink>
          <NavLink
            to="/admin/history"
            className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-blue-600 ${
                isActive ? "bg-blue-600 font-semibold" : ""
              }`
            }
          >
            Recent Upload History
          </NavLink>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded hover:bg-red-600 text-left"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
