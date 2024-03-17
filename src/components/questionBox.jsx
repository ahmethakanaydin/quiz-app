import { useState } from "react"

export default function QuestionBox({ question, setSelected, setCurrentQuestionIndex, isClickable, setIsClickable, setUserAnswers }) {

    const [options, setOptions] = useState(['A', 'B', 'C', 'D'])

    const handleSelect = (option) => {
        setSelected(option)
        setIsClickable(false)

        setUserAnswers(prevAnswers => [...prevAnswers, { id: question.id, question: question.title, answer: option }])

        setCurrentQuestionIndex(prevIndex => prevIndex + 1)
        setSelected('')
    }

    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <div className='bg-white text-gray-800 p-10 rounded-lg shadow-md md:min-w-[750px]'>
                <h2 className='text-2xl'>{question?.id} - {question?.title}</h2>
                <div className='grid grid-cols-2 gap-6 mt-6'>
                    {options.map((option, index) => (
                        <button
                            disabled={!isClickable}
                            key={index}
                            className={`text-black p-4 font-semibold rounded-lg shadow hover:bg-blue-700 hover:text-gray-50 transition-all ${!isClickable ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}