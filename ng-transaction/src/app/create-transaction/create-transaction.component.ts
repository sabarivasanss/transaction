import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { debounceTime, map, Observable, of } from 'rxjs';
import { TransactionService } from '../service/transaction.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {


  form: FormGroup;

  currencyList = ["EUR", "GBP", "INR"];
  
  statusList = ["APPROVED", "DECLINED", "FAILED"];

  transactionTypeList = ["SALE", "REFUND"];

  ngOnInit() {
    
  }

  constructor(private fb: FormBuilder, private service: TransactionService,
    private toastrService: ToastrService
  ) {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      currency: ['', Validators.required],
      status: ['', Validators.required],
      transactionType: ['', Validators.required],
      timestamp: ['']
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = {
        ...this.form.value,
        timestamp: new Date().toISOString()
      };

      this.service.createTransaction(formData).subscribe(response => {
        console.log('Form submitted successfully', response);
        if(response.id != null) {
          this.toastrService.success("Form submitted successfully");
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

}