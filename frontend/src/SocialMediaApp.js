import React from "react";
import NavBar from "./components/layout/NavBar";
import Content from "./components/layout/Content";
import {increment} from "./store/actions/countAction";
import {useSelector,useDispatch} from "react-redux";
const SocialMediaApp = () => {
    const  counter = useSelector(state => state.counter);
    const dispath = useDispatch();
    return(

        <React.Fragment>
            {/*<NavBar/>*/}
            {/*<Content/>*/}
            <h1>Counter {counter}</h1>
            <button onClick={() => dispath(increment())}>+</button>





        </React.Fragment>
    );
}

export default SocialMediaApp;

