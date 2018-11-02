# coding-challenges
This repo houses a set of coding challenges.

### Testing

Each challenge from the `src/` directory has a corresponding file in the `test/` directory.

To get started, you'll need to run `npm install` from the command line. This is installing the dependencies listed in your `package.json`. At the moment, we're installing mocha, chai, and nyc.

To run the tests, run `npm test` from your command line. If you just forked this project, you'll see that 1 test is passing with 25% coverage.

Your task will be to write the remainder of the tests. We're going to use [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) for this. [NYC](https://github.com/istanbuljs/nyc) is running the code coverage numbers. Take a look through their documentation.

I've started some of the scaffolding in `nonrepeated-character.test.js` for you. You'll also notice the line at the bottom of `nonrepeated-character.js`. You'll need to understand what this code is doing, and use it in your other files as well.

I've also provided solutions to each of the coding challenges in the `src/` directory. Feel free to delete these and include your solutions instead. The solutions are just *ONE* solution that I've provided; there are many other correct ones.

### package.json

You'll notice a `package.json` and `package-lock.json` file in this repo. Virtually all JavaScript projects contain a `package.json`. There are typically some basic attributes such as the project's name, description, and author.

The scripts portion allows us to run commands using an alias. The dependencies section of `package.json` lists the packages that need to be installed for the project to run properly. In this project, you'll notice that we need `chai`, `mocha`, and `nyc`. The versions are listed next to the package names.

You'll also notice that the versions typically have a tilde (~) or a caret (^). In the simplest terms, the tilde matches the most recent patch version in the specified minor version. ~1.2.3 will match all 1.2.x versions but will miss 1.3.0.

The caret, on the other hand, is more relaxed. It will update you to the most recent minor version in the specified major version. ^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.

Read more about `package.json` [here](https://docs.npmjs.com/files/package.json).

### Node and NPM

[Node.js](www.nodejs.org) is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. You'll want to learn as much as you can about Node, and we'll definitely learn more about it soon. For now, you can get by with just knowing the basics. Read up a little on it [here](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5).

Node modules are reusable blocks of code that can stand alone and that we can `npm install` into our own projects in order to use them. You'll notice that if you try to run `npm test` BEFORE you run `npm install` that you'll get errors. That's because we are running our tests with a node module, and without it installed, the computer doesn't recognize the command.

### module.exports

As mentioned earlier, modules are Node's way of organizing code into individual files and packages.

Let's make a simple distinction between a module and a package:

 - A module is file that exports an object. Typically we use modules to organize our projects into individual components.
 - A package is something we install using npm

The `module.exports` is a special object which is included in every JS file in the Node.js application by default. `module` is a variable that represents current module and `exports` is an object that will be exposed as a module.

Take a look at `nonrepeated-character.js` and you'll see that we're exporting the `firstNonRepeatedCharacter` function in order for the tests to be able to find it. You'll want to learn to more about `module.exports`. Try starting [here](https://www.sitepoint.com/understanding-module-exports-exports-node-js/).
