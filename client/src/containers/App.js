import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

class App extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const style = {
      backgroundColor: '#404040',
      height: document.documentElement.clientHeight,
      overflowY: 'auto'
    }
    return (
      <div className="ant-row">
        <header id="header">
        </header>
        <div className="main-wrapper">{this.props.children}</div>
        <footer id="footer"></footer>
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
