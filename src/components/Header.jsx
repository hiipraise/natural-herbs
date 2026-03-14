// components/Header.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Leaf } from "lucide-react";

const MotionDiv = motion.div;

const Header = ({
  currentPage,
  setCurrentPage,
  menuOpen,
  setMenuOpen,
  searchQuery,
  setSearchQuery,
}) => {
  const navigation = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
    { name: "Place Order", id: "order" },
  ];

  // Only show search on home page
  const showSearch = currentPage === "home";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <Leaf className="w-10 h-10 text-emerald-700" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Dr. Amara
              </h1>
              <p className="text-xs text-gray-600">Natural Healthcare</p>
            </div>
          </motion.div>

          {/* Desktop Search - Only on Home page */}
          {showSearch && (
            <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search treatments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-emerald-700 focus:outline-none"
              />
            </div>
          )}

          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(item.id)}
                className={`font-semibold transition ${
                  currentPage === item.id
                    ? "text-emerald-700"
                    : "text-gray-600 hover:text-emerald-700"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Search - Only on Home page */}
        {showSearch && (
          <div className="md:hidden mt-4">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-emerald-700 focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navigation.map((item) => (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-lg font-semibold transition ${
                    currentPage === item.id
                      ? "bg-emerald-700 text-white"
                      : "text-gray-600 hover:bg-emerald-50"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
