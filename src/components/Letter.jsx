export default function Letter() {
  return (
    <section
      id="letter"
      className="bg-[#fffaf9] py-32 px-6 relative overflow-hidden"
    >

      {/* Lily Accent */}
      <div className="absolute right-10 top-20 text-8xl opacity-10">
        🌿
      </div>


      <div className="max-w-4xl mx-auto">


        {/* Paper */}

        <div
          className="
          bg-white
          rounded-[40px]
          p-10
          md:p-16
          shadow-xl
          border
          border-rose-100
          "
        >


          <p
            className="
            uppercase
            tracking-[5px]
            text-rose-400
            text-sm
            text-center
            "
          >
            A LETTER FOR YOU
          </p>



          <h2
            className="
            mt-6
            text-5xl
            md:text-6xl
            font-light
            text-gray-800
            text-center
            "
          >
            Blair,
          </h2>



          <div
            className="
            mt-12
            space-y-8
            text-lg
            leading-9
            text-gray-600
            "
          >

            <p>
              I know you've been through things that made trusting someone
              difficult, and I don't want to be another person who makes you
              feel like you have to protect yourself.
            </p>


            <p>
              I don't want to rush you, change you, or make you feel like you
              owe me an answer.
            </p>


            <p>
              I just want to show you that someone can choose to stay,
              be patient, and make an effort without asking for anything in return.
            </p>


            <p>
              I made this because I wanted you to see that you're someone
              worth the time, effort, and thought behind every little thing.
            </p>


            <p>
              Whatever happens, I hope you always remember that you deserve
              someone who chooses you with sincerity.
            </p>


          </div>



          <div className="
            mt-12
            text-right
            text-gray-700
            italic
          ">

            — from someone who wants to know you more

          </div>


        </div>


      </div>


    </section>
  );
}