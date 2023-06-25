import React, {useState} from 'react';
import {Button, Col, Form, Input, message, Row} from 'antd';
import {ROW_GUTTER} from "../../../constants/ThemeConstant";
import Loading from "../../../components/shared-components/Loading";


const EditProfile = ({user, userProfileVisible}) => {
	const [loading, setLoading] = useState(false);
	const onFinish = () => {
		setLoading(true);
        setTimeout(() => {
            setLoading(false);
            userProfileVisible(false);
			message.success('Profile updated successfully!');
        }, 2000);
	}

		return (
			<>
				{loading
					? <Loading/>
					:
					<div className="mt-4">
						<Form
							name="basicInformation"
							layout="vertical"
							initialValues={
								{
									'name': user.name,
									'email': user.email,
									'username': user.username,
									'phoneNumber': user.phone,
									'website': user.website,
									'address': user.address.street + ' ' + user.address.suite + ' ' + user.address.zipcode,
									'city': user.address.city,
									'company': user.company.name
								}
							}
							onFinish={onFinish}
						>
							<Row>
								<Col xs={24} sm={24} md={24} lg={16}>
									<Row gutter={ROW_GUTTER}>
										<Col xs={24} sm={24} md={12}>
											<Form.Item
												label="Name"
												name="name"
												rules={[
													{
														required: true,
														message: 'Please input your name!',
													},
												]}
											>
												<Input/>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={12}>
											<Form.Item
												label="Username"
												name="username"
												rules={[
													{
														required: true,
														message: 'Please input your username!'
													},
												]}
											>
												<Input/>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={12}>
											<Form.Item
												label="Email"
												name="email"
												rules={[{
													required: true,
													type: 'email',
													message: 'Please enter a valid email!'
												}]}
											>
												<Input/>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={12}>
											<Form.Item
												label="Phone Number"
												name="phoneNumber"
											>
												<Input/>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={24}>
											<Form.Item
												label="Address"
												name="address"
											>
												<Input/>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={12}>
											<Form.Item
												label="Website"
												name="website"
											>
												<Input/>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={12}>
											<Form.Item
												label="City"
												name="city"
											>
												<Input/>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={12}>
											<Form.Item
												label="Company"
												name="company"
											>
												<Input/>
											</Form.Item>
										</Col>
									</Row>
									<Button type="primary" htmlType="submit">
										Save Change
									</Button>
								</Col>
							</Row>
						</Form>
					</div>}
			</>
		)
	}


export default EditProfile
