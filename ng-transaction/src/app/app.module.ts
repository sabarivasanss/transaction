import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { MatButtonModule } from '@angular/material/button';  // Material Button
import { MatSelectModule } from '@angular/material/select'; 
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatOptionModule } from '@angular/material/core';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { GetAllTransactionComponent } from './get-all-transaction/get-all-transaction.component';
import { GetTransactionByIDComponent } from './get-transaction-by-id/get-transaction-by-id.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CreateTransactionComponent,
    GetAllTransactionComponent,
    GetTransactionByIDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatOptionModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right', 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
