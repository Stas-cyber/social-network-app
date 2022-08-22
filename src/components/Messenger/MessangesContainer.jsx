
import React from 'react';
import { connect } from 'tls';
import { addMessActionCreate, onMessActionCreate } from '../../redux/Reducers/dialogsReducer';
import Messanges from './Messanges';


let mapStateToProps = (state) => {
  return {
    state: state
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onMessChange: (text) => {
      dispatch(onMessActionCreate(text));
    },
    addMess: () => {
      dispatch(addMessActionCreate());
    }
  }
}
  const MessangesContainer = connect(mapStateToProps, mapDispatchToProps)(Messanges);


export default MessangesContainer;