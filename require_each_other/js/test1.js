define(function(require, exports, module) {
    var Text = Backbone.View.extend({
        el: '.test1',
        events: {
            'click button': 'addText'
        },
        initialize: function() {
            this.text = 'fuck'
        },
        addText: function() {
            var Div = require('./test2');
            new Div().$el.appendTo(jQuery('body'));
        },
        changeButton: function() {
            this.$('button').text('fuck');
            console.log('change!')
        }
    });

    module.exports = new Text;
})