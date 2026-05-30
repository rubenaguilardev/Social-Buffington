import logo from "../../assets/brand/logo.png";
import heading from "../../assets/brand/heading.png";
import subheading from "../../assets/brand/subheading.png";
import ColorPalette from "./ColorPalette";

const Brand = () => {
  return (
    <div className="mb-8">
      <div className="space-y-2 mb-8">
        <h2 className="text-2xl font-bold text-blue-600">
          Brand Identity & Concept Creation
        </h2>
        <p>
            I create food and beverage brands that are intentional,
          experience-driven, and commercially viable. This includes concept
          development, positioning, visual storytelling, menus, activations, and
          guest experience enhancement.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-[1.3fr_1.3fr_1fr] gap-8 xl:gap-10">
        <div className="space-y-6 glass rounded-2xl">
          <img src={logo} alt="salt and sol logo" className="rounded-t-2xl" />
          <div className="px-6 pb-6 space-y-2">
            <h3 className="text-2xl xl:text-3xl tracking-wide uppercase text-purple-700">
              primary logo
            </h3>
            <div className="text-[#94A3B8]">
              <p className="mb-5">
                The Salt & Sol logo has custom serif word-mark that makes it
                feel timeless yet, inviting, striking, a balance between refined
                elegance and relaxed charm.
              </p>
              <p className="mb-6">
                Above the name, the radiant sunburst symbolizes the abundant
                Arizona sunshine and the welcoming energy that defines the
                restaurant’s atmosphere. Together, the elements evoke a sense of
                sun, salt, and soul.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-6 glass rounded-2xl">
            <img src={heading} alt="" className="rounded-t-2xl" />
            <div className="space-y-2 px-6 pb-6">
              <h3 className="text-xl uppercase tracking-wide">heading font</h3>
              <p className="text-[#94A3B8]">
                Awake is a bold serif typeface with slighgtly retor letterforms
                that command attention. Use Awake t convey personality,
                confidence and a hint of timeless sophistication in all primary
                headings.
              </p>
            </div>
          </div>
          <h3 className="text-2xl xl:text-3xl uppercase tracking-wide text-center text-purple-700">
            typography
          </h3>
          <div className="space-y-6 glass rounded-2xl">
            <img src={subheading} alt="" className="rounded-t-2xl" />
            <div className="space-y-2 px-6 pb-6">
              <h3 className="text-xl uppercase tracking-wide">
                subheading font
              </h3>
              <p className="text-[#94A3B8]">
                Use Montserrat at medium weight with kerning set to 120 to
                create a balanced, modern look with ample breathing room. This
                setting ensures subheadings remain clear, approachable and
                visually harmonious.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <ColorPalette />
        </div>
      </div>
    </div>
  );
};

export default Brand;
