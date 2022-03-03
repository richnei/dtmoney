import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #F0F2F5;
        --red: #E52E40;
        --green: #33cc95;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-litle: #363F5F;
        --text-body: #969CB5;

        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (padrão Desktop)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 8.6;
        cursor: not-allowed;
    }







`