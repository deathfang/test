define(function(require, exports, module) {

    var Div = Backbone.View.extend({
        events: {
            'click': 'changeText'
        },
        initialize: function(text) {
            // this.render()
        },
        render: function() {
            this.trigger('append');
            
            return this;
        },
        changeText: function() {
            // this.text.changeButton()
            this.trigger('changeText')
        }
    });
    module.exports = Div;
})