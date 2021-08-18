import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'services', component: ServicesComponent
  },
  {
    path:'customers', component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
