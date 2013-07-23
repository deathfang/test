define(function(require, exports, module) {
    var test2 = require.async('js/test2')
    function Test(){
        this.init = function(){
            $('.test1 .test1').click(function(){
                test2.init()
            })
        }
    }
    module.exports = new Test
})