import * as React from 'react'
import { useState } from 'react'
import logo from '../logo.svg'
import styles from './App.module.scss'
import QuestionCard from '../components/QuestionCard/QuestionCard'
import Button from '../ui/Button/Button'
import StartPage from '../pages/StartPage/StartPage'
import EndPage from '../pages/EndPage/EndPage'
import CorrectAnswer from '../pages/CorrectAnswer/CorrectAnswer'
import IncorrectAnswer from '../pages/IncorrectAnswer/IncorrectAnswer'
import SelectCategory from '../pages/SelectCategory/SelectCategory'
import {Question} from '../components/Question'
import api from '../components/api'
import correct from '../assets/correct.svg'
import incorrect from '../assets/incorrect.svg'
import {htmlDecode} from '../decode/htmlDecode'
import Canvas from '../canvas/Canvas'

enum Status {
  Init = 'init',
  Pending = 'pending',
  Resolved = 'resolved',
  Rejected = 'rejected'
}

enum GameStatus {
  Init = 'init',
  Playing = 'playing',
  Finish = 'finish'
}

enum Answer {
  Empty = '',
  Correct = 'correct',
  Incorrect = 'incorrect'
}


enum Category{
  Sports=21,
  Geography=22,
  History=23,
  Animals=27,
  EntertainmentMusic=12,
  General=9,
}


const App: React.FC = () => {
  const [questions, setQuestions] = React.useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0)
  const [status, setStatus] = React.useState<Status>(Status.Init)
  const [points, setPoints] = React.useState<number>(0);
  const [start,setStart] = React.useState<boolean>(false);
  const [gameStatus, setGameStatus] = React.useState<GameStatus>(GameStatus.Init)
  const [time, setTime] = React.useState<number>(30)
  const [answerUser,setAnswerUser] = React.useState<string>('')
  const [answer,setAnswer] = React.useState<Answer>(Answer.Empty)
  const [electionCategory,setElectionCategory] = React.useState<boolean>(false)

  const question:Question = questions[currentQuestion];

 



  React.useEffect(() => {

    if (gameStatus !== GameStatus.Init)
    {
      return;
    }
    /*
    setStatus(Status.Pending);
    
    api.list(Category.Sports).then( (question) => {
      setQuestions(question);
      setStatus(Status.Resolved);
    })*/
  },[gameStatus])




  React.useEffect( () => {
    if (!start) {return}
    if (time <= 0)
    {
      handleNextQuestion();
      return;
    }
    const interval = setInterval ( () => {
      setTime((time) => time -1)
    },1000)

    return () => clearInterval(interval);
  }, [time,start])



  React.useEffect( () => {
    if (time <= 3 && answerUser === question.correct_answer)
    {
      setAnswer(Answer.Correct)
    }
    if (time <= 3 && answerUser !== question.correct_answer)
    {
      setAnswer(Answer.Incorrect)
    }
    if (time === 0)
    {
      setAnswer(Answer.Empty)
    }
  },[time, question, answerUser])

  const handleNextQuestion = () =>
  {
    if (currentQuestion < questions.length - 1)
    {
      setCurrentQuestion(currentQuestion + 1);
      setTime(30);
    }
    else
    {
      setGameStatus(GameStatus.Finish);
    }
  }


  const onAnswer = (text:string) =>
  {
    if (question.correct_answer === text)
    {
      switch(question.type)
      {
        case "boolean": {
          setPoints(points => points + 5)
          break
        }
        case "multiple":{
          setPoints(points => points + 10)
          break
        }
      }
    }
    setTime(2);
    setAnswerUser(text)
  }

  const configApi = (n: number) => {
    setStatus(Status.Pending)
    api.list(n).then( (question) => {
      setQuestions(question);
      setStatus(Status.Resolved);
      setElectionCategory(true)
      console.log("Se configuro la api")
    })
  }



  const selectCategory = (text: string) => {
    let n:number;
    switch(text)
    {
        case 'sports':
            n=21
            break
        case 'geography':
            n= 22
            break
        case 'history':
            n= 23
            break
        case 'animals':
            n= 27
            break
        case 'music':
            n= 12
            break
        case 'general':
            n= 9
            break
        default:
            n= -1
    }
    configApi(n)
  }

  if (answer === Answer.Correct){
    return(
      <CorrectAnswer>
          <img src={correct} alt={"correct answer"}/>
          <h3>The answer was correct!</h3>
      </CorrectAnswer>
    )
  }


  if (answer === Answer.Incorrect)
  {
    return(
      <IncorrectAnswer>
        <img src={incorrect} alt={"incorrect answer"}/>
        <h3>The answer was incorrect.</h3>
          <p>The right answer was: {question.correct_answer}</p>
      </IncorrectAnswer>
    )
  }

  if (status === Status.Pending)
  {
    console.log("Pendiente")
    return <span>Loading..</span>
  }

  if (gameStatus === GameStatus.Init)
  {
    return(
      <StartPage
        startGame={ () => {
          setGameStatus(GameStatus.Playing);
          setStart(true);
        }}
      />
    )
  }


  if (gameStatus === GameStatus.Playing && electionCategory === false)
  {
    return(
      /*
      <StartPage
        startGame={ () => {
          setGameStatus(GameStatus.Playing);
          setStart(true);
        }}
      />
      */
     <SelectCategory> 
      <Button onClick={()=> {selectCategory('sports')}}>Sports</Button>
      <Button onClick={()=> {selectCategory('geography')}}>Geography</Button>
      <Button onClick={()=> {selectCategory('history')}}>History</Button>
      <Button onClick={()=> {selectCategory('animals')}}>Animals</Button>
      <Button onClick={()=> {selectCategory('music')}}>Music</Button>
      <Button onClick={()=> {selectCategory('general')}}>General</Button>  
    </SelectCategory>
    )
  }

  if (gameStatus === GameStatus.Playing && electionCategory === true)
  {
    <StartPage
        startGame={ () => {
          setGameStatus(GameStatus.Playing);
          setStart(true);
        }}
    />
  }

  if (gameStatus === GameStatus.Finish)
  {
    return(
      <EndPage
        playAgain= { () => {
          setGameStatus(GameStatus.Init);
          setStatus(Status.Init);
          setTime(30);
          setCurrentQuestion(0);
          setStart(false);
          setPoints(0);
        }}
        points={points}
        />
    )
  }



  return (
    <div className={styles.container}>
      <div className={styles.time}>
        <text>{time}</text>
      </div>
      <QuestionCard
        header={`${currentQuestion + 1}/${questions.length}`}
        footer={`${question.category} - ${question.difficulty}`}>
        {`${htmlDecode(question.question)}`}
      </QuestionCard>
      <nav className={styles.answers}>
        {[...question.incorrect_answers,question.correct_answer]
        .sort((a,b) => a.localeCompare(b))
        .map(answer => 
        <Button key={answer} onClick={() => onAnswer(answer)}>{htmlDecode(answer)}</Button>)}
      </nav>
    </div>
  )
}

/*
        <progress max="100" value="0"></progress>
        */

export default App
