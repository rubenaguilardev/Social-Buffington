import { MY_WORK_TOP } from "../../constants/index";
import RevealOnScroll from "../RevealOnScroll";

const Work = () => {
  return (
    <section id="work" className="flex items-center justify-center pt-32">
      <RevealOnScroll>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-5 md:mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-8 border-b border-white/10 pb-4 md:pb-8">
            <div className="grid xl:grid-cols-2 p-6 gap-6 glass rounded-3xl items-center text-[#94A3B8]">
              <div className="">
                <img
                  src={MY_WORK_TOP[0].image}
                  alt="image of Wyndham dinner "
                  className="rounded-2xl w-full h-80 object-cover object-top"
                />
              </div>
              <div className="">
                <p className="mb-5">{MY_WORK_TOP[0].description[0]}</p>
                <p className="">{MY_WORK_TOP[0].description[1]}</p>
              </div>
            </div>
            <div className="flex flex-col xl:grid xl:grid-cols-2 p-6 gap-6 xl:items-center glass rounded-3xl text-[#94A3B8]">
              <div className="xl:order-2 2xl:order-0">
                <img
                  src={MY_WORK_TOP[1].image}
                  alt="image of Margaritaville lobby"
                  className="rounded-2xl w-full h-80 object-cover object-top"
                />
              </div>
              <div>
                <p className=" text-[#94A3B8]">{MY_WORK_TOP[1].description}</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Work;
