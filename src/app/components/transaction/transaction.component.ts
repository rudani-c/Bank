import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {

  balance = 5824.76;
  fromStr = 'Free Checking(4692) - $' + this.balance;
  filterStr = '';
  toAcc = '';
  amt;
  order = 'asc';
  transactionsArray: any = [];
  fieldName = '';
  isSubmitted = false;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(
      (response: any) => {
        this.transactionsArray = response.data;
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

  sort(f) {
    if(f == this.fieldName) {
      if(this.order == 'asc') {
        this.order = 'desc';
      } else if(this.order == 'desc'){
        this.order = '';
      } else {
        this.order = 'asc';
      }
    } else {
      this.fieldName = f;
      this.order = 'asc';
    }
  }

  onSubmit() {
    this.isSubmitted = false;
    if(this.balance - this.amt < -500) {
      alert('You can not overdraft your account beyond a balance of $ -500.00');
      return;
    }
    this.balance -= this.amt;
    this.fromStr = 'Free Checking(4692) - $' + this.balance;
    let obj = {
      categoryCode: '#12a580',
      dates: {
        valueDate: new Date().getTime()
      },
      merchant: {
        accountNumber: this.toAcc,
        name: 'Test'
      },
      transaction: {
        amountCurrency: {amount: this.amt, currencyCode: "EUR"},
        creditDebitIndicator: "DBIT",
        type: "Card Payment"
      }
    }
    this.transactionsArray = [obj, ...this.transactionsArray];
    this.amt = '';
    this.toAcc = '';
  }

  clearFilterField() {
    this.filterStr = '';
  }
}
