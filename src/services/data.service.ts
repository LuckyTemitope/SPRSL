import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Schedule } from '../constants/schedule'
import { SCHEDULE } from '../DataSource/schedule-data'

import { Team } from '../constants/team'
import { TEAM } from '../DataSource/team-data'

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

  getSchedule(): Observable<Schedule[]> {
    const schedule = of(SCHEDULE);
    return schedule;
  }

  getTeam(): Observable<Team[]> {
    const team = of(TEAM);
    return team;
  }

}
