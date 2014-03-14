(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['fc-event'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "\r\n        <div class=\"fc-event\" >\r\n            <a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-title=\""
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" date-time=\""
    + escapeExpression(((stack1 = (depth0 && depth0.time)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-place=\""
    + escapeExpression(((stack1 = (depth0 && depth0.place)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-map-url=\""
    + escapeExpression(((stack1 = (depth0 && depth0['map-url'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-eq=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-favorites=\""
    + escapeExpression(((stack1 = (depth0 && depth0.favorites)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n        </div>\r\n    ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "<div>\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\r\n    <a href=\""
    + escapeExpression(((helper = helpers.start || (depth0 && depth0.start)),(typeof helper === functionType ? helper.call(depth0, {"name":"start","hash":{},"data":data}) : helper)))
    + "\" class=\"fc-event-counts\">共"
    + escapeExpression(((helper = helpers.size || (depth0 && depth0.size)),(typeof helper === functionType ? helper.call(depth0, {"name":"size","hash":{},"data":data}) : helper)))
    + "个活动<span class=\"icon-view\"></span></a>\r\n</div>";
},"useData":true});
})();