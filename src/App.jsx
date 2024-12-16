import Header from "./components/header/Header";
import "./App.css";
import About from "./sections/About";
import Fees from "./sections/Fees";
import MaPSContent from "./sections/MaPSContent ";
import FAQAccordion from "./sections/FAQAccordion";
import Footer from "./components/header/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="banner relative mt-24">
        <div className="absolute inset-0"></div>
        <div className="relative flex flex-col h-full pl-6 md:pl-12 lg:pl-24 text-white w-full md:w-[70%] lg:w-[60%] justify-end pb-12 md:pb-24 lg:pb-36 space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold italic leading-tight drop-shadow-lg">
            Mathematical Problem Solving Correspondence Program in{" "}
            <span className="text-[#f8755b]">NSW</span>
          </h1>
          <div className="w-16 md:w-20 lg:w-24 h-[3px] md:h-[4px] lg:h-[5px] bg-[#f8755b] mt-2"></div>
          <p className="text-sm md:text-base lg:text-base w-[90%] text-gray-200 leading-relaxed">
            <span className="font-semibold">MaPS Correspondence Program</span>{" "}
            offers talented high school students a support in developing their{" "}
            <span className="font-semibold">problem-solving skills</span>.
            During the program, we will go through a number of methods and
            tricks to crack challenging mathematical problems and some other
            fascinating
            <span className="italic">
              out of curriculum mathematical topics
            </span>
            . The program will make students better prepared for various
            mathematical competitions like{" "}
            <span className="font-bold text-white  p-1 rounded">
              AIMO
            </span>
            and the
            <span className="font-bold text-white  p-1 rounded">
              Tournament of Towns
            </span>
            .
          </p>
          <button className="mt-4 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 w-[100px] md:w-[110px] lg:w-[120px] bg-[#C63A1E] text-white font-semibold rounded-lg hover:bg-[#C63A1E] transition-all duration-300">
            More
          </button>
        </div>
      </div>
      <About />
      <Fees />
      <div className="relative py-12 bg-gradient-to-r from-[#C63A1E] to-[#FF9A9E]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center text-white leading-relaxed animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Registration Closed
          </h1>

          <p className="text-lg md:text-xl mb-6">
            It will reopen before the start of each school term.
          </p>

          <div className="mt-6">
            <p className="text-sm md:text-base mb-4">
              While registration for this term is currently closed, check back
              soon and join our journey in problem-solving challenges!
            </p>
            <button className="inline-block px-6 py-3 bg-white text-[#C63A1E] font-semibold rounded-full shadow-lg hover:bg-[#FF9A9E] transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute inset-0 animate-fadeIn bg-transparent"></div>
      </div>
      <MaPSContent />
      <FAQAccordion />
      <Footer/>
    </>
  );
}

export default App;
