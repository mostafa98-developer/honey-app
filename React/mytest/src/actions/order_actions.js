import {
  EXPENSE_SAVED,
  RESET_SAVED_FLAG,
  FETCHING_EXPENSE,
  FETCHED_SUCCESS,
  FETCHED_FAILED,
  EXPENSE_UPDATED
} from './types';
import { addErrorMessage, clearErrorMessages } from './error_actions';
import setAuthHeader from '../api/setAuthHeader';

import {
  api_addOrder,
  api_orderList,
  api_orderUpdate
} from '../api/order';

export const saveOrder = (expense) => {
  
  const re1 = api_addOrder(expense)
  .then((response) => {
    clearErrorMessages();
    console.log(response.data);
  }).catch((e) => {
   addErrorMessage(e);
  });
};

export const getOrder = (expense) => {
  
  const re1 = api_orderList(expense)
  .then((response) => {
    clearErrorMessages();
    console.log(response.data);
  }).catch((e) => {
   addErrorMessage(e);
  });
};
export const updateOrder = (expense, callback) => {
  console.log(expense);
  const req = api_orderUpdate(expense).then(res => {
    console.log(res);
    callback(res) 
  }).catch(e =>{
    console.log(e)
  })
};

// export const fetchExpense = month => {
//   return async dispatch => {
//     try {
//       dispatch({ type: FETCHING_EXPENSE });
//       const { data } = await apiFetchExpense(month);
//       dispatch({ type: FETCHED_SUCCESS, payload: data });
//     } catch (e) {
//       dispatch({ type: FETCHED_FAILED });
//       dispatch(addErrorMessage(e));
//     }
//   };
// };

// export const deleteExpense = expenseId => {
//   return async dispatch => {
//     try {
//       dispatch(clearErrorMessages());
//       await apiDeleteExpense(expenseId);
//       dispatch(fetchExpense());
//     } catch (e) {
//       dispatch(addErrorMessage(e));
//     }
//   };
// };

export const resetSaved = () => ({ type: RESET_SAVED_FLAG });
