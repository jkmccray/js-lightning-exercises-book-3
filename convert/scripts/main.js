// 1. Create an article tag in your HTML with the id of "studentReport"
// 2. Create 3 objects that represents some of your teammates as NSS students
// - Name
// - Cohort
// - Current exercise being worked on

// 3. Add a toString() method to your object that creates a
// string representation and returns it. Use the following
// format:
//     "Name is in cohort and is working on the X exercise"
// 4. Write a function that inputs a student object and returns the
//    string representation
// 5. Put all objects into an array stored in the variable students
// 6. Use the map() method to generate a new array that only contains
// the string representations of each student
// 7. Use the forEach() method to iterate the new array and render
//    each string representation into the "studentReport" HTML element

const sarah = {
  toString () {
    return `<p>${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercise} exercise</p>`
  },
  name: "Sarah",
  cohort: 34,
  currentExercise: "journal entry"
}

const matt = {
  toString () {
    return `<p>${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercise} exercise</p>`
  },
  name: "Matt",
  cohort: 34,
  currentExercise: "array methods"
}

const caroline = {
  toString () {
    return `<p>${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercise} exercise</p>`
  },
  name: "Caroline",
  cohort: 34,
  currentExercise: "objects"
}

const students = [sarah, matt, caroline]

const studentStringRep = (studentObj) => {
  return studentObj.toString()
}

const studentStringArray = students.map(studentStringRep)
const studentReport = document.querySelector("#studentReport")
studentStringArray.forEach(studentString => {
  studentReport.innerHTML += studentString
})

// data immutability - means that the raw data from a data store is never modified
// it gets copied into a new array for modifications to be made to it.
// This will be a significant component of React