import {readFileSync} from "fs";

const INPUT = readFileSync("../../inputs/day01.txt", "utf8");

export function solve_a() {
  const [listOne, listTwo] = INPUT.split("\n")
    .map(l => l.split(/\s+/)
      .map(n => Number(n)))
    .flat()
    .reduce((nums, num) => {
      nums[nums[0].length > nums[1].length ? 1 : 0].push(num);

      return nums;
    }, [[], []])
    .map(nums => nums.sort());
  let sum = 0;

  for(let i = 0; i < listOne.length; i++)
    sum += Math.abs(listOne[i] - listTwo[i]);

  return sum;
}
export function solve_b() {
  const [listOne, listTwo] = INPUT.split("\n")
    .map(l => l.split(/\s+/)
      .map(n => Number(n)))
    .flat()
    .reduce((nums, num) => {
      nums[nums[0].length > nums[1].length ? 1 : 0].push(num);

      return nums;
    }, [[], []]);
  let sum = 0;

  for(let i = 0; i < listOne.length; i++)
    sum += listOne[i] * listTwo.filter(n => n === listOne[i]).length;

  return sum;
}
