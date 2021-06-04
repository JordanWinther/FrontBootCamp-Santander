import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent} //Patch fica o link, Component, a página a ser carregada
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
