import { useEffect, useState } from 'react'
import QuestionBox from './components/questionBox'
import axios from 'axios'
import Table from './components/table'

function App() {

  const [selected, setSelected] = useState('')
  const [isStart, setIsStart] = useState()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isClickable, setIsClickable] = useState(false);
  const [questions, setQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState([])

  const getQuestions = async () => {
    const questions = await axios.get('https://jsonplaceholder.typicode.com/posts')

    setQuestions(questions.data.slice(0, 10))
  }

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      const timer = setTimeout(() => {
        setIsClickable(true)
      }, 10000)

      const interval = setInterval(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setSelected('')
          setCurrentQuestionIndex(prevIndex => prevIndex + 1);
          setIsClickable(false);
        } else {
          clearInterval(interval);
          setIsStart(false)
        }
      }, 30000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    } else {
      setIsStart(false)
    }
  }, [currentQuestionIndex, questions]);


  const hadleStart = () => {
    getQuestions()
    setIsStart(true)
    setCurrentQuestionIndex(0)
    setUserAnswers([])
  }

  return (
    <div className='text-center '>
      <h1 className='text-4xl font-bold mt-10'>Quiz App</h1>

      {!isStart && (<button
        className='bg-blue-500 hover:bg-blue-700 transition-all text-white font-bold py-2 px-4 rounded mt-5'
        onClick={hadleStart}
      >
        Start Quiz
      </button>)}

      {isStart &&
        <QuestionBox
          question={questions[currentQuestionIndex]}
          setSelected={setSelected}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          isClickable={isClickable}
          setIsClickable={setIsClickable}
          setUserAnswers={setUserAnswers}
        />
      }

      {!isStart && userAnswers.length > 0 && <Table data={userAnswers} />}

    </div>
  )
}

export default App
