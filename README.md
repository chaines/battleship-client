# Battleship

A simple Battleship game, created by the 54th cohort of the Austin campus of Hack Reactor.

## Getting started (in development)

To get this project up and running smoothly, you're going to want to follow the instructions here, as well as the instructions located
in the main battleship repo. This repo only contains client-side code.

- Clone this repository:
`git clone https://github.com/chaines/battleship-client.git`

- Run `npm install`

- Run `npm start`

- You're off to the races.

## A note on some files in this repo

- `.babelrc` sets up babel to be able to properly parse and process React components into valid es5

- `.eslintrc.js` is simply some rules that the linter follows when going through your code to ensure consistent code standards across contributers

- `webpack.config.js` sets up webpack, which is a utility that is (currently) used to run babel and provide a development server. Webpack also provides us the ability to 'proxy' our api development server so that api calls can be made on the same port that our client side development server is running.