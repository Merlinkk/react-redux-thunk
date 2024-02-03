/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { applyMiddleware, createStore } from 'redux';
import Reducer from './Reducer';
import {thunk} from 'redux-thunk'; 
import { showError, showUser } from './Action';
import axios from 'axios';

const store = createStore(Reducer, applyMiddleware(thunk));

function fetchData() {
  return function () {  
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data
        store.dispatch(showUser(users))
      })
      .catch(err => store.dispatch(showError(err.message))); 
  };
}

export default function Display() {

  const [data, setData] = useState([])

  store.subscribe(() => {
    setData(store.getState().users)
    console.log(store.getState());
  });

  return (
    <div>
      <button onClick={store.dispatch(fetchData)}>Fetch Data</button>
      {data ? data.map((el)=>{
        return (
          <div style={{
            width:'100%'
          }} key={el.id}>
          <div style={{
            padding:'20px'
          }}>{el.name}</div>
          <div>{el.email}</div>
          <hr />
        </div>
        )
      }) : null}
    </div>

  );
}
