import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from 'src/app/shared/app.service';
import { page } from './documents.page';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  public page = page;
  docId: string | undefined;

  constructor(private appService: AppService, private route: ActivatedRoute) {
    appService.setPage(page);
   }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.docId = params['did'];
      }
    );
    // Redirect if place id is empty
    if(this.docId === "empty" || this.docId === "" || this.docId === null || this.docId === undefined){
      window.location.href = "/home";
    }
  }

}
