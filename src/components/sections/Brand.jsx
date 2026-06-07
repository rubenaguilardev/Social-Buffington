import ColorPalette from "./ColorPalette";
import BrandLogo from "./BrandLogo";
import guidelinesLogo from "../../assets/brand/guidelinesLogo.avif";
import TextStyle from "./TextStyle";
import headingFont from "../../assets/brand/headingFont.avif";
import subheading from "../../assets/brand/subheading.avif";
import BrandDesigns from "./BrandDesigns";
import RevealOnScroll from "../RevealOnScroll";

const Brand = () => {
  return (
    <div className="mb-8 space-y-6 xl:space-y-8">
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
      <div className="grid lg:grid-cols-[1fr_1fr] gap-6 xl:gap-8">
        <div className="space-y-6 xl:space-y-8">
          <img src={guidelinesLogo} alt="" className="w-full rounded-2xl" />
          <h3 className="text-2xl xl:text-3xl tracking-wide uppercase text-purple-700 text-center">
            Salt & Sol Logo
          </h3>
          <BrandLogo />
        </div>
        <div className="space-y-6 xl:space-y-8">
          <h3 className="text-2xl xl:text-3xl tracking-wide uppercase text-purple-700 text-center">
            color palette
          </h3>
          <ColorPalette />
          <h3 className="text-2xl xl:text-3xl tracking-wide uppercase text-purple-700 text-center">
            typography
          </h3>
          <TextStyle
            font="MONTSERRAT"
            text="AaBbCc"
            color="#7AC0B6"
            heading="heading font"
            pic={headingFont}
            paragraph="Awake is a bold serif typeface with slighgtly retor letterforms
                that command attention. Use Awake t convey personality,
                confidence and a hint of timeless sophistication in all primary
                headings."
          />
          <TextStyle
            font="AWAKE"
            text="ABCDEFG"
            color="#D59A3C"
            pic={subheading}
            heading="subheading font"
            paragraph="Use Montserrat at medium weight with kerning set to 120 to
                create a balanced, modern look with ample breathing room. This
                setting ensures subheadings remain clear, approachable and
                visually harmonious."
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
