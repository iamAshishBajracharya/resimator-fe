import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';

type CustomCheckboxProps = {
    children: ReactNode;
  };

const CustomCheckboxWrapper = styled.div`
  .ant-checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid #1a5d89; /* Blue border */
    border-radius: 4px; /* Rounded corners */
    background-color: white; /* Light blue background when checked */
    display: flex;
    justify-content: center;
    align-items: center;

    .ant-checkbox-inner {
      width: 20px;
      height: 20px;
      background: transparent; /* Transparent background */
    }

    &.ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: white; /* Light blue background */
        border: none;
      }

      &::after {
        border: none; /* Remove default focus ring */
      }
    }
  }

  .ant-checkbox-input {
    width: 20px;
    height: 20px;
  }

  label {
    font-size: 16px; /* Adjust text size */
    color: #333; /* Dark text color */
    margin-left: 8px; /* Spacing between checkbox and text */
  }
`;

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ children }) => {
    return (
      <CustomCheckboxWrapper>
        <Checkbox>{children}</Checkbox>
      </CustomCheckboxWrapper>
    );
  };

export default CustomCheckbox;
