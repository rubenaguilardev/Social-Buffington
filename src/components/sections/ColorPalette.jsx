const colors = [
  {
    name: "Ivory",
    hex: "#FDF8E5",
    color: "FDF8E5",
    w: "50%",
    justify: "center",
  },
  {
    name: "Color Palette",
    w: "50%",
    // hex: "#FDF8E5",
    justify: "center",
  },
  {
    name: "Medium Aquamarine",
    hex: "#7AC0B6",
    color: "7AC0B6",
    w: "100%",
  },
  {
    name: "Brown Sugar",
    hex: "#935337",
    color: "935337",
    w: "50%",
    justify: "center",
  },
  {
    name: "Harvest Gold",
    hex: "#D59A3C",
    color: "D59A3C",
    w: "50%",
    justify: "center",
  },
  {
    name: "Charcoal Brown",
    hex: "#36322F",
    color: "36322F",
    w: "100%",
  },
  {
    name: "Sage",
    hex: "#81876D",
    color: "81876D",
    w: "50%",
    justify: "center",
  },

  {
    name: "Forest Green",
    hex: "#2E442D",
    color: "2E442D",
    w: "50%",
    justify: "center",
  },
];

const ColorPalette = () => {
  return (
    <div className="w-full h-full flex flex-wrap rounded-2xl border-t border-white/10 overflow-hidden">
      {colors.map(({ name, hex, color, w, justify, p }, index) => (
        <div
          key={color}
          className={`flex flex-col justify-end ${index === 0 || index === 1 ? "text-[#36322F] border-r border-white/10" : "text-white"} px-6 lg:px-4 py-6 space-y-2 text-shadow-2xl`}
          style={{
            backgroundColor: hex,
            width: w,
            justifyContent: justify,
            paddingBottom: p,
          }}
        >
          <h3
            className={`uppercase ${index === 1 ? "text-2xl xl:text-3xl tracking-wide text-purple-700" : "text-xs xl:text-sm font-bold"}`}
          >
            {name}
          </h3>
          {index !== 1 && (
            <div
              className={`border ${index === 0 ? "border-black/40 " : " border-white/60"} w-full`}
            ></div>
          )}
          <span className="font-semibold text-sm">{color}</span>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
