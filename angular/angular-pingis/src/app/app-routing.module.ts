import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddmatchComponent } from './addmatch/addmatch.component';
import { HistoryComponent } from './history/history.component';
import { StandingsComponent } from './standings/standings.component';
import { RulesComponent } from './rules/rules.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
	  { path: 'addmatch', component: AddmatchComponent },
	  { path: 'history', component: HistoryComponent },
	  { path: 'rules', component: RulesComponent },
	  { path: 'standings', component: StandingsComponent },
	  { path: 'user/:name', component: UserComponent }
	];
	 
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
	})


export class AppRoutingModule { }
