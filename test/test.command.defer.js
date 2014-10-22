var program = require('../')
  , should = require('should');

var val = 'foo';
program
  .command('info [options]')
    .action(function (){
      val = 'bar';
    });

program
  .command('info [options]')
    .action(function (){
      val = 'bar';
    });

// defer action
program.parse(['node', 'test', 'info'], true);
val.should.equal('foo');

// dont defer action
program.parse(['node', 'test', 'info']);
val.should.equal('bar');