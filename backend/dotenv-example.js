console.log('No value for FOO yet:', process.env.FOO);

if (process.env.NODE_ENV !== 'production') { 
  require('dotenv').config(); // the value was loaded and defined after configuring dotenv
}

console.log('Now the value for FOO is:', process.env.FOO);