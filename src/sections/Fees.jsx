import { Link } from "react-router-dom";
import FeesImg from "../assets/fees.jpg";
import { useEffect, useState } from "react";

const Fees = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const rect = document.getElementById("fees").getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="fees" className="py-12 bg-white">
      <div className="text-center mb-8">
        <h1
          className={`text-3xl font-bold text-gray-800 transition-all duration-700 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          }`}
        >
          Program Fees
        </h1>
        <p
          className={`text-gray-600 mt-2 transition-all duration-700 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          }`}
        >
          Learn about the fees for participation and options available.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 transform scale-100" : "opacity-0 transform scale-95"
            }`}
          >
            <img
              className="w-full h-auto rounded-lg shadow-md"
              src={FeesImg}
              alt="Program-related image"
            />
          </div>

          <div
            className={`text-gray-700 leading-relaxed transition-all duration-700 ${
              isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-10"
            }`}
          >
            <h2 className="text-lg font-semibold mb-3">Program Fees Overview</h2>
            <p>
              The cost of running such a program is not insignificant, and while
              the School of Maths and Stats, the University of Sydney, and
              Australian Mathematics Trust will be supporting it, we ask
              attendees to pay a small contribution each term, whatever you are
              comfortable with.
            </p>
            <p className="mt-2">
              The base rate is <strong>$50 per student per term</strong>, but
              other options are available. Students who are not able to make
              this contribution are asked to contact the Program Director to
              discuss possible workarounds.
            </p>
            <p className="mt-2">
              <span className="font-bold ">Important</span> : the contribution
              amount will be kept strictly confidential and does not affect what
              activities the student can participate in, or how the student will
              be treated, in any way.
            </p>
            <div className="mt-4">
              <Link
                className="inline-block px-4 py-2 bg-[#C63A1E] text-white font-semibold rounded-lg shadow hover:bg-[#9A431E] transition duration-200"
                to="mailto:MAPS.program@maths.usyd.edu.au"
              >
                Contact Program Director
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
