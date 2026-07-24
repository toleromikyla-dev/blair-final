import Reveal from "./Reveal";

export default function Wondering() {
  return (
    <section
      id="wondering"
      className="bg-white py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute left-10 bottom-10 text-7xl opacity-10">
        🌿
      </div>

      <Reveal>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-rose-400 text-sm">
              THINGS I NEVER SAID
            </p>

            <h2 className="mt-5 text-5xl md:text-6xl font-light text-gray-800 leading-tight">
              Before I leave this here...
            </h2>

          </div>

          <div className="space-y-10">

            <div className="border-l-2 border-rose-200 pl-8">
              <h3 className="text-2xl font-light text-gray-800 mb-3">
                You deserve consistency.
              </h3>

              <p className="text-gray-600 leading-9">
                I hope the next person who comes into your life makes you feel
                chosen every single day, and never leaves you wondering where
                you stand.
              </p>
            </div>

            <div className="border-l-2 border-rose-200 pl-8">
              <h3 className="text-2xl font-light text-gray-800 mb-3">
                Don't lose yourself.
              </h3>

              <p className="text-gray-600 leading-9">
                Keep being the person you are. Your kindness, your heart, and
                the way you genuinely care about people are rare. I hope life
                never changes that.
              </p>
            </div>

            <div className="border-l-2 border-rose-200 pl-8">
              <h3 className="text-2xl font-light text-gray-800 mb-3">
                I hope you're happy.
              </h3>

              <p className="text-gray-600 leading-9">
                Whether our paths ever cross again or not, I sincerely hope you
                find the kind of life you've always wanted. One that's peaceful,
                fulfilling, and surrounded by people who love you the way you
                deserve.
              </p>
            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}