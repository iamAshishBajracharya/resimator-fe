import React, { useRef, useState } from 'react';
import { Dropdown, Menu, Tabs, Typography } from 'antd';
import type { TabsProps } from 'antd';
import MeterReadingTab from '../widgets/MeterReadingTab';
import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
const { Text } = Typography


const StyledDropdownWrapper = styled.div`
  // padding: 20px;
`

const StyledDropdownTitleContainer = styled.div`
display:flex;
alignItems: center;
.text{
margin-right: 16px;}
`

const StyledTabsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  .tabs-container {
    flex: 1;
    overflow-x: auto; /* Enable horizontal scrolling */
    white-space: nowrap; /* Prevent tabs from wrapping */
    scrollbar-width: none; /* Hide scrollbar in modern browsers */
    -webkit-overflow-scrolling: touch; /* Smooth scrolling for touch devices */
  }

  .tabs-container::-webkit-scrollbar {
    display: none; /* Hide scrollbar for WebKit browsers */
  }

  .scroll-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: white;
    border: none;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &.left-arrow {
      left: 8px;
    }

    &.right-arrow {
      right: 8px;
    }

    &:hover {
      background-color: #f0f0f0;
    }
  }

  .ant-tabs {
    width: 100%;
  }

  .ant-tabs-nav {
    border: 1px solid #f6f7f7;
    overflow: hidden; /* Prevent tabs from overflowing container */
    margin-bottom: 48px;
  }

  .ant-tabs-nav-list {
    display: flex;
    gap: 16px; /* Space between tabs */
  }

  .ant-tabs-tab {
    flex-shrink: 0; /* Prevent shrinking */
  }
`;

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
  {
    key: '4',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '5',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '6',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '7',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '8',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '9',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '10',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '11',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '12',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '13',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '14',
    label: 'Tab 3',
    children: 'Content of Tab Pane 1',
  },

];

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState({
    label: 'Tranquil Properties Inc.',
    description: 'Housing company',
  });
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 200; // Pixels to scroll
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  const menu = (
    <Menu style={{ width: 400 }}>
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
      <StyledTabsWrapper>
        {/* <button className="scroll-arrow left-arrow" onClick={() => scrollTabs('left')}>
          <LeftOutlined />test
        </button> */}
        <div className="tabs-container" ref={tabsRef}>
          <Tabs defaultActiveKey="1" items={items} />
        </div>
        {/* <button className="scroll-arrow right-arrow" onClick={() => scrollTabs('right')}>
          <RightOutlined />
        </button> */}
      </StyledTabsWrapper>
    </>
  )
};

export default App;