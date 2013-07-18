define(function(require, exports, module) {
    var text = require('./test1');
    var Div = Backbone.View.extend({
        events: {
            'click': 'changeText'
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            this.$el.append(text.text);
            return this;
        },
        changeText: function() {
            text.changeButton()
        }
    });
    module.exports = Div;
})