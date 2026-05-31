import heading from "../../assets/brand/heading.png";
import subheading from "../../assets/brand/subheading.png";
import ColorPalette from "./ColorPalette";
import BrandLogo from "./BrandLogo";

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
        <BrandLogo />
        <div className="space-y-6">
          <div className="space-y-6 glass rounded-2xl">
            <img src={heading} alt="" className="rounded-t-2xl" />
            <div className="space-y-2 px-6 pb-6">
              <h3 className="text-lg uppercase tracking-wide">heading font</h3>
              <p className="text-[#94A3B8] text-sm">
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
              <h3 className="text-lg uppercase tracking-wide">
                subheading font
              </h3>
              <p className="text-[#94A3B8] text-sm">
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
