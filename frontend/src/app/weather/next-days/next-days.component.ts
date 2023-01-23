import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-next-days',
  templateUrl: './next-days.component.html',
  styleUrls: ['./next-days.component.scss']
})
export class NextDaysComponent implements OnChanges {

  @Input('forecastdays') forecastdays : any[] = [];
  public orderBy : boolean = true;

  constructor() {

  }

  ngOnChanges(
    changes: SimpleChanges
  ){
    // SE RECIBEN LOS DATOS DEL COMPONENTE PADRE
    this.forecastdays = changes['forecastdays'].currentValue;
  }

  orderData(){

    // SE ORDENAN LOS RESULTADOS
    this.forecastdays = this.forecastdays.slice().sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (dateA < dateB) {
        return this.orderBy ? -1 : 1;
      }
      if (dateA > dateB) {
        return this.orderBy ? 1 : -1;
      }
      return 0;
    });
  }


}
