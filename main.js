$(function(){

var $content = $('#content');
// Masonryを適用する
$content.masonry({
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
// InfinityScrollのコールバック関数（InfinityScrollが呼び出された後に実行される関数）を記述する
function( newElements ) {
	// 新しく読み込まれた要素にMasonryを適用する
	$content.masonry( 'appended', $(newElements), true );
});

/*
$('.post').each(function(){
	$(this).width(Math.round(Math.random()*300));
});*/

});
