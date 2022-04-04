import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { collection, Firestore, collectionData  } from '@angular/fire/firestore';

import { Team } from '../../constants/team'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  // teams : Team[] = [];
  teams: Observable<any>;

  constructor(private dataService: DataService, firestore:Firestore){
    const data = collection(firestore, 'teams');
    this.teams = collectionData(data);
  }

  ngOnInit(): void {
  }

}
