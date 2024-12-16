import { useState } from "react";

const faqs = [
  {
    question: "I am a teacher. What is required from me?",
    answer:
      "Almost nothing. The whole program is administered by our staff. You will have an opportunity to track your students' performance if you want. If you have a talented student who wants to learn some out-of-curriculum Mathematics, you may recommend them to this program by emailing the Program Director. If you receive an invitation for one of your students from us, we kindly ask you to forward it to them.",
  },
  {
    question: "How to get an invitation for the program?",
    answer:
      "There are two pathways: Some of the students are invited based on their results in the past AIMO and AMC competitions. A number of places are reserved for teachers' recommendations. If you are passionate about maths and want to participate in this program, ask your teacher to contact <a href='mailto:MAPS.program@maths.usyd.edu.au' class='text-blue-600 hover:underline'>MAPS.program@maths.usyd.edu.au</a> and write a couple of sentences supporting your passion towards Mathematics. Since the number of places is limited, that will help us to select the right students for the program.",
  },
  {
    question: "Students of what age can participate?",
    answer:
      "Most of the participants are in Years 8 - 10. In exceptional cases, we can invite younger students. But we need to be sure that they can cope with the program material.",
  },
  {
    question: "How much time will this program require from me?",
    answer:
      "We expect that students will spend 3-4 hours per fortnight on this program so that they can read through the notes and then submit a fair attempt to the problems. According to the previous years' surveys, this time depends on students' engagement and interest and can range between 2 and 14 hours per fortnight.",
  },
  {
    question: "I cannot solve all the problems. Maybe I am not good enough for this program?",
    answer:
      "Not at all! The problems are designed in such a way that students of various levels can benefit from the program. Each problem set usually starts with some easy problems but towards the end, some of them may become very tricky and challenging. The marks you receive from your mentor indicate how much you would receive for those problems in a real competition. And quite often in real competitions, half marks may deserve a medal.",
  },
  {
    question: "Are partial solutions accepted?",
    answer:
      "Yes, and moreover, they are encouraged! We encourage you to submit any progress you have made on a problem. The more you write, the more feedback you get.",
  },
  {
    question: "Have more questions?",
    answer:
      "For any information regarding the Correspondence Program, please contact <a href='mailto:MAPS.program@maths.usyd.edu.au' class='text-blue-600 hover:underline'>MAPS.program@maths.usyd.edu.au</a>.",
  },
];

function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="max-w-6xl mx-auto px-6 md:px-12 py-8 space-y-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800 text-center">
        Frequently Asked Questions
      </h2>
      {faqs.map((item, index) => (
        <div key={index} className="border rounded-lg shadow-md overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            <span className="text-lg font-medium text-gray-700">{item.question}</span>
          </button>
          {activeIndex === index && (
            <div
              className="px-4 py-3 bg-gray-50 text-gray-600 leading-relaxed transition-all duration-200"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;
