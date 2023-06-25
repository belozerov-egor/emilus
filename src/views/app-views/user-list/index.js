import React, {Component} from 'react'
import {Button, Card, message, Table, Tooltip} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import {getUsers} from "../../../store/slices/usersSlice";
import EditProfile from "./EditProfile";
import Loading from "../../../components/shared-components/Loading";


class UserList extends Component {

    state = {
        userProfileVisible: false,
        selectedUser: null,
    };

    componentDidMount() {
        this.props.getUsers();
    }

    deleteUser = userId => {
        this.setState({
            users: this.state.users.filter(item => item.id !== userId),
        });
        message.success({content: `Deleted user ${userId}`, duration: 2});
    };

    showUserProfile = userInfo => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo
        });
    };

    showTable = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null,
        })
    }


    render() {
        const {userProfileVisible, selectedUser} = this.state;
        const {users} = this.props;


        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                render: name => (
                    <div>{name}</div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Company',
                dataIndex: 'company',
                render: company => (
                    <div>
                        {company.name}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                }
            },
            {
                title: 'Email',
                dataIndex: 'email',
                render: email => (
                    <span>{email} </span>
                ),
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                render: phone => (
                    <span>{phone}</span>
                ),

            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right d-flex justify-content-end">
                        <Tooltip title="Edit">
                                <Button
                                    type="primary"
                                    className="mr-2"
                                    icon={<EditOutlined />}
                                    size="small"
                                    onClick={() => {
                                        this.showUserProfile(elm);
                                    }}
                                >
                                    Edit
                                </Button>
                        </Tooltip>
                    </div>
                )
            }
        ];

        if (users.length === 0) {
            return <Loading/>
        }

        return (
            <Card bodyStyle={{'padding': '0px'}}>


                <div className="table-responsive">
                    {userProfileVisible
                        ? <EditProfile user={selectedUser} userProfileVisible={this.showTable}/>
                        : <Table columns={tableColumns} dataSource={users} rowKey="id"/>}
                </div>
            </Card>
        )
    }
}

const mapStateToProps = state => ({users: state.users.users});

export default connect(mapStateToProps, {getUsers})(UserList)
