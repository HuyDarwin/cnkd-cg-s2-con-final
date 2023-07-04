import { getDatabase, ref, set, update, onValue, remove } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();
		
		// Get data
		
		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();
			
			if (data.sound_intro == 1){
				con.PlaySound('',1);
				update(ref(db, 'commands'), { sound_intro : 0 });
			}
			if (data.sound_he == 1){
				con.PlaySound('',2);
				update(ref(db, 'commands'), { sound_he : 0 });
			}
			
			if (data.sound_1m == 1){
				con.PlaySound('',2);
				update(ref(db, 'commands'), { sound_1m : 0 });
			}
			if (data.sound_br == 1){
				con.PlaySound('',2);
				update(ref(db, 'commands'), { sound_br : 0 });
			}
			if (data.sound_ch == 1){
				con.PlaySound('',2);
				update(ref(db, 'commands'), { sound_ch : 0 });
			}
			if (data.sound_jack == 1){
				con.PlaySound('',2);
				update(ref(db, 'commands'), { sound_jack : 0 });
			}
			if (data.sound_dd == 1){
				con.PlaySound('',2);
				update(ref(db, 'commands'), { sound_dd : 0 });
			}
      
      onValue(ref(db, 'variables'), (snap) => {
        update(ref(db, 'commands'), { h: snap.val().round })
      })
            
			if (data.spin == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Wheel%20Spin%20Edit%202%20(With%20Spin%20SFX).mp3?v=1688483399926',1);
				update(ref(db, 'commands'), { spin : 0 });
			}
			if (data.puzzle_reveal == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Puzzle%20Reveal.wav?v=1688483404659',1);
				update(ref(db, 'commands'), { puzzle_reveal : 0 });
			}
			if (data.open_letter == 1){
        if(data.h == 'tossup_1' || data.h == 'tossup_2' || data.h == 'triple_tossup_1'){
          con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Triple%20Toss%20Up%20%231.mp3?v=1688483426714',1);
        }
        if(data.h == 'triple_tossup_2'){
          con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Triple%20Toss%20Up%20%232.mp3?v=1688483428181',4);
        }
        if(data.h == 'triple_tossup_3'){
          con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Triple%20Toss%20Up%20%233.mp3?v=1688483429345',4);
        }
				update(ref(db, 'commands'), { open_letter : 0 });
			}
		})
		
	}(window.CNKDCGV = window.CNKDCGV || {}));
});
