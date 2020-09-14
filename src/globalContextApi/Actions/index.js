import * as CounterActions from "./counterAction";
import * as AuthActions from "./authActions";

export const Actions = {
  ...CounterActions,
  ...AuthActions,
};
