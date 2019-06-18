import React from 'react';
// import { useState } from 'react'; localのStateを使用するための記述
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { changeInput } from "../actions/App";

const useStyles = makeStyles({
  text:{
    color: 'red'
  },
});


function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  function changeValue(e) {
    dispatch(changeInput(e.target.value))
  }

  const { text } = useSelector(state => state.appReducer);
  return (
    <div>
      <h1 className={classes.text}>{text}</h1>
      <input value={text} onChange={changeValue}/>
    </div>
  )
}

function Test() {
  return (
    <div>
      ほげええええ
    </div>
  )
}

function App() {
  // const [count, setCount] = useState(0); ちなみにこの記述でlocalのStateを使える．countがゲッター，setCountがセッター，`0`の部分が初期Stateになる
  return (
    <BrowserRouter>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/test'>Test</Link></li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/test' component={Test} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
