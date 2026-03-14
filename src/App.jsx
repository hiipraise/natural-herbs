// App.jsx
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  ScrollRestoration,
} from "react-router-dom";
import { MessageCircle, ArrowUp } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OrderPage from "./pages/OrderPage";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Inject Tawk.to Script
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6971ec98dd396719806f847f/1jfig8de2";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode.insertBefore(script, s0);
  }, []);

  // Get current page from URL
  const getCurrentPage = () => {
    const path = location.pathname.slice(1);
    return path === "" ? "home" : path;
  };

  const currentPage = getCurrentPage();

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const phoneNumber = "14482008706";
    const message = encodeURIComponent(
      "Hello! I'm interested in your natural healthcare services.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Navigation helper function for child components
  const setCurrentPage = (page) => {
    // Clear search query when navigating away from home
    if (page !== "home") {
      setSearchQuery("");
    }
    const route = page === "home" ? "/" : `/${page}`;
    navigate(route);
    setMenuOpen(false);
  };

  return (
    <>
      <ScrollRestoration />

      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="max-w-7xl mx-auto px-4 py-12">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  setCurrentPage={setCurrentPage}
                  searchQuery={searchQuery}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </main>

        <Footer setCurrentPage={setCurrentPage} />

        <button
          onClick={openWhatsApp}
          className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Chat with us
          </span>
        </button>

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-24 left-6 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-bounce"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
};

export default App;
