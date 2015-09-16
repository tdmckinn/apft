
// Type definitions for Redux-Thunk v0.1.0 - PR still open
// Project: https://github.com/gaearon/redux-thunk
// Definitions by: Tirell Mckinnon <https://github.com/tdmckinn/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="../redux/redux.d.ts" />

declare module ReduxThunk {

  // thunkMiddleware
  function thunkMiddleware<Middleware>(config: any): Function
}

declare module "redux-thunk" {
  export default ReduxThunk.thunkMiddleware;
}
