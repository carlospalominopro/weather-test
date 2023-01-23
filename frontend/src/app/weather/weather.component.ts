import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getWeather } from '../store/actions/actions';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  public formSearch : FormGroup;

  public loading : boolean = false;
  public errorsFlag : any = null;

  public date : Date = new Date();

  data$ = this.store.pipe();
  weather : any = {};
  weather5Days : any = [];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.formSearch = this.formBuilder.group({
      search : ['', [Validators.required, Validators.minLength(3)]],
      check : [false],
    })
  }

  findInfo(){

    this.weather = {}
    this.weather5Days = [];
    this.loading = true;
    this.errorsFlag = null

    if(this.formSearch.valid){

      const formdata = this.formSearch.value;

      this.store.dispatch(getWeather({obj: {
        city: formdata.search,
        getNext5Days : formdata.check
      }}));

      this.data$.subscribe((res : any)=>{

        const response = res.weather;
        this.loading = response.loading;

        if(response?.search_weather?.status){
          this.errorsFlag = response?.search_weather?.message;
        }else{

          this.weather = response.search_weather;

          if(response?.search_next_5_days){
            this.weather5Days = response.search_next_5_days?.data?.forecast?.forecastday;
          }
        }

      })

    }else{
      this.loading = false;
      this.errorsFlag = 'Please fill the search input text'
    }

  }
}
