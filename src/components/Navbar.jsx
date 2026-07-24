import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "The First Step", href: "#why" },
    { name: "If You Let Me", href: "#admire" },
    { name: "Wondering?", href: "#wondering" },
    { name: "Letter", href: "#letter" },
    { name: "One Last Thing", href: "#court" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-xl bg-white/70 border-b border-white/40">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <a
            href="#hero"
            className="text-xl font-light tracking-[4px] text-gray-800"
          >
            FOR BLAIR
          </a>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-rose-400 transition duration-300 text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1"
          >
            <span
              className={`w-6 h-0.5 bg-gray-700 transition ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-700 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-700 transition ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-6 flex flex-col gap-5 bg-white/90 backdrop-blur-xl">

            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-rose-400 transition"
              >
                {item.name}
              </a>
            ))}

          </div>
        </div>

      </div>
    </header>
  );
}