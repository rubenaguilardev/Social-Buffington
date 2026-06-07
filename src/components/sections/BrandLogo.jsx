import logo from "../../assets/brand/logo.png";

const BrandLogo = () => {
  return (
    <div className="space-y-6">
      <div className="glass space-y-6 rounded-2xl">
        <img src={logo} alt="salt and sol logo" className="rounded-t-2xl" />
        <div className="px-6 space-y-2">
          <h3 className="text-lg uppercase tracking-wide">primary logo</h3>
          <div className="text-[#94A3B8] text-sm 2xl:text-[15px]">
            <p className="mb-5">
              The Salt & Sol logo has custom serif word-mark that makes it feel
              timeless yet, inviting, striking, a balance between refined
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
    </div>
  );
};

export default BrandLogo;
