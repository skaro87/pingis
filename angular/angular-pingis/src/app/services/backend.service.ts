import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }
  
  getUser(name: string): Observable<any> {
	  return this.http.get('/api/user/'+name);
  }
  
  getAllUsers(): Observable<any> {
	  return this.http.get('/api/user/all');
  }
  
  getStandings(): Observable<any> {
	  return this.http.get('/api/standings');
  }
  
  getHistory(): Observable<any> {
	  return this.http.get('/api/match/history');
  }
  
  submitMatch(match): Observable<any> {
	  return this.http.post('/api/match', match);
  }

}
