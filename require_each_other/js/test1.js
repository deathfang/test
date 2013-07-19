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
            var div = new Div;
            div.bind('append',function(){
                div.$el.append(this.text).appendTo(jQuery('body'));
            }.bind(this));
            div.bind('changeText',function(){
                this.changeButton()
            }.bind(this));
            div.render();
        },
        changeButton: function() {
            this.$('button').text('fuck');
            console.log('change!')
        }
    });

    module.exports = new Text;
})