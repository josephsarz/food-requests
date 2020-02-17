import {orderRef} from '../config/firebase';
import {FETCH_ORDERS} from './types';

export const addOrder = newOrder => async dispatch => {
  orderRef.push().set(newOrder);
};

export const deleteOrder = orderId => async dispatch => {
  orderRef.child(orderId).remove();
};

export const fetchOrders = () => async dispatch => {
  orderRef.on("value", snapshot => {
    dispatch({
      type: FETCH_ORDERS,
      payload: snapshot.val()
    });
  });
};