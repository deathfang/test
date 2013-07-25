define(function(require, exports, module) {

    // var Test2 = function(){
    //     this.init = function(){
    //         setTimeout(alert('ok'));
    //     }
    // }
    // module.exports = new Test2
    exports.init = function(){
        
        $('.test1 .test1').click(function(){
                setTimeout(alert('ok'));
            })
        }    
})        
        