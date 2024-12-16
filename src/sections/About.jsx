import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ClockIcon,
  AcademicCapIcon,
  ChatBubbleLeftIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

const About = () => {
  const [isOpenDuration, setIsOpenDuration] = useState(false);
  const [isOpenStreams, setIsOpenStreams] = useState(false);
  const [isOpenForum, setIsOpenForum] = useState(false);
  const [isOpenEvents, setIsOpenEvents] = useState(false);

  return (
    <div id="about" className="py-10 bg-gray-50">
      <h1 className="text-3xl md:text-2xl font-bold text-center text-gray-800 mb-8">
        About the Mathematical Problem Solving Correspondence Program
      </h1>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-4 border rounded-lg bg-white shadow-md">
          <button
            onClick={() => setIsOpenDuration(!isOpenDuration)}
            className="w-full text-left px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none transition-all duration-200 flex items-center"
          >
            <ClockIcon className="h-6 w-6 text-gray-600 mr-2" />
            Program Duration
          </button>
          {isOpenDuration && (
            <div className="px-4 py-3 text-gray-600 leading-relaxed border-t">
              <p>
                - The program starts in <strong>Week 3 of Term 1</strong>, mid
                February, and finishes in <strong>Term 3, mid September</strong>
                .
              </p>
              <p>
                - In Terms 1 - 3, four times a term, a set of notes on a topic
                and a problem set with 5 questions will be released. Every
                participant is expected to read through the notes and then
                submit a fair attempt to the problems.
              </p>
            </div>
          )}
        </div>

        <div className="mb-4 border rounded-lg bg-white shadow-md">
          <button
            onClick={() => setIsOpenStreams(!isOpenStreams)}
            className="w-full text-left px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none transition-all duration-200 flex items-center"
          >
            <AcademicCapIcon className="h-6 w-6 text-gray-600 mr-2" />
            Streams Offered
          </button>
          {isOpenStreams && (
            <div className="px-4 py-3 text-gray-600 leading-relaxed border-t">
              <p>
                - The program will be offered in three streams:{" "}
                <strong>Junior</strong>, <strong>Senior</strong>, and{" "}
                <strong>Research</strong>. Junior is an entry-level stream which
                should be accessible by brighter high school students, but its
                level is still higher than most of the Mathematics taught at
                school. It is followed by the more advanced Senior stream. The
                Research stream focuses on research rather than problem-solving
                and allows participants to get a feel for how university
                research works. It is offered to students who have completed the
                previous two streams.
              </p>
              <p>
                - Every participant will be given a mentor who will provide
                supportive feedback and a score for each question attempted.
              </p>
            </div>
          )}
        </div>

        <div className="mb-4 border rounded-lg bg-white shadow-md">
          <button
            onClick={() => setIsOpenForum(!isOpenForum)}
            className="w-full text-left px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none transition-all duration-200 flex items-center"
          >
            <ChatBubbleLeftIcon className="h-6 w-6 text-gray-600 mr-2" />
            Forum Information
          </button>
          {isOpenForum && (
            <div className="px-4 py-3 text-gray-600 leading-relaxed border-t">
              <p>
                - There will be a{" "}
                <Link
                  className="text-[#C63A1E] underline"
                  to={
                    "https://edstem.org/au/login?redirect=/au/courses/15001&auth=1"
                  }
                  target="_blank"
                >
                  forum
                </Link>{" "}
                where all participants can ask questions, communicate with their
                peers, or with the program staff.
              </p>
            </div>
          )}
        </div>

        <div className="mb-4 border rounded-lg bg-white shadow-md">
          <button
            onClick={() => setIsOpenEvents(!isOpenEvents)}
            className="w-full text-left px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none transition-all duration-200 flex items-center"
          >
            <CalendarDaysIcon className="h-6 w-6 text-gray-600 mr-2" />
            Events & Activities
          </button>
          {isOpenEvents && (
            <div className="px-4 py-3 text-gray-600 leading-relaxed border-t space-y-4">
              <p>
                - Once a term, a face-to-face session will be organised at the
                University of Sydney where participants can meet up. At these
                sessions, we will run ice-breakers, have talks from university
                lecturers/students on modern mathematics, interesting math
                topics/problems, and other mathematical activities.
              </p>
              <p>
                - In Term 3, the program will culminate with the{" "}
                <Link
                  className="text-[#C63A1E] underline"
                  to={"https://www.amt.edu.au/aimo"}
                >
                  Australian Intermediate Mathematical Olympiad
                </Link>{" "}
                (AIMO), where every participant is encouraged to participate.
              </p>
              <p>
                - In Term 4, every program participant will have an opportunity
                to take part in the <strong>Mathematical Talk Showcase</strong>.
                Groups of 4 - 6 students will undertake a mathematical research
                project and at the end of the term will present their findings
                at the showcase. A qualified jury will then select the best
                talk, and the corresponding team will receive small prizes.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;