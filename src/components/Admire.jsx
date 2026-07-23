import Reveal from "./Reveal";

export default function Admire() {

  const cards = [
    {
      title: "Your Smile",
      text: "I don't know if you notice it, but it's one of the first things that made me smile too."
    },
    {
      title: "Your Kindness",
      text: "The way you treat people says a lot about the kind of person you are."
    },
    {
      title: "Your Strength",
      text: "Even after everything you've been through, you still choose to be kind."
    },
    {
      title: "Your Personality",
      text: "Talking to you never feels forced. It just feels easy."
    },
    {
      title: "Your Heart",
      text: "You care more than you realize, and that's something I genuinely admire."
    },
    {
      title: "Simply You",
      text: "I don't think it's one specific thing. It's just you."
    }
  ];


  return (
    <section
      id="admire"
      className="bg-[#fffaf9] py-32 px-6 relative overflow-hidden"
    >

      {/* Background Lily Accent */}
      <div
        className="
          absolute
          right-10
          top-20
          text-8xl
          opacity-10
        "
      >
        🌿
      </div>


      <Reveal>

        <div className="max-w-6xl mx-auto">


          {/* Section Header */}
          <div className="text-center mb-20">

            <p
              className="
                uppercase
                tracking-[5px]
                text-rose-400
                text-sm
              "
            >
              THINGS I LIKE ABOUT YOU
            </p>


            <h2
              className="
                mt-5
                text-5xl
                md:text-6xl
                font-light
                text-gray-800
                leading-tight
              "
            >
              The little things
              <br />
              that made me notice you.
            </h2>

          </div>



          {/* Cards */}
          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >

            {cards.map((card, index) => (

              <div
                key={index}
                className="
                  group
                  bg-white/70
                  backdrop-blur-md
                  border
                  border-white
                  rounded-3xl
                  p-8
                  shadow-sm
                  transition
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >


                {/* Icon */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-rose-50
                    flex
                    items-center
                    justify-center
                    text-rose-400
                    mb-8
                  "
                >
                  🤍
                </div>



                {/* Title */}
                <h3
                  className="
                    text-2xl
                    font-light
                    text-gray-800
                    mb-4
                  "
                >
                  {card.title}
                </h3>



                {/* Description */}
                <p
                  className="
                    text-gray-600
                    leading-8
                  "
                >
                  {card.text}
                </p>


              </div>

            ))}


          </div>


        </div>

      </Reveal>


    </section>
  );
}