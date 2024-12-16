import { useState } from "react";
import { Link } from "react-router-dom";

const MaPSContent = () => {
  const [selectedStream, setSelectedStream] = useState("junior");

  return (
    <div id="content" className="py-12 bg-gray-100">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
          MaPS Materials and Useful Links
        </h1>
        <p className="text-gray-600 md:text-lg leading-relaxed">
          An outline of the program content and the indicative program schedule
          for Junior stream, Senior stream.
        </p>
      </div>

      {/* Tabs for Stream Selection */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex justify-center space-x-4 mb-6">
          {/* Junior Stream Tab */}
          <button
            onClick={() => setSelectedStream("junior")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${
              selectedStream === "junior"
                ? "bg-[#C63A1E] text-white"
                : "bg-white text-[#C63A1E] border border-[#C63A1E]"
            }`}
          >
            Junior Stream
          </button>
          {/* Senior Stream Tab */}
          <button
            onClick={() => setSelectedStream("senior")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${
              selectedStream === "senior"
                ? "bg-[#C63A1E] text-white"
                : "bg-white text-[#C63A1E] border border-[#C63A1E]"
            }`}
          >
            Senior Stream
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg px-6 md:px-12 py-6">
        {selectedStream === "junior" && (
          <>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-700">
              <Link
                className="text-[#C63A1E] underline"
                target="_blank"
                to={
                  "https://www.maths.usyd.edu.au/u/dzmitry/CP_material/MaPS_2024_Schedule_Junior.pdf"
                }
              >
                Junior Stream
              </Link>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Notes
                </h3>
                <p className="text-gray-700">
                  <Link
                    className="text-[#C63A1E] underline"
                    target="_blank"
                    to={
                      "https://www.maths.usyd.edu.au/u/dzmitry/CP_material/introduction_to_proof-notes.pdf"
                    }
                  >
                    Introduction to proof
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Problem Sets
                </h3>
                <p className="text-gray-700">
                  <Link
                    className="text-[#C63A1E] underline"
                    target="_blank"
                    to={
                      "https://www.maths.usyd.edu.au/u/dzmitry/CP_material/introduction_to_proof-problems.pdf"
                    }
                  >
                    Problem set 1
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Solutions
                </h3>
                <p className="text-gray-700">
                  <Link
                    className="text-[#C63A1E] underline"
                    target="_blank"
                    //Add link solition
                    to={""}
                  >
                    Problem set 1 Solutions
                  </Link>
                </p>
              </div>
            </div>
          </>
        )}

        {selectedStream === "senior" && (
          <>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-700">
              <Link
                className="text-[#C63A1E] underline"
                target="_blank"
                to={
                  "https://www.maths.usyd.edu.au/u/dzmitry/CP_material/MaPS_2024_Schedule_Senior.pdf"
                }
              >
                Senior Stream
              </Link>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Notes
                </h3>
                <p className="text-gray-700">
                  {" "}
                  <Link
                    className="text-[#C63A1E] underline"
                    target="_blank"
                    to={
                      "https://www.maths.usyd.edu.au/u/dzmitry/CP_material/bounding_arguments-notes.pdf"
                    }
                  >
                    Bounding arguments
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Problem Sets
                </h3>
                <p className="text-gray-700">
                  <Link
                    className="text-[#C63A1E] underline"
                    target="_blank"
                    to={
                      "https://www.maths.usyd.edu.au/u/dzmitry/CP_material/bounding_arguments-problems.pdf"
                    }
                  >
                    Problem set 1
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Solutions
                </h3>
                <p className="text-gray-700">
                  <Link
                    className="text-[#C63A1E] underline"
                    target="_blank"
                    //Add link solition
                    to={""}
                  >
                    Problem set 1 Solutions
                  </Link>
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer Instructions */}
      <div className="mt-8 max-w-6xl mx-auto px-6 md:px-12 text-center text-sm text-gray-600 leading-relaxed">
        <p>
          For all mathematical questions, we encourage you to use the{" "}
          <Link
            className="text-[#C63A1E] underline"
            target="_blank"
            to={
              "https://edstem.org/au/login?redirect=/au/courses/15001/&auth=1"
            }
          >
            ED forum
          </Link>{" "}
          . Our staff will regularly observe it and reply to all unanswered
          questions. Moreover, other program participants will be able to
          benefit from your questions.
        </p>
      </div>
    </div>
  );
};

export default MaPSContent;