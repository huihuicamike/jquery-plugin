/**
 * Created by camik on 2017/1/7.
 */
define(['jquery','scrollto'],function($,scrollto){
    function BackTop(el,opts){
        this.opts = $.extend({},BackTop.DEFAULTS,opts);
        this.$el = $(el);
        this.scroll = new scrollto.ScrollTo({
            dest:0,
            speed:this.opts.speed
        });

        if(this.opts.mode == 'move') {
            this.$el.on('click', $.proxy(this._move, this));
            //this.$el.on('click', function(){
            //    BackTop._move();
            //});
        }
        else{
            this.$el.on('click', $.proxy(this._go, this));
        }
    }
    BackTop.DEFAULTS = {
        mode:'move',
        pos:$(window).height()
    };

    BackTop.prototype._move = function(){
        this.scroll.move();
    };
    BackTop.prototype._go = function(){
        this.scroll.go();
    }

    //jquery²å¼þ
    $.fn.extend({
        backtop:function(opts){
            return this.each(function(){
                new BackTop(this,opts)
            })
        }
    })

    return{
        BackTop:BackTop
    }

})