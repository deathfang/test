define(function(require, exports, module) {
    var Text = Backbone.View.extend({
        el: '.test1',
        events: {
            'click .test3': 'addText'
        },
        initialize: function() {
            this.text = 'fuck';
        },
        addText: function(e) {
            new Div().$el.appendTo(jQuery('body'));
        },
        changeButton: function() {
            this.$('button').text('fuck')
            console.log('change!')
        }
    });
    var text = new Text;
    var Div = Backbone.View.extend({
        events: {
            'click': 'changeText'
        },
        initialize: function(options) {
            this.render()
        },
        render: function() {
            this.$el.append(text.text);
            return this;
        },
        changeText: function() {
            text.changeButton();
        }
    });
    module.exports = text;
})