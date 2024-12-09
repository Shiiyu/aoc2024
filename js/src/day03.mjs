import {readFileSync} from "fs";

const INPUT = readFileSync("../../inputs/day03.txt", "utf8");

export function solve_a() {
  return INPUT.split("\n")
    .join("")
    .match(/mul\(\d{1,3},\d{1,3}\)/g)
    .map(s => s.split(",")
      .map(n => n.charAt(0) === "m" ? Number(n.slice(4)) : Number(n.slice(0, -1))))
    .reduce((sum, [a, b]) => sum += a * b, 0);
}
export function solve_b() {
  const commands = INPUT.split("\n")
    .join("")
    .match(/mul\(\d{1,3},\d{1,3}\)|(don't\(\))|(do\(\))/g);
  let enabled = true;
  let sum = 0;

  for(const command of commands) {
    if(command === "do()") {
      enabled = true;
    }else if(command === "don't()") {
      enabled = false;
    }else if(enabled === true) {
      const [a, b] = command.split(",")
        .map(n => n.charAt(0) === "m" ? Number(n.slice(4)) : Number(n.slice(0, -1)));

      sum += a * b;
    }
  }

  return sum;
}
