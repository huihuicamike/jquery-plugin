/**
 * Created by Jason on 2017/1/6.
 */
define(['jquery'],function($){
    function ScrollTo(obj){
        this.obj = $.extend({},ScrollTo.DEFAULTS,obj);
        this.$ele = $('html,body');
    }

    ScrollTo.prototype.move = function() {
        var obj = this.obj,
            dest = obj.dest;
        console.log(this);
        if(!this.$ele.is(':animated')) {
            if ($(window).scrollTop() != dest) {
                this.$ele.animate({
                    scrollTop: dest
                }, obj.speed);
            }
        }
    };
    ScrollTo.prototype.go = function(){
        var dest = this.obj.dest;
        if($(window).scrollTop() != dest) {
            this.$ele.scrollTop(dest)
        }
    };
    ScrollTo.DEFAULTS = {
        dest: 0,
        speed: 800,
    };

    return{
        ScrollTo:ScrollTo
    }
})