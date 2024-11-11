import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { GetAllTransactionComponent } from './get-all-transaction/get-all-transaction.component';
import { AppComponent } from './app.component';
import { GetTransactionByIDComponent } from './get-transaction-by-id/get-transaction-by-id.component';

const routes: Routes = [

  {
    path:"create",
    component: CreateTransactionComponent
  },
  {
    path:"getAll",
    component: GetAllTransactionComponent
  },
  {
    path: "getByID",
    component: GetTransactionByIDComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
