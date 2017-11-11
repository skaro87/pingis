import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Response } from '@angular/http';

import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StandingsComponent implements OnInit {

  standings: MatTableDataSource;
  displayedColumns = ['rank', 'name', 'rating'];

	
  constructor(private backend: BackendService) {
  }

  ngOnInit() {
	  this.backend.getStandings().subscribe ((res:Response) => {
		  this.standings = new MatTableDataSource(res);
	  });
  }

}
