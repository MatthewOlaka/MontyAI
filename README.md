# MontyAI

An artificial intelligence game that uses the genetic algorithm to traverse a maze. The game allows both the user and the A.I. to navigate through the maze, with the ultimate goal of finding the exit.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
What things you need to install the software and how to install them

A compatible web browser
A computer with sufficient resources to run the game

## Installing
Clone or download the repository
Open the index.html file in a compatible web browser
The game should now be running and ready to play

or open https://matthewolaka.github.io/MontyAI_level1

## Gameplay
The genetic algorithm used in the game is a method of optimization that mimics the process of natural selection in order to find the best solution to a problem. In the case of Monty A.I., the algorithm is used to train the A.I. to navigate the maze in the most efficient way possible.

The game begins with a generated maze that the user or A.I. must navigate through. The A.I. uses the concepts of natural selection and survival of the fittest to "learn" the best path through the maze. The A.I. starts with a single generation, all randomly selected, and as they go through the maze, the fittest is selected by examining the shortest distance to the checkpoint in the least amount of moves. The number of moves available to the A.I. increases every five generations, allowing them to master the moves more efficiently through incremental learning. This also allows the A.I. to 'remember' old directions and pass on genes of efficiency to later generations. It typically takes around 134 generations for the A.I. to reach the goal in level 1.

The user can also play the game themselves by pressing "P" on the keyboard, and can compare their performance to the A.I. The game also allows the user to replay the evolution highlights by pressing "G" on the keyboard, giving the user an insight into how the A.I. evolves and improves.

## Overall
Monty A.I. is a fun and educational game that combines the concept of a maze game with the powerful optimization capabilities of the genetic algorithm. It allows users to both play and learn about A.I. and genetic algorithm in an interactive and engaging way. Check out Code Bullet for more information on the genetic algorithm used in the game.

