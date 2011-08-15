require("../env");
require("../../d3");
require("../../d3.time");

var vows = require("vows"),
    assert = require("assert");

var suite = vows.describe("d3.time.hours");

suite.addBatch({
  "hours": {
    topic: function() {
      return d3.time.hours;
    },
    "returns hours": function(range) {
      assert.deepEqual(range(local(2010, 11, 31, 12, 30), local(2010, 11, 31, 15, 30)), [
        local(2010, 11, 31, 13),
        local(2010, 11, 31, 14),
        local(2010, 11, 31, 15)
      ]);
    },
    "has an inclusive lower bound": function(range) {
      assert.deepEqual(range(local(2010, 11, 31, 23), local(2011, 0, 1, 2))[0], local(2010, 11, 31, 23));
    },
    "has an exclusive upper bound": function(range) {
      assert.deepEqual(range(local(2010, 11, 31, 23), local(2011, 0, 1, 2))[2], local(2011, 0, 1, 1));
    },
    "observes start of daylight savings time": function(range) {
      assert.deepEqual(range(local(2011, 2, 13, 1), local(2011, 2, 13, 5)), [
        utc(2011, 2, 13, 9),
        utc(2011, 2, 13, 10),
        utc(2011, 2, 13, 11)
      ]);
    },
    "observes end of daylight savings time": function(range) {
      assert.deepEqual(range(local(2011, 10, 6, 0), local(2011, 10, 6, 2)), [
        utc(2011, 10, 6, 7),
        utc(2011, 10, 6, 8),
        utc(2011, 10, 6, 9)
      ]);
    },
    "utc": {
      topic: function(range) {
        return range.utc;
      },
      "returns hours": function(range) {
        assert.deepEqual(range(utc(2010, 11, 31, 12, 30), utc(2010, 11, 31, 15, 30)), [
          utc(2010, 11, 31, 13),
          utc(2010, 11, 31, 14),
          utc(2010, 11, 31, 15)
        ]);
      },
      "has an inclusive lower bound": function(range) {
        assert.deepEqual(range(utc(2010, 11, 31, 23), utc(2011, 0, 1, 2))[0], utc(2010, 11, 31, 23));
      },
      "has an exclusive upper bound": function(range) {
        assert.deepEqual(range(utc(2010, 11, 31, 23), utc(2011, 0, 1, 2))[2], utc(2011, 0, 1, 1));
      },
      "observes start of daylight savings time": function(range) {
        assert.deepEqual(range(utc(2011, 2, 13, 9), utc(2011, 2, 13, 12)), [
          utc(2011, 2, 13, 9),
          utc(2011, 2, 13, 10),
          utc(2011, 2, 13, 11)
        ]);
      },
      "observes end of daylight savings time": function(range) {
        assert.deepEqual(range(utc(2011, 10, 6, 7), utc(2011, 10, 6, 10)), [
          utc(2011, 10, 6, 7),
          utc(2011, 10, 6, 8),
          utc(2011, 10, 6, 9)
        ]);
      }
    }
  }
});

function local(year, month, day, hours, minutes, seconds) {
  return new Date(year, month, day, hours || 0, minutes || 0, seconds || 0);
}

function utc(year, month, day, hours, minutes, seconds) {
  return new Date(Date.UTC(year, month, day, hours || 0, minutes || 0, seconds || 0));
}

suite.export(module);
