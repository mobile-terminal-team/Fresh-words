import "./../style/common.scss"
import "lib/rem.js"
import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, Link, IndexLink,hashHistory } from 'react-router'
class Header extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div className="header">
        <div className="left-btn">{this.props.left}</div>
        <div className="mid-btn">{this.props.mid}</div>
        <div className="right-btn">{this.props.right}</div>
    </div>
  }
}
class Content extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div className="content">
        {this.props.children}
    </div>
  }
}
class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <ul className="footer">
        {
          this.props.data.map((ele,index)=>{
            return <li key={index} >
              <a className={this.props.active==index?"active":""}>{ele}</a>
            </li>
          })
        }
    </ul>
  }
}
Footer.defaultProps={
  "data":["推荐","发现","商城","食话","我的"],
  "active":0
}
export {Header,Content,Footer}
