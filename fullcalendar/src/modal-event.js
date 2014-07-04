(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modal-event'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "\r\n    <div>\r\n        <h3><a href=\"\">"
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></h3>\r\n        <div class=\"modal-body\">\r\n            <p><span>时间：</span>"
    + escapeExpression(((stack1 = (depth0 && depth0.time)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n            <p><span>地点：</span>"
    + escapeExpression(((stack1 = (depth0 && depth0.place)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.mapurl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">(地图)</a></p>\r\n        </div>\r\n        <a class=\"btn btn-lg btn-like\" href=\"\"><span class=\"icon-like-lg\"></span>"
    + escapeExpression(((stack1 = (depth0 && depth0.favorites)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "人喜欢</a><a class=\"btn btn-primary btn-lg\" href=\"\">我要报名</a>\r\n    </div>\r\n    ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "<div class=\"modal-event\" id=\"modal-event-"
    + escapeExpression(((helper = helpers.date || (depth0 && depth0.date)),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "\">\r\n    <a class=\"slidesjs-previous slidesjs-navigation\" href=\"\">\r\n        <span class=\"modal-arrow-btn\"></span>\r\n    </a>\r\n    <a class=\"slidesjs-next slidesjs-navigation\" href=\""
    + escapeExpression(((helper = helpers.eventAllUrl || (depth0 && depth0.eventAllUrl)),(typeof helper === functionType ? helper.call(depth0, {"name":"eventAllUrl","hash":{},"data":data}) : helper)))
    + "\">\r\n        <span class=\"modal-arrow-btn\"></span>\r\n    </a>\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\r\n</div>";
},"useData":true});
})();