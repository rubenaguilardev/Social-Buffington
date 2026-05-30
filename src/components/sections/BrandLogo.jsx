import logo from "../../assets/brand/logo.png";

const BrandLogo = () => {
  return (
    <div className="space-y-6 glass rounded-2xl">
      <img src={logo} alt="salt and sol logo" className="rounded-t-2xl" />
      <div className="px-6 pb-6 space-y-2">
        <h3 className="text-2xl xl:text-3xl tracking-wide uppercase text-purple-700">
          primary logo
        </h3>
        <div className="text-[#94A3B8]">
          <p className="mb-5">
            The Salt & Sol logo has custom serif word-mark that makes it feel
            timeless yet, inviting, striking, a balance between refined elegance
            and relaxed charm.
          </p>
          <p className="mb-6">
            Above the name, the radiant sunburst symbolizes the abundant Arizona
            sunshine and the welcoming energy that defines the restaurant’s
            atmosphere. Together, the elements evoke a sense of sun, salt, and
            soul.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
