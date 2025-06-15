import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-silk-crimson-400 via-imperial-gold-500 to-ink-black font-sans">
      <div className="text-center px-6 py-12 rounded-3xl bg-white/10 shadow-2xl border border-imperial-gold-400/30 backdrop-blur-md">
        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="text-7xl md:text-8xl animate-bounce">🚧</span>
          <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow">This Page is Under Construction</h1>
        </div>
        <p className="text-lg md:text-xl text-pearl-white/90 mb-8 max-w-xl mx-auto">
          We're working hard to bring you something amazing here soon.<br/>
          In the meantime, you can explore our <span className="text-imperial-gold-400 font-semibold">Home</span> and <span className="text-silk-crimson-400 font-semibold">Product</span> pages.
        </p>
        <a href="/" className="inline-block bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 hover:from-silk-crimson-600 hover:to-imperial-gold-600 text-pearl-white font-bold px-8 py-4 rounded-full shadow-xl transition text-lg">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
