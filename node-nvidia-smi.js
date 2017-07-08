#!/usr/bin/env node

const smi = require('./index');

smi(function (err, data) {

  // handle errors
  if (err) {
    console.warn(err);
    process.exit(1);
  }

  console.log(JSON.stringify(data, null, ' '));
});
