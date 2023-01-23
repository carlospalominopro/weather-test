import { createAction, props } from "@ngrx/store";

export const getWeather = createAction("[Weather] Request", props<{ obj: any }>());

export const setData = createAction(
  "[Weather] Set Data",
  props<{ data: any }>()
);
