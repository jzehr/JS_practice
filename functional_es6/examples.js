// two or more args need to wrap //

const sayHello = name => console.log(`Hello, ${name}. Get on the path.`);
const adder = (x,y) => console.log(`The number ${x} plus ${y} is ${x+y}`);
const doubler = x => console.log(`The number ${x} doubled is ${x*2}`);

// example of returning object //
const simpleObject = (arg1, arg2) => ({
  name: 'blah blah',
  language: 'cpp',
});

const hi = name => console.log('hi ' + name);

console.log(adder(10, 1));
console.log(doubler(8));
console.log(sayHello('Jocko'));
console.log(hi('jo'));
