export enum Answer {
  Empty = "",
  Correct = "correct",
  Incorrect = "incorrect",
}

export interface Category {
  name: string
  index: number
}

export enum GameStatus {
  Init = "init",
  Playing = "playing",
  Finish = "finish",
}

export interface Question {
  category: string
  type: "multiple" | "boolean"
  difficulty: "easy" | "medium" | "hard"
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export enum Status {
  Init = "init",
  Pending = "pending",
  Resolved = "resolved",
  Rejected = "rejected",
}

export const arrayCategories: Category[] = [
  {name: "Books", index: 10},
  {name: "Films", index: 11},
  {name: "Musicals", index: 13},
  {name: "Television", index: 14},
  {name: "Videogames", index: 15},
  {name: "Sciences", index: 17},
  {name: "Politics", index: 24},
  {name: "Celebrities", index: 26},
  {name: "Vehicles", index: 28},
  {name: "Sports", index: 21},
  {name: "Geography", index: 22},
  {name: "History", index: 23},
  {name: "Animals", index: 27},
  {name: "Music", index: 12},
  {name: "General", index: 9},
]
