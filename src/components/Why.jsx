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
              WHY THIS EXISTS
            </p>

            <h2 className="mt-5 text-5xl md:text-6xl font-light leading-tight text-gray-800">
              Because a message
              <br />
              never felt enough.
            </h2>
          </div>



          {/* Right */}
          <div className="space-y-6 text-lg leading-9 text-gray-600">

            <p>
              I know you've been through things that made trusting someone difficult.
            </p>

            <p>
              This isn't my way of asking you for an answer.
            </p>

            <p>
              It's simply my way of showing that you're worth putting time,
              effort, and heart into.
            </p>

            <p>
              Whether this changes anything or not, I wanted to create something
              that you could always come back to.
            </p>

          </div>


        </div>

      </Reveal>

    </section>
  );
}