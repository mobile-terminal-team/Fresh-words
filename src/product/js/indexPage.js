/*
 * @Author: zk
 * @Date:   2017-01-10 17:55:53
 * @Last Modified by:   zk
 * @Last Modified time: 2017-01-14 15:00:43
 */
import React from "react";
import ReactDOM from "react-dom";
import {Header,Content,Footer} from "./../../common/js/common.js"
class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div id = "page" >
          <Header left="+" mid="是是是" right="email"/>
          <Content />
          <Footer active="0"/>
          </div>
    }
}

export {IndexPage}
