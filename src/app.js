/*
 * @Author: zk
 * @Date:   2017-01-10 17:55:53
 * @Last Modified by:   zk
 * @Last Modified time: 2017-01-14 15:00:43
 */
import {IndexPage} from "./product/js/indexPage.js"
import {Header,Content,Footer} from "./common/js/common.js"
import React from "react";
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, Link, IndexLink,hashHistory } from 'react-router'
//自定义组件
//order

//product

//foodWord

//user

ReactDOM.render((
    <Router history={hashHistory}>
            <Route path="/" component={IndexPage} />
    </Router>
), document.getElementById("root"));
