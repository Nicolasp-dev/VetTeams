// Components
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import HomeServices from "./HomeServices";
import Footer from "./Footer";
// ----------------------------------------

const MainHomeComponent = () => {
  return (
    <section className="col-start-1 col-end-3 grid grid-cols-12 grid-rows-mobile md:col-start-1 md:col-end-13 md:grid-rows-desktop 2xl:gap-y-[6rem] ">
      {/* Home_Page_Container */}
      <HeroSection />
      {/* About_Us_Section */}
      <AboutUs />

      {/* Services_Section */}
      <HomeServices />

      <Footer />
    </section>
  );
};

export default MainHomeComponent;
