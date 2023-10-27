/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekends {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

function isWeekend(day: string): boolean {
  if (day === "Sat" || day === "Sun") {
    return false;
  }
  return true;
}
