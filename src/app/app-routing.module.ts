import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { HomeComponent } from './pages/home/home.component';
import { UnknownComponent } from './pages/unknown/unknown.component';

import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
