const TextStyle = ({ color, heading, paragraph, font, text }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-6 glass rounded-2xl">
        <div
          className="flex justify-center py-8 lg:py-6 xl:py-11.25 2xl:py-16.75 rounded-t-2xl"
          style={{ backgroundColor: color }}
        >
          <div
            className={`text-4xl xl:text-5xl text-center ${font === "AWAKE" ? "awake-font" : "montserrat-font "}`}
          >
            <h3>{font}</h3>
            <span className="text-[#935337]">{text}</span>
          </div>
        </div>

        <div className="space-y-2 px-6 pb-6">
          <h3 className="text-lg uppercase tracking-wide">{heading}</h3>
          <p className="text-[#94A3B8] text-sm 2xl:text-[15px]">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default TextStyle;
