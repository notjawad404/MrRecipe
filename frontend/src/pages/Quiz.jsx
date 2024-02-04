import { useState, useEffect, useRef } from 'react'
import './quiz.css'
import back from "../data/back.svg"
import next from "../data/next.png"
import clock from "../data/Clock.svg"
export const quiz = {
    quizno: '1',
    title: 'Lorem Ipsum',
    time: 90,
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        id: 1,
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'stringify()',
      },
    {
      id: 2,
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'var and let', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'var and let',
      },
      {
        id: 3,
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
        type: 'MCQs',
        correctAnswer: 'All of the above',
      },
      {
        id: 4,
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'MCQs',
        correctAnswer: 'const',
      },
    ],
  }

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
  const { questions } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onClickPrevious = () => {
    if (activeQuestion !== 0) {
      // set logic for subtracting 5 marks from going back

      // Move to the previous question (not working rn)
      setActiveQuestion((prev) => prev - 1);
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }
 
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const getTimeRemaining = (e) => {
      const total =
          Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor(
          (total / 1000 / 60) % 60
      );
      const hours = Math.floor(
          (total / 1000 / 60 / 60) % 24
      );
      return {
          total,
          hours,
          minutes,
          seconds,
      };
  };

  const startTimer = (e) => {
      let { total, hours, minutes, seconds } =
          getTimeRemaining(e);
      if (total >= 0) {
          // update the timer
          // check if less than 10 then we need to
          // add '0' at the beginning of the variable
          setTimer(
              (hours > 9 ? hours : "0" + hours) +
                  ":" +
                  (minutes > 9
                      ? minutes
                      : "0" + minutes) +
                  ":" +
                  (seconds > 9 ? seconds : "0" + seconds)
          );
      }
  };

  const clearTimer = (e) => {
      // If you adjust it you should also need to
      // adjust the Endtime formula we are about
      // to code next
      setTimer(
        (Math.floor(quiz.time / 3600) > 9 ? Math.floor(quiz.time / 3600) : "0" + Math.floor(quiz.time / 3600)) +
        ":" +
        (Math.floor((quiz.time % 3600) / 60) > 9 ? Math.floor((quiz.time % 3600) / 60) : "0" + Math.floor((quiz.time % 3600) / 60)) +
        ":" +
        (Math.floor(quiz.time % 60) > 9 ? Math.floor(quiz.time % 60) : "0" + Math.floor(quiz.time % 60))
    );
      // If you try to remove this line the updating of timer Variable will be after 1000ms or 1sec
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
          startTimer(e);
      }, 1000);
      Ref.current = id;
  };

  const getDeadTime = () => {
      let deadline = new Date();
      // This is where you need to adjust if you entend to add more time
      deadline.setSeconds(deadline.getSeconds() + quiz.time);
      return deadline;
  };

  // We can use useEffect so that when the component mount the timer will start as soon as possible
  useEffect(() => {
      clearTimer(getDeadTime());
  }, [quiz.time]);

  return (
    <div className='bg-white w-full overflow-y-auto mb-4'>
    <div className='flex justify-between'>
    <h1 className="font-semibold text-2xl mt-6 ml-10 text-gray-800">Quiz No {quiz.quizno}: {quiz.title}</h1>
    <div className='flex w-32'><img src={clock} alt='' className='w-6 h-6 mt-6'/><p className='font-medium text-xl mt-6 ml-4 mr-10 text-gray-800'>{timer}</p></div>
    </div>
    <div className='flex gap-x-3'>
   
    </div>
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <h2 className='text-lg font-normal'>{question}</h2>
          <ul className='mx-auto flex-col items-center'>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer mx-[25rem]' : 'mx-[25rem]'}>
                <input type="radio" value={`answer-${index}`} name='question' className='mr-4'/>{answer}
              </li>
            ))}
          </ul>
         <div className='flex '> 
         {activeQuestion !== 0? <div className="absolute left-[43%] mt-6 border-2 border-black py-2 px-3 rounded-lg hover:cursor-pointer">
           <button className='stylebutton' onClick={onClickPrevious} disabled={selectedAnswerIndex === null}>
            <div className='flex gap-x-4'>
              <img src={back} alt='' className='h-3 w-2 mt-1.5'/>
              <p>BACK</p>
              </div> 
           </button>
         </div> : ""}
         <div className="absolute right-[30%] mt-6 border-2 border-gray-200 py-2.5 px-3 medologybg text-white rounded-lg hover:cursor-pointer">
           <button onClick={onClickNext} disabled={selectedAnswerIndex === null} className='hover:cursor-pointer'>
           <div className='flex gap-x-4'>
             {activeQuestion === questions.length - 1 ? 'FINISH' : 'NEXT'}
             <img src={next} alt='' className='h-3 w-2 mt-1.5'/>
             </div>
           </button>
         </div>
         </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div>    </div>

  )
}

export default Quiz