import React, { useState } from 'react';
import { Dropdown, Menu, Tabs, Typography } from 'antd';
import type { TabsProps } from 'antd';
import MeterReadingTab from '../widgets/MeterReadingTab';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
const { Text } = Typography


const StyledDropdownWrapper = styled.div`
  padding: 20px;
`

const StyledDropdownTitleContainer = styled.div`
display:flex;
alignItems: center;
.text{
margin-right: 16px;}
`

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Meter Reading',
    children: <MeterReadingTab />,

  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },
];

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState({
    label: 'Tranquil Properties Inc.',
    description: 'Housing company',
  });

  const menu = (
    <Menu style={{ width: 200 }}>
      <Menu.Item key="1"
        onClick={() =>
          setSelectedItem({
            label: 'Tranquil Properties Inc.',
            description: 'Housing company',
          })
        }
      >
        <Text strong>Tranquil Properties Inc.</Text>
        <Text type="secondary">Housing company</Text>
      </Menu.Item>
      <Menu.Item key="2"
        onClick={() =>
          setSelectedItem({
            label: 'Another Company',
            description: 'Another description',
          })
        }
      >
        <Text strong>Another Company</Text>
        <Text type="secondary">Another description</Text>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <StyledDropdownWrapper>
        <Dropdown overlay={menu} trigger={['click']}>
          <StyledDropdownTitleContainer>
            <div className="text">
              <div>
              <Text strong>{selectedItem.label}</Text>
              </div>
              <Text type="secondary">
                {selectedItem.description}
              </Text>
            </div>
            <div className="icon">
              <DownOutlined />
            </div>
          </StyledDropdownTitleContainer>
        </Dropdown>
      </StyledDropdownWrapper>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
};

export default App;