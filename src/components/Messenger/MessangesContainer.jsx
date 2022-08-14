import React from 'react';
import { addMessActionCreate, onMessActionCreate } from '../../redux/dialogsReducer';
import Messanges from './Messanges';


const MessangesContainer = (props) => {
    
  let onMessChange = (text) => {
      props.store.dispatch(onMessActionCreate(text));
   } 

  let addMess = () => {
      props.store.dispatch(addMessActionCreate());
  }
  return (
        <Messanges onMessChange={onMessChange} addMess={addMess} store={props.store} state={props.state.MessangePage}/>
  );
}


export default MessangesContainer;