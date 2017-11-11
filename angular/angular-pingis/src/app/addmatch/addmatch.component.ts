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
		    
		    this.backend.getAllUsers().subscribe(res => {
		    	this.users = res;
		    });
		    
		    console.log(this.players);
		  }
		

		submitMatch() {
			console.log("HERE");
		}

	

}
