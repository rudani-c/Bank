import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  { path: '', redirectTo: 'transaction', pathMatch: 'full' },
  { path: 'transaction', component: TransactionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
