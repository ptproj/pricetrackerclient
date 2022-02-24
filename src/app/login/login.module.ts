import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { CostumerloginComponent } from './costumerlogin/costumerlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { CostumerpageComponent } from '../costumerpage/costumerpage.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
// const ROUTES1:Routes=[
//   { path: "", pathMatch: "full", redirectTo: "costumerlogin" },
//   { path:"costumerlogin",component:CostumerloginComponent },
// { path:'costumerpage',component:CostumerpageComponent },
//   {
//     path: '**',
//     redirectTo: 'costumerlogin'
//   }    
// ]
const LOGIN_ROUTE:Route[]=[
  {path:"costumerlogin",component:CostumerloginComponent},
  {path:"company",component:CompanyloginComponent},
  {path:"costumerpage",component:CostumerpageComponent}
]


@NgModule({
  declarations: [CostumerloginComponent,CompanyloginComponent],
  providers: [LoginService], 
  imports: [  CommonModule,ReactiveFormsModule,HttpClientModule,FormsModule      
    //RouterModule.forChild(ROUTES1)
  ], 
  exports:[CostumerloginComponent,CompanyloginComponent]
  
})
export class LoginModule { }
