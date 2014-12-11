$(function(){

var msnry = new Masonry('#content',{
	columnWidth: 10,
	itemSelector: '.post'
});

$('#content').infinitescroll({
    navSelector  : "div.navigation",
        // ナビゲーション要素を指定します。
    nextSelector : "div.navigation a",
        // ナビゲーションの「次へ」の要素を指定します。
    itemSelector : "#content div.post-group"
        // コンテンツ要素を指定します。
},
function( newElements ) {
   var $newElems = $( newElements );
   $('#content').masonry( 'appended', $newElems, true );
});

});
