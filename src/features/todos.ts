import { Todo } from '../types/Todo';

type LoadTodos = {
  type: 'load';
  payload: Todo[];
};

type Actions = LoadTodos;

export const actions = {
  load: (todos: Todo[]): LoadTodos => ({ type: 'load', payload: todos }),
};

const todosReducer = (
  todos: Todo[] | null = null, action: Actions,
): Todo[] | null => {
  if (action.type === 'load') {
    return action.payload;
  }

  return todos;
};

export default todosReducer;