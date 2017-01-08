/**
 * Created by Jason on 2017/1/6.
 */
requirejs.config({
    paths:{
        jquery: 'jquery-1.8.2.min'
    }
})

requirejs(['jquery','backtop'],function($,backtop){
    //new backtop.BackTop($('#return'),{
    //    mode:'move',
    //    speed:2000
    //});

    $('#return').backtop({
        mode:'go'
    })

    //$('#return').on('click',function(){
    //    scroll.move();
    //})

    //$('#return').on('click', $.proxy(scroll.move,scroll))
})

