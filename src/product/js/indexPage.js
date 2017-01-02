/*
 * @Author: zk
 * @Date:   2017-01-10 17:55:53
 * @Last Modified by:   zk
 * @Last Modified time: 2017-01-14 15:00:43
 */
import React from "react";
import ReactDOM from "react-dom";
import {Header,Content,Footer} from "./../../common/js/common.js"
import "./../style/indexPage.scss"
class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div id = "indexPage" >
          <Header left={<i className='iconfont icon-jiahao'></i>}
          mid={<div className="searchBox"><input type="text" className="search" placeholder="搜索你感情兴趣的"/><i className='iconfont icon-sousuo_sousuo searchIcon'></i></div>}
          right={<i className='iconfont icon-youxiang'></i>}/>
          <Content>
              <ul className="shopList">
                  <li className="shopItem">
                      <img src="./../img/index1.jpg" />
                      <p className="shopName">草莓奶酪蛋糕</p>
                      <p className="shopJ">春日时光的清新甜品，蓝莓控局对不能错过</p>
                  </li>
                  <li className="shopItem">
                      <img src="./../img/index2.jpg" />
                      <p className="shopName">香甜小桃子</p>
                      <p className="shopJ">动手做个小桃子，让心情更美丽</p>
                  </li>
                  <li className="shopItem">
                      <img src="./../img/index3.jpg" />
                      <p className="shopName">鸡蛋三明治</p>
                      <p className="shopJ">红爆朋友圈的早餐，好吃易做又貌美</p>
                  </li>
              </ul>
          </Content>
          <Footer active="0"/>
          </div>
    }
}

export {IndexPage}
