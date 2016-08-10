import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import Remarkable from 'remarkable'

export default class Editor extends Component {

  constructor(props, context) {
    super(props, context)
    this.handleChange = this.handleChange.bind(this)
    this.rawMarkup = this.rawMarkup.bind(this)
    this.state = {
      height: document.documentElement.clientHeight - 50,
    }
  }

  componentDidMount() {
    window.onresize = () => {
      this.setState({
        height: document.documentElement.clientHeight - 50,
      })
    }
  }

  handleChange() {
    this.setState({value: this.textarea.value})
  }

  rawMarkup() {
    var md = new Remarkable()
    return { __html: md.render(this.state.value) }
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <div id="wmd-view" style={{height: this.state.height}}>
              <textarea
                id="wmd-editor"
                ref={(c) => this.textarea = c}
                onChange={this.handleChange}
              >
              </textarea>
            </div>
          </Col>
          <Col span={12}>
            <div id="pre-view" style={{height: this.state.height}}>
              <div id="wmd-preview" dangerouslySetInnerHTML={this.rawMarkup()}></div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
