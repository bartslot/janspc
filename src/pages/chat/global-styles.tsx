import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
            "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #4a4a4a;
        overflow: hidden;
    }
    #login-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    background: url('/assets/images/windows7-bg.jpg') no-repeat center center fixed;
    background-size: cover;
    }

    #login-box {
        background-color: rgba(255, 255, 255, 0.9);
        padding: 40px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    }

    #profile-box {
        margin-bottom: 20px;
    }

    #profile-box img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    #profile-box p {
        margin: 0;
        font-weight: bold;
        font-size: 1.2em;
    }

    #login-box input {
        padding: 10px;
        width: calc(100% - 22px);
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: inherit;
        font-weight: 400;
    }

    a,
    a:active,
    a:hover {
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    button,
    input {
        border: none;
        background-color: transparent;
    }

    ul {
        list-style: none;
    }

    ::-webkit-scrollbar {
        width: 6px !important;
        height: 6px !important;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
    }

    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
    }
`;

export default GlobalStyle;
