import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import play from '../assets/src_sounds_play.mp3'
import correct from '../assets/src_sounds_correct.mp3'
import wrong from '../assets/src_sounds_wrong.mp3'

const Trivia = ({ data, setStop, setQuestionNumber, questionNumber }) => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState('answer active')
    const [disableButton, setDisableButton] = useState(false)

    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    useEffect(() => {
        letsPlay()
    }, [letsPlay])

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration);
    }

    const handleClick = (item) => {
        console.log(item);
        setDisableButton(true)
        setSelectedAnswer(item)
        delay(3000, () => {
            setClassName(item.correct ? 'answer correct' : 'answer wrong')
            setDisableButton(false)
        })
        delay(3500, () => {
            if(item.correct) {
                correctAnswer()
                delay(1000, () => {
                    setQuestionNumber((prev) => prev + 1)
                    setSelectedAnswer(null)
                })
            } else {
                wrongAnswer()
                delay(1000, () => {
                    setStop(true)
                })
            }
        })
    }

    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answer.map(item => {
                    return (
                        <button disabled={disableButton} className={selectedAnswer === item ? className : 'answer'} onClick={() => handleClick(item)}>{item.text}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Trivia
