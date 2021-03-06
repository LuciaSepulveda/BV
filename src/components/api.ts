import * as React from "react"

import {Question} from "./Question"

export default {
  list: (n: number): Promise<Question[]> =>
    fetch(`https://opentdb.com/api.php?amount=10&category=${n}`)
      .then((res) => res.json())
      .then((res) => res.results),
}
