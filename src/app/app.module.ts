import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProjetsComponent } from './projets/projets.component';
import { AboutComponent } from './about/about.component';
import { ProjetsService } from '../services/projets.service';
import { NewProjetComponent } from './new-projet/new-projet.component';
import { NouveauProjetComponent } from './nouveau-projet/nouveau-projet.component';
import { EditProjetComponent } from './edit-projet/edit-projet.component';
import { ExigenceSidebarComponent } from './exigences/exigence-sidebar/exigence-sidebar.component';
import { ExigencesComponent } from './exigences/exigences.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjetSidebarComponent } from './projet/projet-sidebar/projet-sidebar.component';
import { ProjetContentComponent } from './projet/projet-content/projet-content.component';
import { ExigenceComponent } from './projet/exigence/exigence.component';
import { ExigencesService } from '../services/exigences.service';
import { CampagnesService } from '../services/campagnes.service';
import { CasTestService } from '../services/castest.service';
import { CastestAddComponent } from './projet/exigence/castest-add/castest-add.component';

const appRoutes:Routes=[
  {path:'projets', component: ProjetsComponent},
  {path:'projet/:id', component: ProjetComponent},
  {path:'projet/:id/exigences/:idExigence', component: ProjetComponent},
  {path:'exigences/:id/campagnes', component: ProjetComponent},
  {path:'exigences/:id/castests', component: ProjetComponent},
  {path:'new-projet', component: NewProjetComponent},
  {path:'edit-projet/:id', component: EditProjetComponent},
  {path: '', redirectTo:'/projets',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    AboutComponent,
    NewProjetComponent,
    NouveauProjetComponent,
    EditProjetComponent,
    ExigencesComponent,
    ExigenceSidebarComponent,
    ProjetComponent,
    ProjetSidebarComponent,
    ProjetContentComponent,
    ExigenceComponent,
    CastestAddComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [ProjetsService,ExigencesService,CampagnesService,CasTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
