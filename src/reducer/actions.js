import {
   add_item,
   clear_completed,
   handle_change_input,
   reset_input,
   reset_state,
   set_active_filter,
   toggle_item
} from './constants';

export const handleChangeInput = (value) => ({
   type: handle_change_input,
   payload: value
});

export const addItem = () => ({ type: add_item });

export const resetInput = () => ({ type: reset_input });

export const toggleItem = (id) => ({
   type: toggle_item,
   payload: id
});

export const setActiveFilter = (filter) => ({ type: set_active_filter, payload: filter });

export const clearCompleted = () => ({ type: clear_completed });

export const resetState = () => ({ type: reset_state });
