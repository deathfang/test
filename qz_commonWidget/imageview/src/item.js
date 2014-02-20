define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['item'] = template({"1":function(depth0,helpers,partials,data) {
  return "\n		<li class=\"pv-img\">\n\n		</li>\n	";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "<ul class=\"pv-inner\" style=\"line-height:"
    + escapeExpression(((helper = helpers.height || (depth0 && depth0.height)),(typeof helper === functionType ? helper.call(depth0, {"name":"height","hash":{},"data":data}) : helper)))
    + "px;\">\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.photos), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</ul>\n<span class=\"ui-loading white\" id=\"J_loading\"><i class=\"t1\"></i><i class=\"t2\"></i><i class=\"t3\"></i></span>\n<p class=\"counts\"><span class=\"value\" id=\"J_index\">"
    + escapeExpression(((helper = helpers.index || (depth0 && depth0.index)),(typeof helper === functionType ? helper.call(depth0, {"name":"index","hash":{},"data":data}) : helper)))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.photos)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></p>\n\n";
},"useData":true});
});