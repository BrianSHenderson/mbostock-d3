d3_transitionPrototype.select = function(selector) {
  var id = this.id,
      subgroups = [],
      subgroup,
      subnode,
      node,
      transition,
      subtransition;

  if (typeof selector !== "function") selector = d3_selection_selector(selector);

  for (var j = -1, m = this.length; ++j < m;) {
    subgroups.push(subgroup = []);
    for (var group = this[j], i = -1, n = group.length; ++i < n;) {
      if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        transition = node.__transition__[id];
        if (subtransition = d3_transitionNode(subnode, i, id)) {
          subtransition.time = transition.time; // TODO inherit automatically?
          subtransition.ease = transition.ease;
          subtransition.delay = transition.delay;
          subtransition.duration = transition.duration;
        }
        subgroup.push(subnode);
      } else {
        subgroup.push(null);
      }
    }
  }

  return d3_transition(subgroups, id);
};
