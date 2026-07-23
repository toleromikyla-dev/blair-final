import lily from "../assets/lily.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#FFFCFA] flex items-center"
    >
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-rose-100 blur-3xl opacity-60"></div>

      <div className="absolute bottom-0 -right-40 h-[500px] w-[500px] rounded-full bg-pink-100 blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div className="text-center lg:text-left">

          <p className="uppercase tracking-[8px] text-rose-400 text-sm">
            FOR BLAIR
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight text-gray-800">
            Hi,
            <br />
            Blair.
          </h1>

          <p className="mt-8 text-lg leading-9 text-gray-600 max-w-xl">
            Before anything else,
            thank you for taking the time to open this.

            <br /><br />

            I know this might be unexpected,
            but I wanted to create something
            instead of sending another ordinary message.

            <br /><br />

            Take your time.

            There's no pressure here.
          </p>

          <a
            href="#why"
            className="inline-flex items-center mt-10 rounded-full border border-rose-300 px-8 py-4 hover:bg-rose-300 hover:text-white transition-all duration-300"
          >
            Scroll to Continue
          </a>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <img
            src={lily}
            alt="White Lily"
            className="w-[320px] md:w-[450px] drop-shadow-2xl animate-float"
          />

        </div>

      </div>

    </section>
  );
}