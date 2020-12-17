import { Component, OnInit } from "@angular/core";
import { TransactionService } from "../../services/transaction.service";

@Component({
  selector: "transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.css"],
})
export class TransactionComponent implements OnInit {
  transactionsArray = [];
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(
      (response: any) => {
        this.transactionsArray = response.data;
        console.log(this.transactionsArray);
      },
      (err) => {
        alert(err);
      }
    );
  }
}
