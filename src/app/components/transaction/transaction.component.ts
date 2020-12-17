import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
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

  getMerchantLogoUrl(merchantName: string) {
    switch(merchantName) {
      case 'Backbase':
        return '/assets/icons/backbase.png';
      case 'The Tea Lounge':
        return '/assets/icons/the-tea-lounge.png';
      case 'Texaco':
        return '/assets/icons/texaco.png';
      case 'Amazon Online Store':
        return '/assets/icons/amazon-online-store.png';
      case '7-Eleven':
        return '/assets/icons/7-eleven.png';
      case 'H&M Online Store':
        return '/assets/icons/h&m-online-store.png';
      case 'Jerry Hildreth':
        return '/assets/icons/jerry-hildreth.png';
      case 'Lawrence Pearson':
        return '/assets/icons/lawrence-pearson.png';
      case 'Whole Foods':
        return '/assets/icons/whole-foods.png';
      case 'Southern Electric Company':
        return '/assets/icons/southern-electric-company.png';
      default:
        return '/assets/icons/backbase.png';
    }
  }
}
