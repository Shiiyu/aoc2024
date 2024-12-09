import * as day01 from "./day01.mjs";
import * as day02 from "./day02.mjs";

function createRow(answerA, answerB) {
  return {"Answer_A": answerA, "Answer_B": answerB};
}

const table = {};

table.day01 = createRow(await day01.solve_a(), day01.solve_b());
table.day02 = createRow(await day02.solve_a(), day02.solve_b());
console.table(table, ["Answer_A", "Answer_B"]);
