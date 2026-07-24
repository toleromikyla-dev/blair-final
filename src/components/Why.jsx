import Reveal from "./Reveal";

export default function Why() {
  return (
    <section
      id="why"
      className="bg-white py-32 px-6"
    >
      <Reveal>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="uppercase tracking-[5px] text-rose-400 text-sm">
              THE FIRST STEP
            </p>

            <h2 className="mt-5 text-5xl md:text-6xl font-light leading-tight text-gray-800">
              There was something
              <br />
              I needed to be honest about.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-6 text-lg leading-9 text-gray-600">

            <p>
              As much as I wanted to keep pursuing you, I realized that wanting
              something isn't always enough.
            </p>

            <p>
              This isn't because I'm upset with you, and it isn't because I
              stopped appreciating you. If anything, I'm genuinely grateful that
              I got the chance to know you.
            </p>

            <p>
              But somewhere along the way, I realized that if I kept holding on
              to whatever this is between us, I'd slowly lose my own peace of
              mind.
            </p>

            <p>
              I know myself, and I know what I can and can't handle. Instead of
              forcing myself to keep going while quietly struggling, I'd rather
              be honest with both of us now.
            </p>

            <p>
              This isn't me giving up on you. It's simply me choosing to be
              honest with myself, because I don't believe that something meant
              to be should constantly cost you your peace.
            </p>

          </div>

        </div>

      </Reveal>
    </section>
  );
}