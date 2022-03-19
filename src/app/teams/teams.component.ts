import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

import { Team } from '../../constants/team'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  teams : Team[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTeam()
      .subscribe(team => this.teams = team )
  }

}
