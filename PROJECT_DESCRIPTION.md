
## Tube Conductor Kata

We were tasked with creating a Codewars-style 'kata', a small coding challenge to share with our fellow bootcampers. The brief specified that we should use Vitest to test the user's solution. If all the tests pass, the user has successfully completed the task. ✅
## Ideation

In my team, we decided to create challenges based on the theme of London. I brainstormed a few ideas inspired by tube station names and eventually landed on the theme of a tube conductor. The basic premise of the challenge was for the user to write a function that calculates how many passengers are left on the tube at the end of a journey.

I wanted my challenge to have a reasonable level of difficulty but remain an achievable problem for most users to solve.


## The Challenge! 🚇

**You are a conductor on a busy tube line in central London. Your job is to keep track of the number of passengers on the tube as it travels along its route.**

**Write a function called passengersLeft(x) that calculates the number of passengers remaining on the tube at the end of a journey.**

-The function will take a nested array x, where each element is a pair:

-The first number in the pair represents passengers getting off the tube at a stop.

-The second number represents passengers getting on the tube at that stop.

-At the start of the journey, *there are always 10 passengers already on the tube.*-

-Assume that the array includes all the stops for the journey.

-The input will always be a nested array where every element is a pair of numbers

-Your task is to calculate the total number of passengers remaining on the tube after all stops.




**Example cases:**

An input of [[10,1],[0,0]] //should return a value of 1

An input of [[0, 10],[5, 0],[3, 2]] //should return a value of 14
## The Planning ✍️

Once I had finalized my challenge, I outlined my milestones and MVPs in a document, then organized my issues into a Kanban board on GitHub.

Please see the planning doc here: https://docs.google.com/document/d/1uNdeArAlf9f9Z2UgUqP9M6Ig5oBRfsAwUGtdW8_YZw8/edit?usp=sharing
