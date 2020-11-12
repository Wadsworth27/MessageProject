// Define variables that will key the exercises 

const exercises =['Push-Ups','Squats','Burpees'] 
const selectedExercise = exercises[Math.floor(Math.random()*3)]
const sets=Math.ceil(Math.random() *3 + 2) 
const reps = Math.ceil(Math.random()*40 +10) 

console.log(`Welcome to boot camp! Give me ${sets} sets of ${reps} reps of ${selectedExercise}`)