import {readFileSync} from "fs";

const INPUT = readFileSync("../../inputs/day02.txt", "utf8");

function check_report(report, sortedReport) {
  let isSafe = true;

  for(let i = 1; i < report.length; i++) {
    const current = report[i];
    const last = report[i-1];
    const sort = sortedReport[i];

    if((current < last || current > last) && Math.abs(current - last) < 4 && current === sort) {
      continue;
    }else{
      isSafe = false;

      break;
    }
  }

  return isSafe;
}

export function solve_a() {
  return INPUT.split("\n")
    .map(l => l.split(/\s+/)
      .map(n => Number(n)))
    .reduce((safe, report) => {
      const sortedReport = report[0] > report[report.length - 1]
        ? [...report].sort((a, b) => b - a) : [...report].sort((a, b) => a - b);
      const isSafe = check_report(report, sortedReport);

      return safe += isSafe;
    }, 0);
}
export function solve_b() {
  return INPUT.split("\n")
    .map(l => l.split(/\s+/)
      .map(n => Number(n)))
    .reduce((safe, report) => {
      let isSafe = true;
      const canDampen = true;
      const sortedReport = report[0] > report[report.length - 1]
        ? [...report].sort((a, b) => b - a) : [...report].sort((a, b) => a - b);

      if(!check_report(report, sortedReport)) {
        if(canDampen) {
          isSafe = false;

          for(let i = 0; i < report.length; i++) {
            const copyReport = [...report];

            copyReport.splice(i, 1);

            const copySort = copyReport[0] > copyReport[copyReport.length - 1]
              ? [...copyReport].sort((a, b) => b - a) : [...copyReport].sort((a, b) => a - b);

            if(check_report(copyReport, copySort)) {
              sortedReport.splice(sortedReport.indexOf(report[i]), 1);
              report.splice(i, 1);
              isSafe = true;

              break;
            }
          }
        }else{
          isSafe = false;
        }

      }

      isSafe ? null : console.log(report);
      isSafe ? null : console.log(sortedReport);
      isSafe ? null : console.log("------------");

      return safe += isSafe;
    }, 0);
}
