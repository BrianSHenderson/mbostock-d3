# See the README for installation instructions.

JS_COMPILER = ./node_modules/uglify-js/bin/uglifyjs
JS_TESTER = ./node_modules/vows/bin/vows

all: \
	d3.js \
	d3.min.js \
	d3.behavior.js \
	d3.behavior.min.js \
	d3.chart.js \
	d3.chart.min.js \
	d3.layout.js \
	d3.layout.min.js \
	d3.csv.js \
	d3.csv.min.js \
	d3.geo.js \
	d3.geo.min.js \
	d3.geom.js \
	d3.geom.min.js \
	d3.time.js \
	d3.time.min.js

.INTERMEDIATE d3.js: \
	src/start.js \
	d3.core.js \
	d3.scale.js \
	d3.svg.js \
	src/end.js

d3.core.js: \
	src/core/core.js \
	src/core/date.js \
	src/core/object.js \
	src/core/array.js \
	src/core/functor.js \
	src/core/rebind.js \
	src/core/ascending.js \
	src/core/descending.js \
	src/core/mean.js \
	src/core/min.js \
	src/core/max.js \
	src/core/sum.js \
	src/core/quantile.js \
	src/core/zip.js \
	src/core/bisect.js \
	src/core/first.js \
	src/core/last.js \
	src/core/nest.js \
	src/core/keys.js \
	src/core/values.js \
	src/core/entries.js \
	src/core/permute.js \
	src/core/merge.js \
	src/core/split.js \
	src/core/collapse.js \
	src/core/call.js \
	src/core/range.js \
	src/core/requote.js \
	src/core/round.js \
	src/core/xhr.js \
	src/core/text.js \
	src/core/json.js \
	src/core/html.js \
	src/core/xml.js \
	src/core/ns.js \
	src/core/dispatch.js \
	src/core/format.js \
	src/core/ease.js \
	src/core/event.js \
	src/core/interpolate.js \
	src/core/uninterpolate.js \
	src/core/rgb.js \
	src/core/hsl.js \
	src/core/selection.js \
	src/core/transition.js \
	src/core/timer.js \
	src/core/noop.js

d3.scale.js: \
	src/scale/scale.js \
	src/scale/nice.js \
	src/scale/linear.js \
	src/scale/bilinear.js \
	src/scale/polylinear.js \
	src/scale/log.js \
	src/scale/pow.js \
	src/scale/sqrt.js \
	src/scale/ordinal.js \
	src/scale/category.js \
	src/scale/quantile.js \
	src/scale/quantize.js

d3.svg.js: \
	src/svg/svg.js \
	src/svg/arc.js \
	src/svg/line.js \
	src/svg/line-radial.js \
	src/svg/area.js \
	src/svg/area-radial.js \
	src/svg/chord.js \
	src/svg/diagonal.js \
	src/svg/diagonal-radial.js \
	src/svg/mouse.js \
	src/svg/touches.js \
	src/svg/symbol.js

d3.behavior.js: \
	src/start.js \
	src/behavior/behavior.js \
	src/behavior/zoom.js \
	src/end.js

d3.chart.js: \
	src/start.js \
	src/chart/chart.js \
	src/chart/box.js \
	src/chart/bullet.js \
	src/chart/horizon.js \
	src/chart/qq.js \
	src/end.js

d3.layout.js: \
	src/start.js \
	src/layout/layout.js \
	src/layout/bundle.js \
	src/layout/chord.js \
	src/layout/force.js \
	src/layout/partition.js \
	src/layout/pie.js \
	src/layout/stack.js \
	src/layout/histogram.js \
	src/layout/hierarchy.js \
	src/layout/pack.js \
	src/layout/cluster.js \
	src/layout/tree.js \
	src/layout/treemap.js \
	src/end.js

d3.geo.js: \
	src/start.js \
	src/geo/geo.js \
	src/geo/azimuthal.js \
	src/geo/albers.js \
	src/geo/mercator.js \
	src/geo/path.js \
	src/geo/bounds.js \
	src/end.js

d3.csv.js: \
	src/start.js \
	src/csv/csv.js \
	src/csv/parse.js \
	src/csv/format.js \
	src/end.js

d3.time.js: \
	src/start.js \
	src/time/time.js \
	src/time/format.js \
	src/time/format-utc.js \
	src/time/format-iso.js \
	src/time/range.js \
	src/time/second.js \
	src/time/seconds.js \
	src/time/minute.js \
	src/time/minutes.js \
	src/time/hour.js \
	src/time/hours.js \
	src/time/day.js \
	src/time/days.js \
	src/time/week.js \
	src/time/weeks.js \
	src/time/month.js \
	src/time/months.js \
	src/time/year.js \
	src/time/years.js \
	src/time/scale.js \
	src/time/scale-utc.js \
	src/end.js

d3.geom.js: \
	src/start.js \
	src/geom/geom.js \
	src/geom/contour.js \
	src/geom/hull.js \
	src/geom/polygon.js \
	src/geom/voronoi.js \
	src/geom/delaunay.js \
	src/geom/quadtree.js \
	src/end.js

test: all
	@$(JS_TESTER)

%.min.js: %.js Makefile
	@rm -f $@
	$(JS_COMPILER) < $< > $@

d3.js d3%.js: Makefile
	@rm -f $@
	cat $(filter %.js,$^) > $@
	@chmod a-w $@

clean:
	rm -f d3*.js
