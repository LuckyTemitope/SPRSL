import { Component } from '@angular/core';
import { collection, Firestore, collectionData  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface Item {
  name: String,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SPRSL';
  item$: Observable<any>;

  constructor(firestore:Firestore){
    const data = collection(firestore, 'teams');
    this.item$ = collectionData(data);
  }


}
