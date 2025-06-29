import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();
		
		// Reset variables and commands
		
		update(ref(db, 'variables'), {
			
		})
		
		update(ref(db, 'commands'), {
			
		})
		
		// Get data
		
    
    var a;
    var b;
    var c;
    
		onValue(ref(db, 'variables'), (snapshot) => {
			const data = snapshot.val();
      a = data.spinning_rotating_degree,
      b =	data.spinning_random_degree,
      c = data.spinning_miliseconds
		})
		
		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();
			
			if (data.reload == 1){
				location.reload(true);
				update(ref(db, 'commands'), { reload : 0 });
			}
			
			/*if(data.cw_r1 == 1){
				$('.wheel').css('background-image', 'url("Assets/nón%20mới%20cg%201.png")');
				update(ref(db, 'commands'), { cw_r1 : 0 })
			}
			if(data.cw_r2 == 1){
				$('.wheel').css('background-image', 'url("Assets/nón%20mới%20cg%202.png")');
				update(ref(db, 'commands'), { cw_r2 : 0 })
			}
			if(data.cw_r3 == 1){
				$('.wheel').css('background-image', 'url("Assets/nón%20mới%20cg%203.png")');
				update(ref(db, 'commands'), { cw_r3 : 0 })
			}
			if(data.cw_r4 == 1){
				$('.wheel').css('background-image', 'url("Assets/nón%20mới%20cg%204.png")');
				update(ref(db, 'commands'), { cw_r4 : 0 })
			}*/
			if(data.cw_r1 == 1){
				$('.wheel').css('background-image', 'url("Assets/nón%20tứ%20kết%20v1.png")');
				update(ref(db, 'commands'), { cw_r1 : 0 })
			}
			if(data.cw_r2 == 1){
				$('.wheel').css('background-image', 'url("Assets/nón%20tứ%20kết%20v12.png")');
				update(ref(db, 'commands'), { cw_r2 : 0 })
			}
			if(data.cw_r3 == 1){
				$('.wheel').css('background-image', 'url("Assets/nón%20tứ%20kết%20v3.png")');
				update(ref(db, 'commands'), { cw_r3 : 0 })
			}
			if(data.cw_r4 == 1){
				$('.wheel').css('background-image', 'url("Assets/nón%20tứ%20kết%20v4.png")');
				update(ref(db, 'commands'), { cw_r4 : 0 })
			}
			if(data.spin == 1){
				var spinning_final_rotating_degree = (a + b) % 360;
				$('.wheel').rotate(a + b, c, a, function(){
					$('.wheel').rotate(spinning_final_rotating_degree, 0, spinning_final_rotating_degree);
					update(ref(db, 'variables'), { spinning_rotating_degree : spinning_final_rotating_degree })
				});
				update(ref(db, 'commands'), { spin : 0 })
			}
      /*
			if(data.awt_1m == 1){
				$('#wwt_1m').css('opacity', 1);
			}
			if(data.awt_ex == 1){
				$('#wwt_ex').css('opacity', 1);
			}
			if(data.awt_jack == 1){
				$('#wwt_jack').css('opacity', 1);
			}
			if(data.awt_may == 1){
				$('#wwt_may').css('opacity', 1);
			}
			if(data.awt_mys == 1){
				$('#wwt_mys_1, #wwt_mys_2').css('opacity', 1);
			}
			if(data.awt_gift == 1){
				$('#wwt_gift').css('opacity', 1);
			}
			if(data.awt_rui == 1){
				$('#wwt_rui').css('opacity', 1);
			}
			if(data.awt_switch == 1){
				$('#wwt_switch').css('opacity', 1);
			}
			if(data.awt_them == 1){
				$('#wwt_them').css('opacity', 1);
			}
			if(data.awt_wild == 1){
				$('#wwt_wild').css('opacity', 1);
			}
      */
      
      $('#wwt_1m').css('opacity', data.awt_1m);
      $('#wwt_ex').css('opacity', data.awt_ex);
      $('#wwt_jack').css('opacity', data.awt_jack);
      $('#wwt_may').css('opacity', data.awt_may);
      $('#wwt_mys_1, #wwt_mys_2').css('opacity', data.awt_mys);
      $('#wwt_gift').css('opacity', data.awt_gift);
      $('#wwt_rui').css('opacity', data.awt_rui);
      $('#wwt_switch').css('opacity', data.awt_switch);
      $('#wwt_them').css('opacity', data.awt_them);
      $('#wwt_wild').css('opacity', data.awt_wild);
      $('#wwt_half_1').css('opacity', data.awt_half_1);
      $('#wwt_half_2').css('opacity', data.awt_half_2);
      
			if(data.reset_wedges_tags == 1){
				$('.wheel_wedges_tags').css('opacity', 0);
				update(ref(db, 'commands'), {
					awt_1m : 0,
					awt_ex : 0,
					awt_jack : 0,
					awt_may : 0,
					awt_mys : 0,
					awt_gift : 0,
					awt_rui : 0,
					awt_switch : 0,
					awt_them : 0,
					awt_wild : 0,
					reset_wedges_tags : 0
				})
			}
		})
		
		// Action
		
		$('#wwt_1m').css('transform','rotate(75deg)');
		$('#wwt_ex').css('transform','rotate(45deg)');
		$('#wwt_jack').css('transform','rotate(45deg)');
		$('#wwt_may').css('transform','rotate(105deg)');
		$('#wwt_mys_1').css('transform','rotate(135deg)');
		$('#wwt_mys_2').css('transform','rotate(315deg)');
		$('#wwt_gift').css('transform','rotate(285deg)');
		$('#wwt_rui').css('transform','rotate(15deg)');
		$('#wwt_switch').css('transform','rotate(240deg)');
		$('#wwt_them').css('transform','rotate(225deg)');
		$('#wwt_wild').css('transform','rotate(180deg)');
		$('#wwt_half_1').css('transform','rotate(150deg)');
		$('#wwt_half_2').css('transform','rotate(330deg)');
		
	}(window.CNKDCGV = window.CNKDCGV || {}));
});