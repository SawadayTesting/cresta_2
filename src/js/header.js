//headerの動き　　後でなんとかする
// js_headerというidの要素を取得
var element = document.getElementById('js_header');
if (value > fvHeight) {
element.classList.remove('fv_hidden'); // クラス名の削除
} else {
	element.classList.add('fv_hidden'); // クラス名の追加
}
element.classList.toggle('should-be-toggled'); // クラス名がなければ追加、あれば削除
 
// 要素.classList.contains('クラス名')で、クラス名が存在するかどうかを確認できます。
console.log(element.classList.contains('should-be-added'));  // => 追加したので、true
console.log(element.classList.contains('should-be-removed'));  // => 削除したので、false


$(function () {
	var $win = $(window),
		$fv = $('.bl_MV'),
		$header = $('.js_header')
		fvHeight = $fv.outerHeight(),
		fixedClass = 'fixed';

	$win.on('load scroll', function () {
		var value = $(this).scrollTop();
		if ($win.width() > 768)

			if (value > fvHeight) {
				$header.addClass(fixedClass);

			} else {
				$header.removeClass(fixedClass);

			}
	});
});