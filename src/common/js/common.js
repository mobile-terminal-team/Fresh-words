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
              <a className={this.props.active==index?"active":""}>
                <i className={"iconfont "+ele.className}></i>
                <p>{ele.name}</p>
              </a>
            </li>
          })
        }
    </ul>
  }
}
Footer.defaultProps={
  "data":[{"name":"推荐","className":"icon-daohangguogai"},
  {"name":"发现","className":"icon-icon1"},
  {"name":"商城","className":"icon-shangdian"},
  {"name":"食话","className":"icon-yinliao"},
  {"name":"我的","className":"icon-shoutaoxian"}]
}
export {Header,Content,Footer}
