import { Component, OnInit } from '@angular/core';
import { Team } from 'src/constants/team';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  teams: Team[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTeam()
      .subscribe(team => this.teams = team)
  }

}
