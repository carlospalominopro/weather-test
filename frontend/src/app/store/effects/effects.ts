import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromWeather from "../actions/actions";
import { exhaustMap, map, catchError, tap } from "rxjs/operators";
import { ApiService } from "../../api.service";
import { EMPTY, combineLatest } from "rxjs";
@Injectable()
export class WeatherEffects {

  constructor(private actions$: Actions, private service: ApiService) {}

  getId$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromWeather.getWeather),
        map(action => action.obj),
        exhaustMap(
          (obj) => combineLatest([this.service.searchWeather(obj)]).pipe(
            map(([first]) => ({first})),
            map(resp => fromWeather.setData({data: resp}))
          )
        )
      )
  );
}
