import { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import FadeIntoView from "../../Animations/FadeIntoView";

export default function CoreValues(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  return (
    <>
      <FadeIntoView>
        <div className="navigation-wrapper w-full h-[85vh] bg-primary">
          <div ref={sliderRef} className="h-full keen-slider">
            <div className="h-full keen-slider__slide">
              <div className="flex items-center justify-between w-full h-full">
                <div className="flex flex-col items-center justify-center w-4/12 h-full text-gray-50">
                  <div>
                    <h4 className="mb-12 font-semibold text-gray-300 uppercase">
                      Core values
                    </h4>
                    <h3 className="mb-8 text-8xl text-accent">01</h3>
                    <h2>
                      Lorem ipsum dolor <br /> sit amet.
                    </h2>
                  </div>
                </div>
                <div className="w-8/12 h-full bg-accent">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://via.placeholder.com/1080"
                      alt="..."
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full keen-slider__slide">
              <div className="flex items-center justify-between w-full h-full">
                <div className="flex flex-col items-center justify-center w-4/12 h-full text-gray-50">
                  <div>
                    <h4 className="mb-12 font-semibold text-gray-300 uppercase">
                      Core values
                    </h4>
                    <h3 className="mb-8 text-8xl text-accent">02</h3>
                    <h2>
                      Lorem ipsum dolor <br /> sit amet.
                    </h2>
                  </div>
                </div>
                <div className="w-8/12 h-full bg-accent">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://via.placeholder.com/1080"
                      alt="..."
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full keen-slider__slide">
              <div className="flex items-center justify-between w-full h-full">
                <div className="flex flex-col items-center justify-center w-4/12 h-full text-gray-50">
                  <div>
                    <h4 className="mb-12 font-semibold text-gray-300 uppercase">
                      Core values
                    </h4>
                    <h3 className="mb-8 text-8xl text-accent">03</h3>
                    <h2>
                      Lorem ipsum dolor <br /> sit amet.
                    </h2>
                  </div>
                </div>
                <div className="w-8/12 h-full bg-accent">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://via.placeholder.com/1080"
                      alt="..."
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full keen-slider__slide">
              <div className="flex items-center justify-between w-full h-full">
                <div className="flex flex-col items-center justify-center w-4/12 h-full text-gray-50">
                  <div>
                    <h4 className="mb-12 font-semibold text-gray-300 uppercase">
                      Core values
                    </h4>
                    <h3 className="mb-8 text-8xl text-accent">04</h3>
                    <h2>
                      Lorem ipsum dolor <br /> sit amet.
                    </h2>
                  </div>
                </div>
                <div className="w-8/12 h-full bg-accent">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://via.placeholder.com/1080"
                      alt="..."
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full keen-slider__slide">
              <div className="flex items-center justify-between w-full h-full">
                <div className="flex flex-col items-center justify-center w-4/12 h-full text-gray-50">
                  <div>
                    <h4 className="mb-12 font-semibold text-gray-300 uppercase">
                      Core values
                    </h4>
                    <h3 className="mb-8 text-8xl text-accent">05</h3>
                    <h2>
                      Lorem ipsum dolor <br /> sit amet.
                    </h2>
                  </div>
                </div>
                <div className="w-8/12 h-full bg-accent">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://via.placeholder.com/1080"
                      alt="..."
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {slider && (
            <>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
              />
            </>
          )}
        </div>
      </FadeIntoView>
    </>
  );
}

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
