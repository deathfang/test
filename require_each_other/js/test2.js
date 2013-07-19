define(function(require, exports, module) {

    var Div = Backbone.View.extend({
        events: {
            'click': 'changeText'
        },
        initialize: function(text) {
           this.text = text
            this.render()
        },
        render: function() {
            this.$el.append(this.text.text);
            return this;
        },
        changeText: function() {
            this.text.changeButton()
        }
    });
    module.exports = Div;
})