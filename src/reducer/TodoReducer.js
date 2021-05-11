import {
   add_item,
   clear_completed,
   handle_change_input,
   reset_input,
   reset_state,
   set_active_filter,
   toggle_item
} from './constants';

export const initialState = {
   text: '',
   activeFilter: 'all',
   items: [
      { id: 1, text: 'Lear hook useState()', active: true },
      { id: 2, text: 'Lear hook useEffect()', active: true },
      { id: 3, text: 'Lear hook useContext()', active: true },
      { id: 4, text: 'Lear hook useReducer()', active: true }
   ]
};

export const init = () => {
   return initialState;
};

export const todoReducer = (state, action) => {
   switch (action.type) {
      case handle_change_input:
         return {
            ...state,
            text: action.payload
         };

      case add_item:
         return {
            ...state,
            items: [
               {
                  id: new Date().valueOf(),
                  text: state.text,
                  active: true
               },
               ...state.items
            ]
         };

      case reset_input:
         return {
            ...state,
            text: '',
            items: [...state.items]
         };

      case toggle_item:
         return {
            ...state,
            items: state.items.map((item) =>
               item.id !== action.payload ? item : { ...item, active: !item.active }
            )
         };

      case set_active_filter:
         return {
            ...state,
            activeFilter: action.payload,
            items: [...state.items]
         };

      case clear_completed:
         return {
            ...state,
            items: state.items.filter((item) => item.active)
         };

      case reset_state:
         return init();

      default:
         return state;
   }
};
