export default function Court() {
  return (
    <section
      id="court"
      className="bg-white py-32 px-6 relative overflow-hidden"
    >

      {/* Background Accent */}
      <div className="
        absolute
        left-10
        top-20
        text-8xl
        opacity-10
      ">
        🤍
      </div>


      <div className="max-w-4xl mx-auto text-center">


        <p className="
          uppercase
          tracking-[5px]
          text-rose-400
          text-sm
        ">
          ONE LAST THING
        </p>



        <div className="
          mt-10
          bg-[#fffaf9]
          rounded-[40px]
          p-10
          md:p-16
          shadow-xl
          border
          border-rose-100
        ">


          <h2 className="
            text-5xl
            md:text-6xl
            font-light
            text-gray-800
            leading-tight
          ">
            Blair,
            <br />
            would you allow me
            <br />
            to court you?
          </h2>



          <p className="
            mt-10
            text-lg
            leading-8
            text-gray-600
            max-w-2xl
            mx-auto
          ">
            I'm not asking you to have all the answers right now.
            Take your time, and only choose what feels right for you.
          </p>



          <div className="
            mt-12
            flex
            flex-col
            md:flex-row
            justify-center
            gap-5
          ">


            <button
              className="
              px-8
              py-4
              rounded-full
              bg-rose-400
              text-white
              transition
              duration-300
              hover:bg-rose-500
              hover:-translate-y-1
              "
            >
              Yes 🤍
            </button>



            <button
              className="
              px-8
              py-4
              rounded-full
              border
              border-rose-200
              text-gray-700
              transition
              duration-300
              hover:bg-rose-50
              hover:-translate-y-1
              "
            >
              Let's Take It Slow
            </button>


          </div>



          <p className="
            mt-10
            text-sm
            text-gray-400
            italic
          ">
            Whatever your answer is, I'll always respect it.
          </p>


        </div>


      </div>


    </section>
  );
}