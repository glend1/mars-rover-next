# Mars Rover (Next REST) 
Built using Next.JS, a simple mars rover exercise that uses exposes a REST api and has a simple consumer

## Table of Contents

- [Mars Rover (Next REST)](#mars-rover-next-rest)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
  - [Installing](#installing)
  - [Usage](#usage)

## About
This was a tast from Tech Returners to do a "take home style Kata exercise". It was encouraged to facilitate learning of recent lectures - I decided to use this learn about how forms work in react and how REST apis work with typescript.

## Getting Started
Open a terminal and navigate to a desired folder to clone the respository to and use 
```
git clone https://github.com/glend1/mars-rover-next
```

## Installing
Make sure you have a new version of node installed on your computer then run

```
npm install
```

## Usage
to build and run the application

```
npm run build
```
```
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The REST api will be located at [http://localhost:3000/api/rover](http://localhost:3000/api/rover). It accepts a POST request with the following structure;

```
{"roverInstructions": [{
    "x": 6, 
    "y": 3, 
    "direction": "N",
    "instructions": "MLRM"
  } 
  ...], 
  "maxSize": 5
}
```

## Tests
Tests can be run
```
npm run test
```