import * as React from "react"
import {Box, Grid, Button, Stack, Text, Progress} from "@chakra-ui/react"

import QuestionCard from "../components/QuestionCard/QuestionCard"
import StartPage from "../pages/StartPage/StartPage"
import EndPage from "../pages/EndPage/EndPage"
import CorrectAnswer from "../pages/CorrectAnswer/CorrectAnswer"
import IncorrectAnswer from "../pages/IncorrectAnswer/IncorrectAnswer"
import SelectCategory from "../pages/SelectCategory/SelectCategory"
import {Question} from "../types/Question"
import api from "../api/api"
import correct from "../assets/correct.png"
import incorrect from "../assets/incorrect.png"
import {htmlDecode} from "../types/htmlDecode"
import {Status} from "../types/Status"
import {GameStatus} from "../types/GameStatus"
import {Answer} from "../types/Answer"
import Loading from "../pages/Loading/Loading"

const App: React.FC = () => {
  const [questions, setQuestions] = React.useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0)
  const [status, setStatus] = React.useState<Status>(Status.Init)
  const [totalPoints, setTotalPoints] = React.useState<number>(0)
  const [points, setPoints] = React.useState<number>(0)
  const [start, setStart] = React.useState<boolean>(false)
  const [gameStatus, setGameStatus] = React.useState<GameStatus>(GameStatus.Init)
  const [time, setTime] = React.useState<number>(33)
  const [answerUser, setAnswerUser] = React.useState<string>("")
  const [answer, setAnswer] = React.useState<Answer>(Answer.Empty)
  const [electionCategory, setElectionCategory] = React.useState<boolean>(false)

  const question: Question = questions[currentQuestion]

  React.useEffect(() => {
    if (gameStatus !== GameStatus.Init) {
      return
    }
  }, [gameStatus])

  React.useEffect(() => {
    if (!start) {
      return
    }
    if (time <= 0) {
      handleNextQuestion()

      return
    }
    if (gameStatus === GameStatus.Playing && electionCategory === true) {
      const interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [time, start, electionCategory, gameStatus])

  React.useEffect(() => {
    if (time <= 3 && answerUser === question.correct_answer) {
      setAnswer(Answer.Correct)
    }
    if (time <= 3 && answerUser !== question.correct_answer) {
      setAnswer(Answer.Incorrect)
    }
    if (time === 0) {
      setAnswer(Answer.Empty)
    }
  }, [time, question, answerUser])

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setTime(33)
    } else {
      setGameStatus(GameStatus.Finish)
    }
  }

  const onAnswer = (text: string) => {
    switch (question.type) {
      case "boolean": {
        if (question.correct_answer === text) {
          setPoints((points) => points + 5)
        }
        setTotalPoints((totalPoints) => totalPoints + 5)
        break
      }
      case "multiple": {
        if (question.correct_answer === text) {
          setPoints((points) => points + 10)
        }
        setTotalPoints((totalPoints) => totalPoints + 10)
        break
      }
    }
    setTime(2)
    setAnswerUser(text)
  }

  const configApi = (n: number) => {
    setStatus(Status.Pending)
    api.list(n).then((question) => {
      setQuestions(question)
      setStatus(Status.Resolved)
      setElectionCategory(true)
    })
  }

  const selectCategory = (text: string) => {
    let n: number

    switch (text) {
      case "sports":
        n = 21
        break
      case "geography":
        n = 22
        break
      case "history":
        n = 23
        break
      case "animals":
        n = 27
        break
      case "music":
        n = 12
        break
      case "general":
        n = 9
        break
      default:
        n = -1
    }
    configApi(n)
  }

  const startGame = () => {
    setGameStatus(GameStatus.Playing)
    setStart(true)
  }

  if (answer === Answer.Correct) {
    return <CorrectAnswer src={correct} />
  }

  if (answer === Answer.Incorrect) {
    return <IncorrectAnswer correct_answer={question.correct_answer} src={incorrect} />
  }

  if (status === Status.Pending) {
    return <Loading />
  }

  if (gameStatus === GameStatus.Init) {
    return (
      <StartPage
        startGame={() => {
          startGame()
        }}
      />
    )
  }

  if (gameStatus === GameStatus.Playing && electionCategory === false) {
    return <SelectCategory selectCategory={selectCategory} />
  }

  if (gameStatus === GameStatus.Finish) {
    return (
      <EndPage
        playAgain={() => {
          setGameStatus(GameStatus.Init)
          setStatus(Status.Init)
          setTime(33)
          setCurrentQuestion(0)
          setStart(false)
          setPoints(0)
          setTotalPoints(0)
          setElectionCategory(false)
        }}
        points={points}
        totalPoints={totalPoints}
      />
    )
  }

  return (
    <Stack
      bg="brand.500"
      boxShadow="md"
      direction="column"
      h="700px"
      m="auto"
      width="480px"
      transition="1s cubic-bezier(.08,.5,.5,1)"
      _hover={{bg: "brand.600"}}
    >
      <Box color="white" m="auto" mt="50px" p={1} w="20%">
        <Text fontSize="xl">{time - 3}</Text>
        <Progress value={33 - time} max={30} size="xs" color="brand.500" />
      </Box>
      <QuestionCard
        footer={`${question.category} - ${question.difficulty}`}
        header={`${currentQuestion + 1}/${questions.length}`}
      >
        {`${htmlDecode(question.question)}`}
      </QuestionCard>
      <Grid m={2} h="240px">
        {[...question.incorrect_answers, question.correct_answer]
          .sort((a, b) => a.localeCompare(b))
          .map((answer) => (
            <Button
              _hover={{
                bg: "whiteAlpha.400",
                boxShadow: "md",
                color: "white",
              }}
              key={answer}
              bg="white"
              color="brand.500"
              m="auto"
              mb={2}
              mt={2}
              maxWidth="100%"
              onClick={() => onAnswer(answer)}
            >
              <Text maxWidth="100%" whiteSpace="nowrap" overflow="hidden">
                {htmlDecode(answer)}
              </Text>
            </Button>
          ))}
      </Grid>
    </Stack>
  )
}

export default App
