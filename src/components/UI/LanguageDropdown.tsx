import React, { useState } from "react";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";


type StyledDropdownItemProps = {
    selected?: boolean;
};

const StyledDropdownItem = styled.div<StyledDropdownItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 12px 13px 16px;
  cursor: pointer;

  ${({ selected }) =>
        selected &&
        css`
      background-color: #00ABF1;  //TODO: pass color from the props
    //   font-weight: bold;
      border-radius: 4px;
      color: #fff;
    `}
`;
const LanguageDropdown: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const languages = [
        { label: "English", flag: "🇬🇧" },
        { label: "Swedish", flag: "🇸🇪" },
        { label: "Finnish", flag: "🇫🇮" },
    ];

    const menu = (
        <Menu
            selectedKeys={[selectedLanguage]} // Highlight the selected language
            onClick={(e) => setSelectedLanguage(e.key)}
        >
            {languages.map((lang) => (
                <Menu.Item
                    key={lang.label}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 8,
                        padding: 0,
                        width: '173px'
                    }}
                >
                    <StyledDropdownItem
                        selected={selectedLanguage === lang.label}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                        </div>
                        {selectedLanguage === lang.label && <CheckOutlined />}
                    </StyledDropdownItem>
                </Menu.Item>
            ))}
        </Menu>
    );

    const selectedFlag = languages.find((lang) => lang.label === selectedLanguage)?.flag;

    return (
        <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
            <Button>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span>{selectedFlag}</span>
                    <span>{selectedLanguage}</span>
                    {/* <DownOutlined /> */}
                </div>
            </Button>
        </Dropdown>
    );
};

export default LanguageDropdown;
