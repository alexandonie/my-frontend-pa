import './main.scss';

function test () {
  var bla = 'hello';
  var bla2 = 'hello2';
  var sum = bla + ' ' + bla2;
  // random comment
  return sum;
}

class Main {
  constructor () {
    this.bla();
  }

  bla () {
    console.log('new main object created');
  }
}

const praa = new Main();
