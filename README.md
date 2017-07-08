[![Build Status](https://travis-ci.org/chrisallenlane/node-nvidia-smi.svg)](https://travis-ci.org/chrisallenlane/node-nvidia-smi)
[![npm](https://img.shields.io/npm/v/node-nvidia-smi.svg)]()
[![npm](https://img.shields.io/npm/dt/node-nvidia-smi.svg)]()


node-nvidia-smi
===============
A node wrapper around `nvidia-smi`. It returns the output of `nvidia-smi -q -x`
formatted as JSON.


Installing
----------
```sh
[sudo] npm install [-g] node-nvidia-smi
```


Usage
-----
### Dependency ###
```javascript
const smi = require('node-nvidia-smi');

smi(function (err, data) {

  // handle errors
  if (err) {
    console.warn(err);
    process.exit(1);
  }

  // display GPU information
  console.log(JSON.stringify(data, null, ' '));
});
```


### CLI ###
If installed globally, a `node-nvidia-smi` executable is installed on your
system `PATH`.


[View example output in the wiki][wiki].

[wiki]: https://github.com/chrisallenlane/node-nvidia-smi/wiki/Example-Output
