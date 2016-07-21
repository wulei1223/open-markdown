import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Table, Button, Form, Input, Select } from 'antd'
const FormItem = Form.Item
import FormModal from '../components/FormModal'

import * as MemberActions from '../actions/member'

const columns = [{
  title: '昵称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '角色',
  dataIndex: 'role',
  key: 'role',
}, {
  title: '创建时间',
  dataIndex: 'createdAt',
  key: 'createdAt',
}];

class Setting extends Component {

  constructor(props, context) {
    super(props, context)
    this.renderForm = this.renderForm.bind(this)
    this.handleAddEmployee = this.handleAddEmployee.bind(this)
  }

  componentWillMount() {
    const { memberAction } = this.props
    memberAction.fetch()
  }

  renderForm(value={}) {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (form, getFieldProps) => {
      return (
        <Form horizontal form={form}>
          <FormItem
            {...formItemLayout}
            label="邮箱：">
            <Input {...getFieldProps('email', {initialValue: value['email'] })} type="text" autoComplete="off" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="昵称：">
            <Input {...getFieldProps('name', {initialValue: value['name']})} type="text" autoComplete="off" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="角色：">
            <Select
              style={{ width: 200 }}
              {...getFieldProps('role', {initialValue: value['role'] || 'member'})}>
              <Option value="admin">管理员</Option>
              <Option value="member">成员</Option>
            </Select>
          </FormItem>
        </Form>
      )
    }
  }

  handleAddEmployee(info) {
    const { memberAction, employee, params } = this.props;
    memberAction.add(info)
  }

  render() {
    const style = {
      height: document.documentElement.clientHeight,
      overflowY: 'auto',
      background: '#ECECEC',
      padding: '30px',
    }
    const { member } = this.props
    return (
      <div style={style}>
        <Card title="成员管理" extra={<FormModal
             buttonText="新增"
             modalTitle="添加成员"
             renderForm={this.renderForm()}
             handleSubmit={this.handleAddEmployee}
            />}>
          <Table rowKey="id" dataSource={member.resource} columns={columns} />
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  member: state.member.toJS(),
})

const mapDispatchToProps = (dispatch) => ({
  memberAction: bindActionCreators(MemberActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
