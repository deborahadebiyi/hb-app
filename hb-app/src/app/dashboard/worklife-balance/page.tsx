"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const quizQuestions = [
  {
    question: "What's your priority?",
    options: [
      "More customers",
      "More money",
      "Repeat customers",
      "Improve service",
    ],
  },
  {
    question: "How many hours would you work a week?",
    options: ["Less than 12", "Less than 24", "25-36", "40+"],
  },
  {
    question: "How many days would you work a week?",
    options: ["<2", "<4", "5", "6+"],
  },
  {
    question: "How many customers do you currently see each week?",
    options: ["<5", "<10", "~15", "20+"],
  },
  {
    question: "How long is your average service?",
    options: ["<1 hour", "2 hours", "3 hours", "4+ hours"],
  },
  {
    question: "What is your average service cost?",
    options: ["< £30", "< £50", "£60+", "Prefer not to say"],
  },
];

const dailyWorkingHours = (workHours: string, workDays: string) => {
  const hours = parseInt(workHours);
  const days = parseInt(workDays);
  const dailyHours = Math.round(hours / days);
  return dailyHours;
};

export default function WorkLifeBalance() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const handleNext = () => {
    if (
      selectedOption === null &&
      currentSlide > 0 &&
      currentSlide <= quizQuestions.length
    )
      return;

    if (currentSlide > 0 && currentSlide <= quizQuestions.length) {
      const newAnswers = [...answers];
      newAnswers[currentSlide - 1] = selectedOption!;
      setAnswers(newAnswers);
      setSelectedOption(null);
    }

    if (currentSlide < quizQuestions.length + 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setSelectedOption(currentSlide > 1 ? answers[currentSlide - 2] : null);
    }
  };

  const calculateResults = () => {
    setScore(Math.floor(Math.random() * 101)); // Simulate a random score
  };

  const restartQuiz = () => {
    setAnswers([]);
    setScore(null);
    setSelectedOption(null);
    setCurrentSlide(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-3 mb-4">
          <motion.div
            className="bg-blue-500 h-3 rounded-full transition-all"
            initial={{ width: 0 }}
            animate={{
              width: `${
                ((currentSlide + 1) / (quizQuestions.length + 2)) * 100
              }%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Introduction Slide */}
        {currentSlide === 0 && (
          <>
            <h1 className="text-2xl font-bold">Work/Life Balance Simulator</h1>
            <p className="mt-2 text-gray-600">
              As a service provider, we understand it can often be hard
              balancing your working hours, wellbeing and your business goals.
              To <strong>meintein</strong> that all important balance and meet
              those goals, play around with our simulator to find what works for
              you
            </p>
            <motion.button
              onClick={handleNext}
              className="mt-4 w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start
            </motion.button>
          </>
        )}

        {/* Quiz Questions */}
        {currentSlide > 0 && currentSlide <= quizQuestions.length && (
          <>
            <h2 className="text-xl font-bold">
              {quizQuestions[currentSlide - 1].question}
            </h2>
            <div className="mt-4 space-y-2">
              {quizQuestions[currentSlide - 1].options.map((option) => (
                <motion.button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className={`block w-full p-3 rounded-lg text-left ${
                    selectedOption === option
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } hover:bg-blue-300 transition`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </>
        )}

        {/* Results Slide - Show Selections Before Seeing Score */}
        {currentSlide === quizQuestions.length + 1 && score === null && (
          <>
            <h2 className="text-xl font-bold">Your Selections:</h2>
            <ul className="mt-4">
              {answers.map((answer, index) => (
                <li key={index} className="text-lg font-semibold">
                  Question {index + 1}:{" "}
                  <span className="text-blue-600">{answer}</span>
                </li>
              ))}
            </ul>
            <motion.button
              onClick={calculateResults}
              className="mt-4 w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Score
            </motion.button>
          </>
        )}

        {/* Show Score */}
        {score !== null && (
          <>
            <h2 className="text-2xl font-bold mt-4 text-green-600">
              Your Score: {score}/100
            </h2>
            <motion.button
              onClick={restartQuiz}
              className="mt-4 w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Restart Quiz
            </motion.button>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          {currentSlide > 0 && currentSlide <= quizQuestions.length && (
            <>
              <motion.button
                onClick={handleBack}
                disabled={currentSlide === 0}
                className={`p-3 w-1/3 rounded-lg ${
                  currentSlide > 0
                    ? "bg-gray-500 text-white hover:bg-gray-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back
              </motion.button>
              <motion.button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`p-3 w-1/3 rounded-lg ${
                  selectedOption
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentSlide < quizQuestions.length ? "Next" : "Submit"}
              </motion.button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [answers, setAnswers] = useState<string[]>([]);
  // const [selectedOption, setSelectedOption] = useState<string | null>(null);
  // const [showResults, setShowResults] = useState(false);

  // const handleNext = () => {
  //   if (selectedOption === null) return;

  //   setAnswers([...answers, selectedOption]);
  //   setSelectedOption(null);

  //   if (currentQuestion < quizQuestions.length - 1) {
  //     setCurrentQuestion(currentQuestion + 1);
  //   } else {
  //     setShowResults(true);
  //   }
  // };

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
  //     <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
  //       {showResults ? (
  //         <div>
  //           <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
  //           <p className="text-lg">Your selections:</p>
  //           <ul className="mt-2">
  //             {answers.map((answer, index) => (
  //               <li key={index} className="text-lg font-semibold mt-1">
  //                 {quizQuestions[index].question}:{" "}
  //                 <span className="text-goldy">{answer}</span>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       ) : (
  //         <div>
  //           <h2 className="text-xl font-bold">
  //             {quizQuestions[currentQuestion].question}
  //           </h2>
  //           <div className="mt-4 space-y-2">
  //             {quizQuestions[currentQuestion].options.map((option) => (
  //               <button
  //                 key={option}
  //                 onClick={() => setSelectedOption(option)}
  //                 className={`block w-full p-3 rounded-full border border-black text-left ${
  //                   selectedOption === option
  //                     ? "bg-black text-white"
  //                     : "bg-white"
  //                 } hover:bg-darkgoldy transition`}
  //               >
  //                 {option}
  //               </button>
  //             ))}
  //           </div>
  //           <button
  //             onClick={handleNext}
  //             disabled={selectedOption === null}
  //             className={`mt-4 w-full p-3 text-white rounded-full ${
  //               selectedOption
  //                 ? "bg-goldy hover:bg-darkgoldy"
  //                 : "bg-gray-400 cursor-not-allowed"
  //             }`}
  //           >
  //             {currentQuestion < quizQuestions.length - 1 ? "Next" : "Submit"}
  //           </button>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
}

//     <div>
//   <h1>My Work/Life Balance</h1>
//   <p>
//     {" "}
//     As a service provider, we understand it can often be hard balancing your
//     working hours, wellbeing and your business goals. To meintein (hehe)
//     that all important balance and meet those goals, play around with our
//     simulator to find what works for you
//   </p>
//  - how many hours for hobbies - quality family time - childcare -
//   carer responsibilities - education - fitness goals - sleep goals
//   <h2>How do you like to work</h2>- block time out for lunch at ... - need
//   to pop out at ... - work day should be over by ... - work day starts at -
//   day of appointments work for me
// </div>
