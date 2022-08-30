// Next Features
import Image from "next/image";
// Third Party Libraries ( Splide )
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/sea-green";
// Assets
import Consultation from "../../public/assets/images/Consultation.jpg";
import SpConsultation from "../../public/assets/images/SpConsultation.jpg";
import Ultrasound from "../../public/assets/images/Ultrasound.jpg";
import Rx from "../../public/assets/images/Radiology.jpg";
import Surgery from "../../public/assets/images/Surgery.jpg";
import Laboratory from "../../public/assets/images/Laboratory.jpg";
// ---------------------------------------------------------------------------------------

const services = [
  {
    title: "Consultation",
    image: Consultation,
    primDescription:
      "We offer general services of vaccination, deworming and advice for the care of your pet.",
    secDescription:
      "The general physical assessment is performed by veterinarians trained in identifying and guiding an appropriate clinical approach during a period of illness or for the practice of preventive medicine.",
  },
  {
    title: "Sp. Consultation",
    image: SpConsultation,
    primDescription:
      "We have veterinary doctors specialized in the following areas:",
    secDescription:
      "Internal Medicine, Cardiology, Pneumology, Neurology, Gastroenterology, Nephrology, Endocrinology, Dermatology and Ophthalmology.",
  },
  {
    title: "Ultrasound",
    image: Ultrasound,
    primDescription:
      "The ultrasonography service is performed by a specialist together with high-end equipment that offers a high resolution and quality image.",
    secDescription:
      "We have coverage for ultrasound examination of the abdominal cavity and doppler echocardiography.",
  },
  {
    title: "Radiography",
    image: Rx,
    primDescription:
      "The digital radiography service focuses on offering the best positioning and the best radiographic technique to obtain objective diagnostic approaches.",
    secDescription:
      "A preliminary radiographic report is delivered immediately after the study is completed, then the final report will be delivered within 24 hours.",
  },
  {
    title: "Surgery",
    image: Surgery,
    primDescription:
      "We have a medical team made up of two specialists in anesthesiology and 3 surgeons capable of performing surgical interventions in soft tissue surgery, orthopedics and neurosurgery.",
    secDescription:
      "We also offer minimally invasive surgery performed through endoscopy.",
  },
  {
    title: "Laboratory",
    image: Laboratory,
    primDescription:
      "The clinical laboratory is integrated to the veterinary service which speeds up and optimizes the delivery time of results. We have high quality equipment and sample processing and analysis capacity.",
    secDescription:
      "A preliminary report is delivered immediately after the samples are processed, later we deliver a final report within 2 hours.",
  },
];

const HomeServices = () => {
  return (
    <div className="col-start-1 col-end-13 row-start-5 row-end-7 2xl:row-start-5 2xl:row-end-7 lg:col-start-2 lg:col-end-12 font-inter pt-[4rem]">
      {/* Slider__Container */}
      <Splide
        options={{
          type: "fade",
          rewind: true,
          arrows: false,
        }}
        aria-label="My Favorite services"
      >
        {services.map((service, i) => {
          return (
            <SplideSlide
              key={i}
              className=" lg:grid lg:grid-cols-2 lg:gap-8  lg:justify-center px-1"
            >
              {/* Slide__Data */}
              <div className="text-center xl:pr-10 xl:pt-10 ">
                <h2 className="text-center text-primary-text text-2xl tracking-wide  font-bold border-b-[1px] border-b-secondary-text pb-4 sm:text-4xl lg:text-left 2xl:text-[3.5rem] 2xl:pb-12  ">
                  Services: <br />
                  <span className="block xl:mt-2 2xl:mt-5 ">
                    <h2 className="leading-10">{service.title}</h2>
                  </span>
                </h2>

                <p className="mt-5 text-secondary-text text-justify sm:text-lg sm:leading-8 xl:text-xl 2xl:text-2xl font-light xl:leading-relaxed 2xl:leading-relaxed tracking-wide">
                  {service.primDescription}
                </p>

                <p className=" mt-5  text-secondary-text text-justify sm:text-lg sm:leading-8 xl:text-xl 2xl:text-2xl font-light xl:leading-relaxed 2xl:leading-relaxed tracking-wide ">
                  {service.secDescription}
                </p>
              </div>
              {/* Slide__Image */}
              <div className="relative mt-5 md:mt-10 h-[15rem] sm:h-[18rem] md:h-[25rem] lg:h-[25rem] 2xl:h-[30rem] mb-12 ">
                <div className="relative h-full bg-[#00000049] z-10"></div>
                <Image
                  src={service.image}
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default HomeServices;
