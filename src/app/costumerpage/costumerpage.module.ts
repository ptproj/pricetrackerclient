import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostumerpageComponent } from '../costumerpage/costumerpage.component';
import { CostumerpageService } from './costumerpage.service';
import { HttpClientModule } from '@angular/common/http';
import { CostumerloginComponent } from '../login/costumerlogin/costumerlogin.component';
import { RouterModule, Routes } from '@angular/router';
const ROUTES:Routes=[
  { path:'costomer',component:CostumerpageComponent },
  {
    path: '**',
    redirectTo: 'costomer'
  }    
]


@NgModule({
  declarations: [CostumerpageComponent ],
  providers: [CostumerpageService], 
  imports: [ HttpClientModule,CommonModule,RouterModule.forRoot(ROUTES)],
  exports:[CostumerpageComponent]
})
export class CostumerpageModule { }