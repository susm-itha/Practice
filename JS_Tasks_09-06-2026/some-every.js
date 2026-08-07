//some()
const marks = [78, 85, 92, 34, 88]
const hasFailedStudent = marks.some(mark => mark < 35)
console.log(hasFailedStudent)

//every()
const markss = [78, 85, 92, 66, 88]
const allPassed = markss.every(mark => mark >= 35)
console.log(allPassed)

