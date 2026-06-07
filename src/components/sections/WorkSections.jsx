import Accordion from "./Accordion";
import { MY_WORK } from "../../constants";
import { InstagramEmbed } from "react-social-media-embed";
import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const WorkSections = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const designImages = MY_WORK.find((s) => s.id === 1)?.content ?? [];

  const workSection = MY_WORK.map((section, index) => (
    <Accordion
      key={index}
      color={section.color}
      icon={section.icon}
      id={section.id}
      label={section.label}
      instagram={
        section.id === 0 &&
        section.content.map((item, index) => (
          <div
            key={index}
            className="snap-center shrink-0 max-w-md rounded-lg transition-transform duration-300 hover:scale-102 mt-4"
          >
            <InstagramEmbed url={item} />
          </div>
        ))
      }
      design={
        section.id === 1 &&
        section.content.map((item, index) => (
          <div
            key={index}
            className="snap-center cursor-zoom-in w-[300px] h-[350px] overflow-hidden rounded-lg flex-shrink-0 mt-4 mb-2"
            onClick={() => {
              setPhotoIndex(index);
              setLightboxOpen(true);
            }}
          >
            <img
              src={item}
              alt={`design picture ${index}`}
              className="w-full object-top transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))
      }
      blogs={
        section.id === 2 &&
        section.content.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col mb-2 mt-4 snap-center transition-transform duration-300 hover:scale-102">
              <div className="w-[220px] md:w-[260px]">
                <img
                  src={post.image}
                  className="rounded-t-lg"
                  alt="blog cover image"
                />
              </div>
              <p className="max-w-[260px] rounded-b-lg text-center p-3 xl:p-5 text-sm bg-[whitesmoke]">
                {post.description}
              </p>
            </div>
          </a>
        ))
      }
    />
  ));

  return (
    <div className="pb-32">
      <RevealOnScroll>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          {workSection}
        </div>
      </RevealOnScroll>
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={designImages.map((src) => ({ src }))}
        />
      )}
    </div>
  );
};

export default WorkSections;
