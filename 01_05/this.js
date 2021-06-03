// method -> object
// function -> global (window, global)

// 'this' referring to the environment's
// lexical context, which means:
//   browser = window
//   node = global
function globalContext() {
  console.log(this);
}

globalContext(); // prints: Window {...}

// 'this' referring to the object's
// lexical context
const video = {
  name: 'andre',
  length: 190,
  printInfo() {
    console.log(this);
  },
};

video.printInfo(); // prints the object

// 'this' referring to a new empty object
// in the case of constructor functions
function VideoConstructor(name, length) {
  (this.name = name), (this.length = length), console.log(this);
}

const andre = new VideoConstructor('andre', 118);

// same as the previous, constructor function,
// but converted to class declaration
class VideoClass {
  constructor(name, length) {
    (this.name = name), (this.length = length), console.log(this);
  }
}

new VideoClass('andre', 135);
