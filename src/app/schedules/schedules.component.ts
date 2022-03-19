import { Component, OnInit } from '@angular/core';

import { Schedule } from '../../constants/schedule';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  schedules: Schedule[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getSchedule()
  }
  
  getSchedule():void {
    this.dataService.getSchedule().subscribe(
      schedule => {
        this.schedules = schedule;
      }
    )
  }

}
