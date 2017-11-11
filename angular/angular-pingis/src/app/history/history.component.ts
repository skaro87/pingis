import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent implements OnInit {

	history;
	
	 constructor(private backend: BackendService) {
	  }

  ngOnInit() {
	  this.backend.getHistory().subscribe ((res:Response) => {
		  this.history = res;
	  });
  }

}
