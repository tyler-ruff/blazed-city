import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Services
import { AppService } from './shared/app.service';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { UnknownComponent } from './pages/unknown/unknown.component';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Utilities
import { LazyLoadDirective } from './util/lazyload.directive';
import { PhoneFormatPipe } from './util/format-phone.pipe';
import { RelativeTimePipe } from './util/relative-time.pipe';
import { RenderMdPipe } from './util/render-md.pipe';

// Widgets
import { ArchiveComponent } from './widgets/archive/archive.component';
import { MdBodyComponent } from './widgets/md-body/md-body.component';
import { AreaComponent } from './widgets/area/area.component';
import { AllAreasComponent } from './widgets/all-areas/all-areas.component';

// Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective,
    PhoneFormatPipe,
    RelativeTimePipe,
    RenderMdPipe,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ExploreComponent,
    ArchiveComponent,
    DocumentsComponent,
    UnknownComponent,
    MdBodyComponent,
    AreaComponent,
    AllAreasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage())
  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://blz-one-9e383.appspot.com' },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    ScreenTrackingService,UserTrackingService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
