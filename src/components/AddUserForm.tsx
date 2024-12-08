import React from "react";
import { Form, Input, Button, Select, DatePicker, Switch, Upload, Row, Col, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddUserForm: React.FC = () => {
  const handleFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <Card title="Add New User">
      <Form layout="vertical" onFinish={handleFinish}>
        {/* General Info Section */}
        <h3>General Info</h3>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: "Please enter the full name" }]}
            >
              <Input placeholder="Enter full name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Please enter the username" }]}
            >
              <Input placeholder="Enter username" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter the email address" }]}
            >
              <Input placeholder="Enter email address" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phone Number" name="phoneNumber">
              <Input placeholder="+358 00-000-0000" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Social Security No (optional)" name="ssn">
              <Input placeholder="Enter social security no" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Gender" name="gender">
              <Select placeholder="Select gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Status" name="status">
              <Select placeholder="Select status">
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Date of Birth" name="dob">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Role" name="role">
              <Select placeholder="Select role">
                <Option value="owner">Owner</Option>
                <Option value="admin">Admin</Option>
                <Option value="user">User</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="ftnVerification" valuePropName="checked">
              <Switch checkedChildren="Can Skip FTN Verification" unCheckedChildren="Cannot Skip FTN Verification" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="emailNotification" valuePropName="checked">
              <Switch checkedChildren="Send Welcome Email" unCheckedChildren="Do Not Send Email" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Profile Picture" name="upload">
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        {/* Address Info Section */}
        <h3>Address Info</h3>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Country" name="country">
              <Select placeholder="Select country">
                <Option value="finland">Finland</Option>
                <Option value="usa">USA</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="State" name="state">
              <Select placeholder="Select state">
                <Option value="state1">State 1</Option>
                <Option value="state2">State 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="City" name="city">
              <Select placeholder="Select city">
                <Option value="city1">City 1</Option>
                <Option value="city2">City 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Postal Code" name="postalCode">
              <Input placeholder="Enter postal code" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Street Address" name="streetAddress">
              <Input placeholder="Enter street address" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Residential Area" name="residentialArea">
              <Input placeholder="Enter residential area" />
            </Form.Item>
          </Col>
        </Row>

        {/* Invoicing Address Section */}
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="invoicingAddress" valuePropName="checked">
              <Switch checkedChildren="Invoicing Address Enabled" unCheckedChildren="Invoicing Address Disabled" />
            </Form.Item>
          </Col>
        </Row>

        {/* Form Buttons */}
        <Row justify="end" gutter={16}>
          <Col>
            <Button htmlType="button">Cancel</Button>
          </Col>
          <Col>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default AddUserForm;
