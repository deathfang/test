(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['fc-event'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "<a href=\""
    + escapeExpression(((helper = helpers.url || (depth0 && depth0.url)),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + escapeExpression(((helper = helpers.className || (depth0 && depth0.className)),(typeof helper === functionType ? helper.call(depth0, {"name":"className","hash":{},"data":data}) : helper)))
    + "\" data-title=\""
    + escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\" date-time=\""
    + escapeExpression(((helper = helpers.time || (depth0 && depth0.time)),(typeof helper === functionType ? helper.call(depth0, {"name":"time","hash":{},"data":data}) : helper)))
    + "\" data-place=\""
    + escapeExpression(((helper = helpers.place || (depth0 && depth0.place)),(typeof helper === functionType ? helper.call(depth0, {"name":"place","hash":{},"data":data}) : helper)))
    + "\" data-map-url=\""
    + escapeExpression(((helper = helpers['map-url'] || (depth0 && depth0['map-url'])),(typeof helper === functionType ? helper.call(depth0, {"name":"map-url","hash":{},"data":data}) : helper)))
    + "\" style=\"position: absolute;left:"
    + escapeExpression(((helper = helpers.left || (depth0 && depth0.left)),(typeof helper === functionType ? helper.call(depth0, {"name":"left","hash":{},"data":data}) : helper)))
    + "px\">"
    + escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</a>";
},"useData":true});
})();