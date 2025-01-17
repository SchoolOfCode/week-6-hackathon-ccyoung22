//Remember to npm install beofre you start!

//You are a conductor on a busy tube line in central London.Your job is to keep track of the number of passengers on the tube as it travels along its route.

// Write a function called passengersLeft(x) that calculates the number of passengers remaining on the tube at the end of a journey.

// The function will take a nested array x, where each element is a pair:

// The first number in the pair represents passengers getting off the tube at a stop.

// The second number represents passengers getting on the tube at that stop.

// At the start of the journey, there are always 10 passengers already on the tube.

// Assume that the array includes all the stops for the journey.

// Your task is to calculate the total number of passengers remaining on the tube after all stops.

//The input will always be a nested array where every element is a pair of numbers

//Your function should always throw an error with a message of "Input must be an array", when anything other than an array is passed into the function

export function passengersLeft(x) {
  //Your solution goes here!
}

//Example cases:
//An input of [[10,1],[0,0]] //should return a value of 1
//An input of [[0, 10],[5, 0],[3, 2]] //should return a value of 14
