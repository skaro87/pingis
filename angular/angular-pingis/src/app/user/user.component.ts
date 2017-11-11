import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  @Input() user: any;
	
  constructor(private route: ActivatedRoute, public backend: BackendService) { }

  ngOnInit() {
	  this.getUser();
  }
  
  getUser(): void {
	  console.log(JSON.stringify(this.route.snapshot.paramMap));
	  let name = this.route.snapshot.paramMap.get('name');
	  this.backend.getUser(name).subscribe(user => this.user = user);
  }

}
