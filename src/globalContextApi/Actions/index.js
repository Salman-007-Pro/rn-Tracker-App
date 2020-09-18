import * as CounterActions from "./counterAction";
import * as AuthActions from "./authActions";
import * as LocationActions from "./locationAction";
import * as TrackActions from "./trackAction";

export const Actions = {
  ...CounterActions,
  ...AuthActions,
  ...LocationActions,
  ...TrackActions,
};
