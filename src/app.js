/*
 * @Author: zk
 * @Date:   2017-01-10 17:55:53
 * @Last Modified by:   zk
 * @Last Modified time: 2017-01-14 15:00:43
 */
import React from "react";
import ReactDOM from "react-dom";
import {
    Header,
    Content,
    Footer
} from "./components/common1.js"
class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div id = "index-page" >
            < Header / >
            < Content / >
            < Footer / >
            < /div>
    }
}
ReactDOM.render( < Page / > ,
    document.getElementById("root")
)