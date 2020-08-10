import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service'
import { range } from 'rxjs';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent implements OnInit {

    calcService: CalculatorService;
    keyPadNumbers: Array<number>;
    constructor(private calculatorService: CalculatorService) {
      this.calcService = calculatorService;
      this.keyPadNumbers = [0, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
    }

    ngOnInit(): void {
    }


    clickKey(event: any){
      this.calculatorService.clickKey(event);
    }


    clear(event: any){
      this.calculatorService.clear(event);

    }

    equalsTo(event: any){
      this.calculatorService.equalsTo(event);
    }

    del(event: any){
      this.calculatorService.del(event);
    }
}
