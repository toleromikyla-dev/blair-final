export default function Intro({ onStart }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FFFCFA]">

      <div className="text-center px-6">

        <p className="uppercase tracking-[8px] text-rose-400 text-sm">
          FOR BLAIR
        </p>

        <h1 className="mt-8 text-5xl md:text-7xl font-light leading-tight text-gray-800">
          Hi.
          <br />
          I made something
          <br />
          I'd like you to see.
        </h1>

        <p className="mt-8 text-gray-500 leading-8">
          Every section was made with you in mind.
        </p>

        <button
          onClick={onStart}
          className="
            mt-12
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-rose-300
            px-8
            py-4
            text-gray-700
            hover:bg-rose-300
            hover:text-white
            transition-all
            duration-300
          "
        >
          Begin →
        </button>

      </div>

    </div>
  );
}