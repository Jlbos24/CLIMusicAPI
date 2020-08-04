# CLIMusicAPI

## About

- This is a simple Command Line App to find the lyrics from any artist across the globe. So far, the aim is calculate statistics on an artist, like average words per track.
- The app is built in Node.js and uses Axios to handle requests to Third Party API's.
- All testing has been done using Jest.

## Getting Started

### Clone the project

- Go to "Code" copy - https://github.com/Jlbos24/CLIMusicAPI.git
- Open the project in your IDE
- Install Node Package Manager if you dont have it already - npm install npm@latest -g
- The following packages need to be installed via the terminal - Jest & Axios
  - You can install all dependencies with command - npm install - or individually:
  - npm install jest --save-dev
  - npm install jest-extended --save-dev
  - npm install axios --save-dev
- Once your dependencies are installed you will need to initialise command line prompts
  - Ensure #!/usr/bin/env node is at the top of Controller.js
  - Add the following script to package.json underneath "main" : "index.js"
    - "bin": {"search": "./Controller/controller.js"},
  - Finally in the terminal run the following npm install -g (this will allow you to enter commands into the cli)

## Running the Project

- Interacting with the project is easy, once the above have been followed go to the terminal
  - to find the average words per song enter - search <Artist Name> i.e. search Eminem
- The project will return the average number of words per song
- If there is an error this will be logged to the terminal

## Running the Tests

- In the terminal run tests using npm test - this will run both api.test.js and utils.spec.js
