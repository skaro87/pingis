import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendService } from '../services/backend.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addmatch',
  templateUrl: './addmatch.component.html',
  styleUrls: ['./addmatch.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddmatchComponent implements OnInit {

		  players: FormGroup;
		  score: FormGroup;
		  users;
		  
		  player1;
		  player2;

		  constructor(private backend: BackendService, private _formBuilder: FormBuilder) { }

		  ngOnInit() {
		    this.buildForms();
		    this.backend.getAllUsers().subscribe(res => {
		    	this.users = res;
		    });
		  }
		  
	buildForms(){
		this.players = this._formBuilder.group({
		      user1: [null, Validators.required],
		      user2: [null, Validators.required]
		    });
		    this.score = this._formBuilder.group({
		      set: [null, Validators.required],
		      score1player1: ['', Validators.required],
		      score1player2: ['', Validators.required],
		      score2player1: [''],
		      score2player2: [''],
		      score3player1: [''],
		      score3player2: ['']
		    });
	}
		

		submitMatch(stepper) {
			let match = new MatchForm();
			match.player1 = this.players.value.user1.id;
			match.player2 = this.players.value.user2.id;
			match.sets.push(this.generateSet(this.players.value.user1.name,this.score.value.score1player1,this.players.value.user2.name, this.score.value.score1player2));
			
			if (this.score.value.set == 3) {
				match.sets.push(this.generateSet(this.players.value.user1.name,this.score.value.score2player1,this.players.value.user2.name, this.score.value.score2player2));
				
				if (this.score.value.score3player1 && this.score.value.score3player2){
					match.sets.push(this.generateSet(this.players.value.user1.name,this.score.value.score3player1,this.players.value.user2.name, this.score.value.score3player2));
				}
			}
			
			console.log(match);
			this.backend.submitMatch(match).subscribe(res => {
				console.log(res);
				stepper.selectedIndex = 0;
				this.players.reset();
				this.score.reset();
			})
		}
		
		generateSet(player1name, player1score, player2name, player2score) {
			console.log(player1name);
			
			return {[player1name] : player1score, [player2name] : player2score};
		}


}

class MatchForm {
	player1: string;
	player2: string;
	sets = [];
}