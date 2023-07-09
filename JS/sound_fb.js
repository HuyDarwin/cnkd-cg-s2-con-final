import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();
		
		// Get data
		
    var h;
    onValue(ref(db, 'variables'), (snapshot) => {
      h = snapshot.val().round
    })
    
		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();
			
			if (data.sound_intro == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Intro.mp3?v=1688727097999',1);
				update(ref(db, 'commands'), { sound_intro : 0 });
			}
			if (data.sound_he == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Host%20Entrance.mp3?v=1688727171809',2);
				update(ref(db, 'commands'), { sound_he : 0 });
			}
			if (data.sound_theme == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Theme%201.mp3?v=1688743568648',2);
				update(ref(db, 'commands'), { sound_theme : 0 });
			}
			if (data.sound_bg_1 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%201.mp3?v=1688727410054',3);
				update(ref(db, 'commands'), { sound_bg_1 : 0 });
			}
			if (data.sound_bg_2 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%202.mp3?v=1688733523889',3);
				update(ref(db, 'commands'), { sound_bg_2 : 0 });
			}
			if (data.sound_bg_3 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%203.mp3?v=1688733606110',3);
				update(ref(db, 'commands'), { sound_bg_3 : 0 });
			}
			if (data.sound_bg_4 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%204.mp3?v=1688733641974',3);
				update(ref(db, 'commands'), { sound_bg_4 : 0 });
			}
			if (data.sound_bg_5 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%205.mp3?v=1688733668734',3);
				update(ref(db, 'commands'), { sound_bg_5 : 0 });
			}
			if (data.sound_bg_6 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%206.mp3?v=1688733716798',3);
				update(ref(db, 'commands'), { sound_bg_6 : 0 });
			}
			if (data.sound_bg_7 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%207.mp3?v=1688733738187',3);
				update(ref(db, 'commands'), { sound_bg_7 : 0 });
			}
			if (data.sound_bg_8 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%208.mp3?v=1688734174866',3);
				update(ref(db, 'commands'), { sound_bg_8 : 0 });
			}
			if (data.sound_bg_9 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%209.mp3?v=1688734198010',3);
				update(ref(db, 'commands'), { sound_bg_9 : 0 });
			}
			if (data.sound_bg_10 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%2010.mp3?v=1688734216734',3);
				update(ref(db, 'commands'), { sound_bg_10 : 0 });
			}
			if (data.sound_bg_11 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%2011.mp3?v=1688734232414',3);
				update(ref(db, 'commands'), { sound_bg_11 : 0 });
			}
			if (data.sound_bg_12 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%2012.mp3?v=1688734235968',3);
				update(ref(db, 'commands'), { sound_bg_12 : 0 });
			}
			if (data.sound_bg_13 == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Background%2013.wav?v=1688734248928',3);
				update(ref(db, 'commands'), { sound_bg_13 : 0 });
			}
      
			if (data.sound_wrong == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Letter%20Buzzer.wav?v=1688742910074',2);
				update(ref(db, 'commands'), { sound_wrong : 0 });
			}
			
			if (data.sound_1m == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/1%20Tri%E1%BB%87u%20CG.wav?v=1688741945417',2);
				update(ref(db, 'commands'), { sound_1m : 0 });
			}
			if (data.sound_br == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bankrupt.wav?v=1688741987558',2);
				update(ref(db, 'commands'), { sound_br : 0 });
			}
			if (data.sound_ch == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/C%C6%A1%20H%E1%BB%99i.wav?v=1688742025638',2);
				update(ref(db, 'commands'), { sound_ch : 0 });
			}
			if (data.sound_jack == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/%C4%90%E1%BB%99c%20%C4%90%E1%BA%AFc.wav?v=1688742086801',2);
				update(ref(db, 'commands'), { sound_jack : 0 });
			}
			if (data.sound_dd == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/%C4%90%E1%BB%95i%20%C4%90i%E1%BB%83m.wav?v=1688742120334',2);
				update(ref(db, 'commands'), { sound_dd : 0 });
			}
			if (data.sound_st == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Express%20SFX.mp3?v=1688742242581',2);
				update(ref(db, 'commands'), { sound_st : 0 });
			}
			if (data.sound_mm == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/May%20M%E1%BA%AFn.wav?v=1688742246533',2);
				update(ref(db, 'commands'), { sound_mm : 0 });
			}
			if (data.sound_mr == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/May%20R%E1%BB%A7i.wav?v=1688742247692',2);
				update(ref(db, 'commands'), { sound_mr : 0 });
			}
			if (data.sound_mys == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Mystery.mp3?v=1688742249817',2);
				update(ref(db, 'commands'), { sound_mys : 0 });
			}
			if (data.sound_tl == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Th%C3%AAm%20L%C6%B0%E1%BB%A3t.wav?v=1688742259238',2);
				update(ref(db, 'commands'), { sound_tl : 0 });
			}
			if (data.sound_ml == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Lose%20A%20Turn%20(_).wav?v=1688742497171',2);
				update(ref(db, 'commands'), { sound_ml : 0 });
			}
			if (data.sound_pt == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Ph%E1%BA%A7n%20Th%C6%B0%E1%BB%9Fng.wav?v=1688742609453',2);
				update(ref(db, 'commands'), { sound_pt : 0 });
			}
			if (data.sound_ex_bg == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Express%20Music.mp3?v=1688744104634',2);
				update(ref(db, 'commands'), { sound_ex_bg : 0 });
			}
      
			if (data.sound_br_spin == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Spin.mp3?v=1688743195156',1);
				update(ref(db, 'commands'), { sound_br_spin : 0 });
			}
			if (data.sound_br_trans == 1){
        con.StopAllSounds(1)
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Round%20Transition.mp3?v=1688743124414',3);
				update(ref(db, 'commands'), { sound_br_trans : 0 });
			}
			if (data.sound_br_rstlne == 1){
        con.StopAllSounds(3)
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Round%20_R%20S%20T%20L%20N%20E_%20Reveal.mp3?v=1688743528349',3);
				update(ref(db, 'commands'), { sound_br_rstlne : 0 });
			}
			if (data.sound_br_3c1v == 1){
        con.StopAllSounds(3)
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Round%20_3%20Consonants%20and%201%20Vowel_.mp3?v=1688743531678',3);
				update(ref(db, 'commands'), { sound_br_3c1v : 0 });
			}
			if (data.sound_br_10s == 1){
        con.StopAllSounds(3)
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/10%20Seconds.mp3?v=1688743590136',1);
				update(ref(db, 'commands'), { sound_br_10s : 0 });
			}
			if (data.sound_br_win == 1){
        con.StopAllSounds(1);
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Round%20Win.mp3?v=1688743540836',4);
				update(ref(db, 'commands'), { sound_br_win : 0 });
			}
			if (data.sound_br_1m_win == 1){
        con.StopAllSounds(1);
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Round%201%20Million%20Win.mp3?v=1688743561009',4);
				update(ref(db, 'commands'), { sound_br_1m_win : 0 });
			}
			if (data.sound_br_lose == 1){
        con.StopAllSounds(1);
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Round%20Lose.mp3?v=1688743563464',4);
				update(ref(db, 'commands'), { sound_br_lose : 0 });
			}
      
			if (data.sound_letter == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Letter%20_Ding_.mp3?v=1688522326911',2);
				update(ref(db, 'commands'), { sound_letter : 0 });
			}
      
			if (data.spin == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Wheel%20Spin%20Edit%202%20(With%20Spin%20SFX).mp3?v=1688483399926',1);
				update(ref(db, 'commands'), { spin : 0 });
			}
			if (data.puzzle_reveal == 1){
        if(h != 'bonus_round'){
          con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Puzzle%20Reveal.wav?v=1688483404659',1);
        }
				update(ref(db, 'commands'), { puzzle_reveal : 0 });
			}
			if (data.open_letter == 1){        
        if(h == 'tossup_1' || h == 'tossup_2' || h == 'triple_tossup_1'){
          con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Triple%20Toss%20Up%20%231.mp3?v=1688483426714',4);
        }
        else if(h == 'triple_tossup_2'){
          con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Triple%20Toss%20Up%20%232.mp3?v=1688483428181',4);
        }
        else if(h == 'triple_tossup_3'){
          con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Triple%20Toss%20Up%20%233.mp3?v=1688483429345',4);
        }
				update(ref(db, 'commands'), { open_letter : 0 });
			}
			if (data.tossup_buzzer == 1){
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Letter%20_Ding_.mp3?v=1688522326911',2);
				update(ref(db, 'commands'), { tossup_buzzer : 0 });
			}
			if (data.puzzle_solve == 1){
        if(h == 'tossup_1' || h =='tossup_2' || h =='triple_tossup_3'){
          con.StopAllSounds(4);
          con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Toss%20Up%20Solve.mp3?v=1688483438200',1);
        }
        else if(h == 'triple_tossup_1' || h =='triple_tossup_2'){
          con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Triple%20Toss%20Up%20Solve.mp3?v=1688483431947',1);
          setTimeout(function(){
            con.StopAllSounds(4);
          }, 250)
        }
        else if(h == 'bonus_round'){
          con.StopAllSounds(1);
          con.StopAllSounds(4);
          con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Round%20Solved.mp3?v=1688733444698',1);
        }
        else{
          con.StopAllSounds(4);
          con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Puzzle%20Solve.mp3?v=1688483410468',1);
        }
				update(ref(db, 'commands'), { puzzle_solve : 0 });
			}

			if (data.sound_stop == 1){
        con.StopAllSounds();
				update(ref(db, 'commands'), { sound_stop : 0 });
			}
		})
		
	}(window.CNKDCGV = window.CNKDCGV || {}));
});
