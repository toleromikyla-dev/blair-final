export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/30 bg-white/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-semibold text-rose-400">
          Blair
        </h1>

        <nav className="hidden gap-8 text-gray-700 md:flex">
          <a href="#hero" className="hover:text-rose-400">
            Home
          </a>

          <a href="#letter" className="hover:text-rose-400">
            Letter
          </a>

          <a href="#footer" className="hover:text-rose-400">
            End
          </a>
        </nav>

      </div>
    </header>
  );
}