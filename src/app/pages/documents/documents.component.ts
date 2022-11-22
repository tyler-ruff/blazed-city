import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  docId: string | undefined;

  constructor(private route: ActivatedRoute) { }

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
