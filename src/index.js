import './main.scss';

function test () {
  var bla = "hello";


  var bla2 = 'hello2';
  var sum = bla + ' ' + bla2;
  // random comment


  return sum;
}

class Main {
  bla () {
    console.log('new main object created', test());
  }
}

const praa = new Main();

praa.bla();
