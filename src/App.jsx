import "./app.css"
import { useState, useEffect, useMemo } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [userName, setUsername] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")

  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),
    [])

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber])

  const data = [
    {
      id: 1,
      question: 'Siapa nama khalifah ke 5?',
      answer: [
        {
          text: 'Ali Bin Abu Tholib',
          correct: false
        },
        {
          text: 'Hamzah Bin Abdul Motholib',
          correct: false
        },
        {
          text: 'Muawiyah Bin Abu Sofyan',
          correct: true
        },
        {
          text: 'Usman Bin Affan',
          correct: false
        },
      ]
    },
    {
      id: 2,
      question: 'Dimanakah lahirnya Nabi Muhammad SAW ?',
      answer: [
        {
          text: 'Makkah',
          correct: true
        },
        {
          text: 'Madinah',
          correct: false
        },
        {
          text: 'Syam',
          correct: true
        },
        {
          text: 'Palestina',
          correct: false
        },
      ]
    }, {
      id: 3,
      question: 'Siapa nama khalifah ke 5?',
      answer: [
        {
          text: 'Ali Bin Abu Tholib',
          correct: false
        },
        {
          text: 'Hamzah Bin Abdul Motholib',
          correct: false
        },
        {
          text: 'Muawiyah Bin Abu Sofyan',
          correct: true
        },
        {
          text: 'Usman Bin Affan',
          correct: false
        },
      ]
    }, {
      id: 4,
      question: 'Siapa nama khalifah ke 5?',
      answer: [
        {
          text: 'Ali Bin Abu Tholib',
          correct: false
        },
        {
          text: 'Hamzah Bin Abdul Motholib',
          correct: false
        },
        {
          text: 'Muawiyah Bin Abu Sofyan',
          correct: true
        },
        {
          text: 'Usman Bin Affan',
          correct: false
        },
      ]
    }, {
      id: 5,
      question: 'Siapa nama khalifah ke 5?',
      answer: [
        {
          text: 'Ali Bin Abu Tholib',
          correct: false
        },
        {
          text: 'Hamzah Bin Abdul Motholib',
          correct: false
        },
        {
          text: 'Muawiyah Bin Abu Sofyan',
          correct: true
        },
        {
          text: 'Usman Bin Affan',
          correct: false
        },
      ]
    }, {
      id: 6,
      question: 'Siapa nama khalifah ke 5?',
      answer: [
        {
          text: 'Ali Bin Abu Tholib',
          correct: false
        },
        {
          text: 'Hamzah Bin Abdul Motholib',
          correct: false
        },
        {
          text: 'Muawiyah Bin Abu Sofyan',
          correct: true
        },
        {
          text: 'Usman Bin Affan',
          correct: false
        },
      ]
    },
  ]

  return (
    <div className="app">
      <div className="main">
        {userName ?
          <>
            {stop ? <h1>You earn {earned}</h1> : (
              <>
                <div className="top">
                  <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )
            }
          </>
          : <Start setUsername={setUsername} />}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(item => {
            const { id, amount } = item
            return (
              <li className={questionNumber === id ? "moneyListItem active" : "moneyListItem"} key={id}>
                <span className="moneyListItemNumber">{id}</span>
                <span className="moneyListItemAmount">{amount}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
