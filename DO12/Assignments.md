<!-- Question One -->

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);

<!-- Solution -->
<!-- For as to fix the Error we have call the super()contributer before 'this' as a parent constructor  -->

 class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  alert(rabbit.name); 

<!-- Question Two -->
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

<!-- ExtendedClock -->
let ResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    time: 1000
  });

  ResolutionClock.start();

class ExtendedClock extends Clock {
  constructor(template) {
    super(template);
    let { time = 1000 } = template;
    this.time = time;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.time);
  }
};
