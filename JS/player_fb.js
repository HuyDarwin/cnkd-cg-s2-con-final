import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();
		
		// Get data
		
		onValue(ref(db, 'variables'), (snapshot) => {
			const data = snapshot.val();
			
			if(data.buzzer_number != 0 && data.buzzer_number != undefined){
				$('.who_buzzers').html(data.buzzer_number + '. ' + eval('data.contestant_' + data.buzzer_number + '_name'));
			}
			else{
				$('.who_buzzers').html('');
			}
			
			if(data.buzzer_toggle == 0 || data.buzzer_toggle == undefined){
				$('.buzzer').attr('disabled', true);
			}
			if(data.buzzer_toggle == 1){
				$('.buzzer').removeAttr('disabled');
			}
		})
		
		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();
			
			if (data.reload == 1){
				location.reload(true);
				update(ref(db, 'commands'), { reload : 0 });
			}
			
		})
		
		// Button Function
		
		$('.buzzer').click(function(){
			update(ref(db, 'variables'), {
				buzzer_status: 1,
				buzzer_number: number_of_player
			})
		})
		
		// Action
		
		$('.who_buzzers').attr('disabled', true);
		
	}(window.CNKDCGV = window.CNKDCGV || {}));
});