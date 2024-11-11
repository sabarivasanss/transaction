import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-get-all-transaction',
  templateUrl: './get-all-transaction.component.html',
  styleUrls: ['./get-all-transaction.component.css']
})
export class GetAllTransactionComponent implements OnInit{

  constructor(private service: TransactionService) { }

  @ViewChild('table') table!: MatTable<any>;
  @ViewChild('tableBody', { static: false }) tableBody!: ElementRef;

  dataSource:any;

  ngOnInit(): void {
    this.fetchData();
    this.dataSource = this.service.getAllTransction();  
    console.log("data " + this.dataSource);
  }

  fetchData(): void {
    this.service.getAllTransction().subscribe(
      (response) => {
        this.dataSource = response;  
      },
      (error) => {
        console.error('Error fetching data:', error);  
      }
    );
  }

  ngAfterViewInit() {
    this.getTableBodyHeight();
  }

  getTableBodyHeight(): void {
    if (this.tableBody) {
      const tableBodyHeight = this.tableBody.nativeElement.offsetHeight;
    }
  }
  
  

  displayedColumns: string[] = ['id', 'amount', 'status', 'transactionType'];


}
