import TypeIt from 'typeit';

new TypeIt("#profession", {
  strings: ["Web Developer", "Mobile Developer"],
  loop: true,
  loopDelay: 1500,
  speed:70,
  waitUntilVisible: true
}).go();