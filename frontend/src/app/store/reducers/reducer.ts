import { createReducer, on, Action } from "@ngrx/store";
import * as fromWeather from "../actions/actions";

const initialState: any = {
  loading : true
};


const reducer = createReducer(
  initialState,
  on(fromWeather.setData, (state, { data }) => ({ ...state, ...data.first, loading : false })),
  on(fromWeather.getWeather, (state) => ({ ...state, loading : true }))

);

export function weatherReducer(state: any | undefined, action: Action) {
  return reducer(state, action);
}
