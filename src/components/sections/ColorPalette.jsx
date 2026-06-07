const colors = [
  {
    name: "Brown Sugar",
    hex: "#935337",
    color: "935337",
    w: "33.3%",
    justify: "center",
  },
  {
    name: "Ivory",
    hex: "#FDF8E5",
    color: "FDF8E5",
    w: "33.3%",
    justify: "center",
  },
  {
    name: "Harvest Gold",
    hex: "#D59A3C",
    color: "D59A3C",
    w: "33.3%",
    justify: "center",
  },
  {
    name: "Sage",
    hex: "#81876D",
    color: "81876D",
    w: "33.3%",
    justify: "center",
  },
  {
    name: "Medium Aquamarine",
    hex: "#7AC0B6",
    color: "7AC0B6",
    w: "66.6%",
  },

  {
    name: "Charcoal Brown",
    hex: "#36322F",
    color: "36322F",
    w: "66.6%",
  },

  {
    name: "Forest Green",
    hex: "#2E442D",
    color: "2E442D",
    w: "33.3%",
    justify: "center",
  },
];

const ColorPalette = () => {
  return (
    <div className="w-full flex flex-wrap rounded-2xl overflow-hidden">
      {colors.map(({ name, hex, color, w, justify, p }, index) => (
        <div
          key={color}
          className={`flex flex-col justify-end ${index === 1 ? "text-[#36322F]" : "text-white"} px-6 lg:px-4 xl:px-6 py-6 xl:py-8 2xl:py-10 space-y-2 xl:space-y-3 2xl:space-y-4 text-shadow-2xl`}
          style={{
            backgroundColor: hex,
            width: w,
            justifyContent: justify,
            paddingBottom: p,
          }}
        >
          <h3 className="uppercase text-xs xl:text-sm 2xl:text-base font-bold">
            {name}
          </h3>
          <div
            className={`border ${index === 1 ? "border-black/30" : "border-white/30"} w-full`}
          ></div>
          <span className="font-semibold text-sm 2xl:text-base">{color}</span>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
