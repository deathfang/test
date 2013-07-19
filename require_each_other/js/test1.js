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
            // new Div(this).$el.appendTo(jQuery('body'));
            new Div(this).addOne();
        },
        changeButton: function() {
            this.$('button').text('fuck');
            console.log('change!')
        }
    });

    module.exports = new Text;
})