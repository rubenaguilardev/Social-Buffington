const TextStyle = ({ font, text, color, heading, paragraph, pic }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-6 glass rounded-2xl">
        <div
          className="flex justify-center py-7 xl:py-12 2xl:py-20.25 rounded-t-2xl"
          style={{ backgroundColor: color }}
        >
          <img src={pic} alt="" className="w-50 xl:w-60" />
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
