require("./../lib/env-js/envjs/node");
require("./../d3");
require("./../d3.stats");

var data = [1, 2, 3, 4, 5];

for (var i = 0; i <= data.length; i++) {
  var d = data.slice(0, i);
  console.log("median [" + d + "]:");
  console.log("  ", d3.stats.median(d));
  console.log("");
}
