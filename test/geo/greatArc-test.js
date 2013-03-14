var vows = require("vows"),
    load = require("../load"),
    assert = require("../env-assert");

var suite = vows.describe("d3.geo.greatArc");

suite.addBatch({
  "greatArc": {
    topic: load("geo/greatArc"),
    "distance": function(d3) {
      var arc = d3.geo.greatArc();
      assert.equal(arc.distance({source: [0, 0], target: [0, 0]}), 0);
      assert.inDelta(arc.distance({
        source: [118 + 24 / 60, 33 + 57 / 60],
        target: [ 73 + 47 / 60, 40 + 38 / 60]
      }), 3973 / 6371, .5);
    },
    "source and target can be set as constants": function(d3) {
      var arc = d3.geo.greatArc()
          .source([5, 52])
          .target([-120, 37]);
      assert.inDelta(arc().coordinates, [
        [   5,        52      ],
        [-120,        37      ]
      ], .5);
    },
    "geodesic": function(d3) {
      var arc = d3.geo.greatArc();
      assert.inDelta(arc({source: [5, 52], target: [-120, 37]}).coordinates, [
        [   5,        52      ],
        [-120,        37      ]
      ], .5);
    }
  }
});

suite.export(module);
