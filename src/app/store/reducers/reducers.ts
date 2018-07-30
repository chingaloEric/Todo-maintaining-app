import * as fromAction from '../actions/actions';
import { Todo } from '../../modules/todo.module';


export interface CurrentState {
  data: Todo[];
  loading: boolean;
  loaded: boolean;
}
 
export const initialState: CurrentState = {
  loading: false,
  loaded: false,
  data: []
};

export function TodoReducer(
  state: CurrentState = initialState,
  action: { type: string; payload: any }

) {

  switch (action.type) {
    case fromAction.ADD_TODO: {
      const todo:Todo = {
        todoText : action.payload.todoText,
        todoDoneStatus: false,
        id: getRandString()
      }
      console.log(todo);
      const data = [...state.data, todo];
      return { ...state, data };
    }

    case fromAction.DONE_TODO: {
      const data = state.data.filter(todo => todo.id != action.payload.id)
      return { ...state, data };
    }
  }

  return state;
}
function getNewID() {
      var myDate = new Date();
      var varID = myDate.getHours() + "" + myDate.getMinutes() + "" + myDate.getSeconds() + "" + myDate.getMilliseconds();
      if (varID.length > 15) {
          varID = varID.substr(0, 15);
      }
      return varID;
}

function getRandString(){ 
  return getNewID();
}


export const getAllToDos = (state: any) => state.data;
