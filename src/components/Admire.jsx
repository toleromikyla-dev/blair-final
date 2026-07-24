import Reveal from "./Reveal";

export default function Admire() {
  return (
    <section
      id="admire"
      className="relative overflow-hidden bg-[#fffaf9] py-32 px-6"
    >
      {/* Background Accent */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-rose-100 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-pink-100 blur-3xl opacity-30"></div>

      <Reveal>
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-rose-400 text-sm">
              WHAT I REALIZED
            </p>

            <h2 className="mt-5 text-5xl md:text-6xl font-light text-gray-800 leading-tight">
              Sometimes,
              <br />
              appreciation isn't
              <br />
              the same as compatibility.
            </h2>
          </div>

          {/* Letter Card */}
          <div className="bg-white rounded-[40px] border border-rose-100 shadow-xl p-8 md:p-14">

            <div className="space-y-8 text-gray-600 text-lg leading-9">

              <p>
                I don't think this is the ending I imagined when I first decided
                to get to know you, but I guess life has a way of teaching us
                things we never expect.
              </p>

              <p>
                Sometimes, no matter how much you appreciate someone, you also
                have to be honest enough to admit that not every connection is
                meant to become something more.
              </p>

              <p>
                I don't want to force something just because I genuinely like
                you. I'd rather accept things for what they are than keep hoping
                for something that may never feel right for either of us.
              </p>

              <p>
                If there's one thing I want you to know, it's that meeting you
                is something I'll never regret. You became someone I genuinely
                appreciated, and that's something I'll always carry with me.
              </p>

              <p>
                Thank you for every conversation, every laugh, and every little
                moment we shared. Even if they seemed ordinary at the time, they
                meant more to me than you probably realized.
              </p>

              <p>
                Thank you for allowing me to get to know you, even if it was
                only for a little while. I truly appreciate that more than words
                can explain.
              </p>

              <p>
                I sincerely hope life treats you kindly, and I hope you find the
                happiness, peace, and love you deserve.
              </p>

              <p className="italic text-gray-500">
                Some people come into our lives not to stay forever, but to
                leave us with something worth remembering. Thank you for being
                one of those people.
              </p>

            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}