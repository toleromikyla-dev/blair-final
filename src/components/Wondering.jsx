export default function Wondering() {
  return (
    <section
      id="wondering"
      className="bg-white py-32 px-6 relative overflow-hidden"
    >

      {/* Lily Accent */}
      <div className="absolute left-10 bottom-10 text-7xl opacity-10">
        🌿
      </div>


      <div className="max-w-6xl mx-auto">


        {/* Header */}
        <div className="text-center mb-20">

          <p className="
            uppercase
            tracking-[5px]
            text-rose-400
            text-sm
          ">
            IF YOU'RE WONDERING...
          </p>


          <h2 className="
            mt-5
            text-5xl
            md:text-6xl
            font-light
            text-gray-800
            leading-tight
          ">
            This isn't about
            <br />
            rushing you.
          </h2>


        </div>



        {/* Cards */}

        <div className="
          grid
          md:grid-cols-3
          gap-8
        ">


          <div className="
            bg-[#fffaf9]
            rounded-3xl
            p-8
            transition
            hover:-translate-y-2
            duration-500
          ">

            <h3 className="
              text-xl
              font-medium
              text-gray-800
              mb-4
            ">
              Am I expecting an answer?
            </h3>

            <p className="
              text-gray-600
              leading-8
            ">
              No. I don't want you to feel pressured. Take your time and be honest with what you feel.
            </p>

          </div>



          <div className="
            bg-[#fffaf9]
            rounded-3xl
            p-8
            transition
            hover:-translate-y-2
            duration-500
          ">

            <h3 className="
              text-xl
              font-medium
              text-gray-800
              mb-4
            ">
              Am I trying to change you?
            </h3>

            <p className="
              text-gray-600
              leading-8
            ">
              Never. I want to know you as you are, not create someone I want you to be.
            </p>

          </div>



          <div className="
            bg-[#fffaf9]
            rounded-3xl
            p-8
            transition
            hover:-translate-y-2
            duration-500
          ">

            <h3 className="
              text-xl
              font-medium
              text-gray-800
              mb-4
            ">
              Why did I make this?
            </h3>

            <p className="
              text-gray-600
              leading-8
            ">
              Because I wanted my effort to be something you could actually see, not just something you could read.
            </p>

          </div>


        </div>


      </div>

    </section>
  );
}