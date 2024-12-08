import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import {store} from "./store/store";
import GlobalStyle from './styles/GlobalStyles.ts'
import { ConfigProvider } from 'antd';
// import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <ConfigProvider
      theme={{
        "token": {
          "colorPrimary": "#1a5d89",
          "colorInfo": "#1a5d89",
          "wireframe": false,
          "fontFamily": "'IBM Plex Sans', sans-serif", // Add this token
        },
        "components": {
          "Form": {
            "labelRequiredMarkColor": "rgba(255,77,80,0)",
            "colorBorder": "rgb(162,166,166)"
          },
          "Input": {
            "activeBorderColor": "rgb(0,171,241)",
            "addonBg": "rgba(0,0,0,0)",
            "activeShadow": "0 0 0 4px #EBF5FF",
            "paddingBlock": 10,
            "paddingInline": 16,
            "colorBorder": "rgb(162,166,166)"
          },
          "Button": {
            "colorPrimaryHover": "rgb(26,79,114)",
            "lineWidthFocus": 1,
            "defaultShadow": "0 0px 0 rgba(0, 0, 0, 0.02)",
            "primaryShadow": "0 0 0 rgba(5, 145, 255, 0.1)",
            "colorTextDisabled": "rgb(255,255,255)",
            "colorBgContainerDisabled": "rgb(196,225,243)"
          },
          "Checkbox": {
            "colorBorder": "rgb(42,65,102)",
            "colorBgContainerDisabled": "rgb(208,213,221)",
            "colorWhite": "rgb(26,79,114)",
            "colorPrimary": "rgb(255,255,255)",
            "colorBgContainer": "rgb(255,255,255)"
          }
        }
      }}
    >
      <GlobalStyle />
      <App />
    </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
