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
		
		onValue(ref(db, 'variables'), (snapshot) => {
			const data = snapshot.val();
			
		})
		
		onValue(ref(db, 'variables/letters/status'), (snapshot) => {
			const data = snapshot.val();
			for(var i = 1; i <= 64; i++){
				if(i == 1 || i == 16 || i == 49 || i == 64){
					continue;
				}
				else{
					if(eval('data.letter_' + i) != undefined && eval('data.letter_' + i) != null){
						if(eval('data.letter_' + i) == 0){
							$('#letter_' + i).css('background-image', 'url("Images/green_letter.png")');
						}
						if(eval('data.letter_' + i) == 1 || eval('data.letter_' + i) == 3 || eval('data.letter_' + i) == 4){
							$('#letter_' + i).css('background-image', 'url("Images/white_letter.png")');
						}
						if(eval('data.letter_' + i) == 2){
							$('#letter_' + i).css('background-image', 'url("Images/blue_letter.png")');
						}
						
						if(eval('data.letter_' + i) == 3){
							onValue(ref(db, 'variables/letters/no_tonemark'), (snapshot) => {
								$('#letter_' + i + ' div').html(eval('snapshot.val().letter_' + i));
							})
						}
						else if(eval('data.letter_' + i) == 4){
							onValue(ref(db, 'variables/letters/having_tonemark'), (snapshot) => {
								$('#letter_' + i + ' div').html(eval('snapshot.val().letter_' + i));
							})
						}
						else{
							$('#letter_' + i + ' div').html('');
						}
					}
				}
			}
		})
		
		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();
			
			if (data.reload == 1){
				location.reload(true);
				update(ref(db, 'commands'), { reload : 0 });
			}
			
			if(data.reset_puzzleboard == 1){
				update(ref(db, 'commands'), { reset_puzzleboard : 0 })
			}
			if(data.reset_puzzleboard_data == 1){
				update(ref(db, 'commands'), { reset_puzzleboard_data : 0 })
			}
			if(data.puzzle_reveal == 1){
				update(ref(db, 'commands'), { puzzle_reveal : 0 })
			}
			if(data.reveal_backdrop == 1){
				$('.backdrop').css('opacity', 1);
				update(ref(db, 'commands'), { reveal_backdrop : 0 })
			}
			if(data.hide_backdrop == 1){
				$('.backdrop').css('opacity', 0);
				update(ref(db, 'commands'), { hide_backdrop : 0 })
			}
		})
		
		// Action
		
		var string = "";
		for(var j = 0; j <= 3; j++){
			string += "<tr>";
			for(var i = 1; i <= 16; i++){
				string += "<td class='letter' id='letter_" + (i + (15 * j) + j) + "'><div></div></td>"
			}
			string += "</tr>";
		}
		$('.puzzleboard').html(string);
		
	}(window.CNKDCGV = window.CNKDCGV || {}));
});