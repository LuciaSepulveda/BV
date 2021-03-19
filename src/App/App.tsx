import * as React from "react"
import {Box, Grid, Button, Stack, Text, Progress} from "@chakra-ui/react"

import QuestionCard from "../components/QuestionCard/QuestionCard"
import StartPage from "../pages/StartPage/StartPage"
import EndPage from "../pages/EndPage/EndPage"
import CorrectAnswer from "../pages/CorrectAnswer/CorrectAnswer"
import IncorrectAnswer from "../pages/IncorrectAnswer/IncorrectAnswer"
import SelectCategory from "../pages/SelectCategory/SelectCategory"
import api from "../api/api"
import correct from "../assets/correct.png"
import incorrect from "../assets/incorrect.png"
import {htmlDecode} from "../types/htmlDecode"
import {Status, GameStatus, Answer, Question, arrayCategories, Category} from "../types/types"
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
  const [categories, setCategories] = React.useState<Category[]>([])

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

  const randomCategories = () => {
    while (categories.length !== 6) {
      const aux = arrayCategories[Math.round(Math.random() * 23) % arrayCategories.length]

      if (!categories.includes(aux)) {
        categories.push(aux)
      }
    }
  }

  const selectCategory = (cat: number) => {
    configApi(cat)
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
    randomCategories()

    return <SelectCategory categories={categories} selectCategory={selectCategory} />
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
      _hover={{bg: "brand.600"}}
      bg="brand.500"
      boxShadow="xl"
      direction="column"
      h="700px"
      m="auto"
      maxWidth="480px"
      transition="1s cubic-bezier(.08,.5,.5,1)"
      w={{sm: "80%", md: "480px", lg: "480px", xl: "480px"}}
    >
      <Box color="white" m="auto" mt="50px" p={1} w="20%">
        <Text fontSize="2xl">{time - 3}</Text>
        <Progress colorScheme="pink" max={30} size="xs" value={33 - time} />
      </Box>
      <QuestionCard
        footer={`${question.category} - ${question.difficulty}`}
        header={`${currentQuestion + 1}/${questions.length}`}
      >
        {`${htmlDecode(question.question)}`}
      </QuestionCard>
      <Grid h="240px" m={2}>
        {[...question.incorrect_answers, question.correct_answer]
          .sort((a, b) => a.localeCompare(b))
          .map((answer) => (
            <Button
              key={answer}
              _hover={{
                bg: "whiteAlpha.400",
                boxShadow: "md",
                color: "white",
              }}
              bg="white"
              color="brand.500"
              m="auto"
              maxWidth="100%"
              mb={2}
              mt={2}
              transition="1s cubic-bezier(.08,.5,.5,1)"
              onClick={() => onAnswer(answer)}
            >
              <Text maxWidth="100%" overflow="hidden" whiteSpace="nowrap">
                {htmlDecode(answer)}
              </Text>
            </Button>
          ))}
      </Grid>
    </Stack>
  )
}

export default App
