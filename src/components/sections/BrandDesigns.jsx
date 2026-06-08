import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import design1 from "../../assets/brand/design1.avif";
import design2 from "../../assets/brand/design2.avif";
import design3 from "../../assets/brand/design3.avif";
import design4 from "../../assets/brand/design4.avif";

const images = [design1, design2, design4, design3];

const BrandDesigns = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-6 xl:gap-8">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="salt and sol design image"
            loading={index === 0 ? "eager" : "lazy"}
            className={`h-130 xl:h-140 w-full object-cover object-top rounded-2xl cursor-zoom-in ${index === 2 ? "order-4 md:order-none" : ""}`}
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
          />
        ))}
      </div>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={photoIndex}
          slides={images.map((src) => ({ src }))}
        />
      )}
    </>
  );
};

export default BrandDesigns;
