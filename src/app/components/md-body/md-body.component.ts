import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-md-body',
  templateUrl: './md-body.component.html',
  styleUrls: ['./md-body.component.css']
})
export class MdBodyComponent implements OnInit {
  mdDocumentBody: string = "";
  loading: boolean = true;
  @Input() documentId = "";
  @Input() type = "";
  constructor(private storage: AngularFireStorage, private http:HttpClient) { }

  async ngOnInit() {
    const refUrl = `archive/${this.type}/BLZ-${this.documentId}.md`;
    const ref = this.storage.ref(refUrl);
    await ref.getDownloadURL().toPromise().then(
      (documentUrl) => {
        this.http.get(documentUrl, { responseType: 'text' }).toPromise().then(
          (documentData) => {
            if(documentData !== undefined){
              this.mdDocumentBody = documentData;
              this.loading = false;
            }
          }
        )
      }
    );
  }

}
