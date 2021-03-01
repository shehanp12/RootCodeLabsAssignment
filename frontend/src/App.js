import SocialMediaApp from "./SocialMediaApp";
import React from "react";
import {useSelector,useDispatch} from "react-redux";
function App() {
  const  counter = useSelector(state => state.counter);
  const dispath = useDispatch();

  return (
    <SocialMediaApp/>





  );
}

export default App;
