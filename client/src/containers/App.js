import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.renderSidebar = this.renderSidebar.bind(this)
    this.handleClickSidebar = this.handleClickSidebar.bind(this)
  }

  componentWillMount() {
  }

  handleClickSidebar(e) {
    const { dispatch } = this.props
    dispatch(push(e.key))
  }

  renderSidebar() {
    return (
      <Menu theme="dark"
        defaultOpenKeys={['sub1', 'sub2', 'sub3']}
        mode="inline"
        onClick={this.handleClickSidebar}
      >
        <Menu.Item key="/"> <Icon type="home" />首页</Menu.Item>
        <Menu.Item key="/setting"> <Icon type="setting" />设置</Menu.Item>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
          <Menu.Item key="5">选项5</Menu.Item>
          <Menu.Item key="6">选项6</Menu.Item>
          <SubMenu key="sub3" title="三级导航">
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    )
  }

  render() {
    const style = {
      backgroundColor: '#404040',
      height: document.documentElement.clientHeight,
      overflowY: 'auto'
    }
    return (
      <div className="ant-row">
        <div style={style} className="ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
           {this.renderSidebar()}
        </div>
        <div className="main-container ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-20">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
