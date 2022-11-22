import { Component, Input, OnInit } from '@angular/core';

import { Firestore, collectionData, collection, query, limit, getDocs, orderBy, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Document } from 'src/app/models/document.model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  @Input() did = 'empty';

  docId: string | undefined;
  doc$: Observable<Document[]>;
  documentUrl: Observable<string | null>;

  private firestore: Firestore;

  constructor(firestore: Firestore) { 
    this.firestore = firestore;
    this.doc$ = new Observable<Document[]>();
    this.documentUrl = new Observable<string | null>();
  }

  ngOnInit(): void {
    const col = collection(this.firestore, 'documents');
    const q = query(col, where('index', '==', Number(this.did).valueOf()), limit(1));
    this.doc$ = collectionData(q) as Observable<Document[]>;
  }

}
