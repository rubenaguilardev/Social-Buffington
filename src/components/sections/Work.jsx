import { MY_WORK_TOP } from "../../constants/index";
import RevealOnScroll from "../RevealOnScroll";
import Brand from "./Brand";
import BrandDesigns from "./BrandDesigns";

const Work = () => {
  return (
    <section id="work" className="flex items-center justify-center pt-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl p-4 text-center font-bold mb-5 md:mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <Brand />
        </RevealOnScroll>
        <RevealOnScroll>
          <h3 className="text-2xl xl:text-3xl tracking-wide uppercase text-purple-700 text-center">
            brand design
          </h3>
          <BrandDesigns />
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="space-y-2 mb-8 pt-16">
            <h2 className="text-2xl font-bold text-blue-600">
              Results That Speak for Themselves
            </h2>
            <p>
              Every brand has a story worth telling and an audience worth
              reaching. Here's a look at how strategic, intentional content
              creation translates into real, measurable growth for the
              hospitality brands I've had the pleasure of working with.
            </p>
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-8 border-b border-white/10 pb-4 md:pb-8">
            <div className="grid md:grid-cols-2 p-6 gap-6 glass rounded-3xl items-center text-[#94A3B8]">
              <div>
                <img
                  src={MY_WORK_TOP[0].image}
                  alt="image of Wyndham dinner"
                  className="rounded-2xl w-full h-80 object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-white text-xl mb-4">
                  Wyndham Grand Clearwater Beach
                </h3>
                <p className="mb-5">{MY_WORK_TOP[0].description[0]}</p>
                <p className="">{MY_WORK_TOP[0].description[1]}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 items-center p-6 gap-6 xl:items-center glass rounded-3xl text-[#94A3B8]">
              <div className="md:order-2 2xl:order-none">
                <img
                  src={MY_WORK_TOP[1].image}
                  alt="image of Margaritaville lobby"
                  className="rounded-2xl w-full h-80 object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-white text-xl mb-4">
                  Margaritaville Palm Springs
                </h3>
                <p className=" text-[#94A3B8]">{MY_WORK_TOP[1].description}</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Work;
