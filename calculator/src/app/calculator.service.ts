import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  mainDisplay = '';
  firstNum: number;
  secondNum: number;
  operator = '';
  ans = '';
  key: string;
  clearr: string;

  constructor() {
  }

  clickKey(event: any){
    this.key = event.target.value;
    if (this.key === '+' || this.key === '-' || this.key === '/' || this.key === '*') {
      this.operator = this.key;
      this.firstNum = Number(this.mainDisplay);
    }

    if (this.mainDisplay.length === 10) {
      return;
    }
    this.mainDisplay += this.key;
  }

  equalsTo(event: any){
    this.secondNum = parseFloat(this.mainDisplay.split(this.operator)[1]);

    if (this.operator === '+') {
      this.mainDisplay = (this.firstNum + this.secondNum).toString();
      if (this.mainDisplay.length > 9) {
        this.mainDisplay = 'ERROR';
      }
    }

    else if (this.operator === '-') {
      this.mainDisplay = (this.firstNum - this.secondNum).toString();
    }

    else if (this.operator === '*') {
      this.mainDisplay = (this.firstNum * this.secondNum).toString();
      if (this.mainDisplay.length > 9) {
        this.mainDisplay = 'ERROR';
      }
    }

    else if (this.operator === '/') {
      this.mainDisplay = (this.firstNum / this.secondNum).toString();
      if (this.mainDisplay.length > 9) {
        this.mainDisplay = this.mainDisplay.substr(0, 9);
      }
    }
    else {
      this.mainDisplay = 'Invalid Operation';
    }
  }

  del(event: any){
    this.mainDisplay = this.mainDisplay.substring(0, this.mainDisplay.length - 1);
  }

  clear(event: any){
    this.clearr = event.target.value;
    this.mainDisplay = this.clearr;
  }


}
