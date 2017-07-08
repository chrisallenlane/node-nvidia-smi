const exec = require('child_process').exec;
const xml  = require('xml2js').parseString;

module.exports = function(callback) {

  // shell out
  exec('nvidia-smi -q -x', function(err, stdout, stderr) {

    // handle errors
    if (err) {
      return callback(err);
    }
    if (stderr) {
      return callback(stderr);
    }

    // XML parser options
    const options = {
      explicitArray : false,
      trim          : true,
    };

    // restructure the XML into json
    xml(stdout, options, function (err, data) {

      // handle errors
      if (err) {
        return callback(err);
      }

      // return the data
      return callback(null, data);
    });
  });
};
