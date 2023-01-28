import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/shared/app.service';
import { page } from './explore.page';
import { Area } from '../../models/area.model';

import { Firestore, collectionData, collection, query, limit, getDocs, orderBy, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  area: string | undefined;
  public exploreAll: boolean = false;
  areaId: number = 0;

  public page = page;
  private firestore: Firestore;

  constructor(private appService: AppService, private route: ActivatedRoute, firestore: Firestore) {
    appService.setPage(page);
    this.firestore = firestore;
   }

  ngOnInit(): void {
      this.route.queryParams
       .subscribe(params => {
        this.area = params['area'];
        this.areaId = Number(this.area).valueOf();
        if(this.area === undefined){
          this.exploreAll = true;
        } 
       }
      );
  }

}
