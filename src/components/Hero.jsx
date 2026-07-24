import lily from "../assets/lily.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#FFFCFA] flex items-center py-20 lg:py-0"
    >
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 h-80 w-80 md:h-96 md:w-96 rounded-full bg-rose-100 blur-3xl opacity-60"></div>

      <div className="absolute bottom-0 -right-40 h-[350px] w-[350px] md:h-[500px] md:w-[500px] rounded-full bg-pink-100 blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT */}
        <div className="order-2 lg:order-1 text-center lg:text-left">

          <p className="uppercase tracking-[6px] md:tracking-[8px] text-rose-400 text-xs md:text-sm">
            FOR BLAIR
          </p>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-800">
            Hi,
            <br />
            Blair.
          </h1>

          <p className="mt-6 text-base md:text-lg leading-8 md:leading-9 text-gray-600 max-w-xl mx-auto lg:mx-0">
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
            className="
              inline-flex
              items-center
              justify-center
              mt-10
              rounded-full
              border
              border-rose-300
              px-7
              py-3.5
              text-sm
              md:text-base
              hover:bg-rose-300
              hover:text-white
              transition-all
              duration-300
            "
          >
            Scroll to Continue
          </a>

        </div>

        {/* RIGHT */}
        <div className="order-1 lg:order-2 flex justify-center">

          <img
            src={lily}
            alt="White Lily"
            className="
              w-56
              sm:w-72
              md:w-80
              lg:w-[450px]
              xl:w-[500px]
              drop-shadow-2xl
              animate-float
              select-none
              pointer-events-none
            "
          />

        </div>

      </div>
    </section>
  );
}