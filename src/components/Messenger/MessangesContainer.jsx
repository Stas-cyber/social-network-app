import React from 'react';
import { connect } from 'react-redux';
import { addMessActionCreate, onMessActionCreate } from '../../redux/Reducers/dialogsReducer';
import Messanges from './Messanges';

// const MessangesContainer = (props) => {
    
//   let onMessChange = (text) => {
//       props.store.dispatch(onMessActionCreate(text));
//    } 

//   let addMess = () => {
//       props.store.dispatch(addMessActionCreate());
//   }
//   return (
//         <Messanges onMessChange={onMessChange} addMess={addMess}  state={props.store.getState()}/>
//   );
// }
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

const MessangesContainer = connect(mapStateToProps, mapDispatchToProps)(Messanges)

export default MessangesContainer;