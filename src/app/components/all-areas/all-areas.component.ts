import { Component, OnInit } from '@angular/core';

import { Firestore, collectionData, collection, query, limit, getDocs, orderBy, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Area } from '../../models/area.model';

@Component({
  selector: 'app-all-areas',
  templateUrl: './all-areas.component.html',
  styleUrls: ['./all-areas.component.css']
})
export class AllAreasComponent implements OnInit {

  areas$: Observable<Area[]>;
  private firestore: Firestore;
  constructor(firestore: Firestore) {
    this.firestore = firestore;
    this.areas$ = new Observable<Area[]>();
   }

  ngOnInit(): void {
    const col = collection(this.firestore, 'areas');
    const q = query(col, orderBy("index", "asc"));
    this.areas$ = collectionData(q) as Observable<Area[]>;
  }

}
