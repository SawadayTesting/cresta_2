//スティッキーヘッダー
$(function(){
	var $win = $(window),
		$fv = $('.bl_MV'),
		$header = $('.ly_header'),
		fvHeight = $fv.outerHeight();
		fixedClass = 'is_fixed';
	
	$win.on('load scroll', function(){
		var value = $(this).scrollTop();
		if($win.width() > 768){
			//valueがスクロールした量
			if(value > fvHeight) {
				$header.addClass(fixedClass);
			} else {
				$header.removeClass(fixedClass);
			}
		}
	});
});
