import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-get-transaction-by-id',
  templateUrl: './get-transaction-by-id.component.html',
  styleUrls: ['./get-transaction-by-id.component.css']
})
export class GetTransactionByIDComponent implements OnInit {

  form!: FormGroup;
  transactionID!: number;
  transationDetail: any;

  constructor(private service: TransactionService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(form: FormGroup) {
    if(this.form.valid) {
      this.transactionID = this.form.value.id;
      this.service.getTrasactionById(this.transactionID).subscribe(data => {
        console.log(data)
        this.transationDetail = data;
      })
    }
  }


}
