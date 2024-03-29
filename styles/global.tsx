import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
    font-family: Muli;
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 1.8rem;
    color: #222222;
    background-color: #111;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: Raleway;
    color: #f7efe5;
    font-weight: 300;
  }
  
  h1 {
    font-size: 4rem;
  }
  
  a {
    text-decoration: none;
    color: white;
  }
  
  #page {
    min-height: calc(100vh - 3rem);
    display: flex;
    flex-direction: column;
  }
  
  #content-page {
    flex-grow: 1;
  }
  
  .clearfix {
    overflow: auto;
  }
  
  /* .container {
    position: relative;
  }
   */
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  ul {
    list-style: none;
  }
  
  section#main svg.fa-chevron-down {
    animation-duration: 2s;
    animation-name: zoom;
    animation-iteration-count: infinite;
    animation-direction: normal;
    height: 19px;
    margin-top: 50px;
  }
  
  @keyframes zoom {
    25% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.5);
    }
  }
  @keyframes activeTextColor {
    from {
      color: #FFFFF0;
    }
    to {
      color: #111;
    }
  }
  @keyframes activeBackgroundColor {
    from {
      background-color: #111;
    }
    to {
      background-color: snow;
      border-radius: 2px 2px 0 0;
    }
  }
  @keyframes borderBottomForm {
    from {
      border-bottom: 1px solid #777;
    }
    to {
      border-bottom: 1px solid #bfbfbf;
    }
  }
  @keyframes autoSlide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-91px * 8));
    }
  }
  @font-face {
    font-family: Muli;
    src: url("./fonts/Muli/Muli-VariableFont_wght.ttf");
  }
  @font-face {
    font-family: Raleway;
    src: url("./fonts/Raleway/Raleway-Thin.ttf");
    font-weight: 100;
  }
  @font-face {
    font-family: Raleway;
    src: url("./fonts/Raleway/Raleway-ExtraLight.ttf");
    font-weight: 200;
  }
  @font-face {
    font-family: Raleway;
    src: url("./fonts/Raleway/Raleway-Light.ttf");
    font-weight: 300;
  }
  @font-face {
    font-family: Raleway;
    src: url("./fonts/Raleway/Raleway-Bold.ttf");
    font-weight: 700;
  }
  header {
    top: 0;
    position: relative;
    overflow: hidden;
    z-index: 3;
    letter-spacing: 0.1rem;
  }
  header div.header {
    display: flex;
    align-items: center;
    z-index: 1;
    width: 100%;
    height: 8rem;
    background-color: #111;
  }
  header .active {
    animation: activeBackgroundColor 0.5s;
    animation-fill-mode: forwards;
  }
  header .active a {
    animation: activeTextColor 0.5s;
    animation-fill-mode: forwards;
  }
  header a:hover {
    color: silver;
  }
  header h1 {
    font-weight: 200;
    margin-left: 3rem;
  }
  header ul {
    font-weight: 300;
  }
  header.sticky {
    position: sticky;
  }
  header nav {
    margin-left: auto;
    margin-right: 3rem;
    height: 100%;
  }
  header nav ul, header nav li {
    display: flex;
    height: 100%;
    align-items: center;
  }
  header nav a {
    padding: 1rem;
    display: block;
    text-align: center;
    width: 12rem;
  }
  header.sticky .header-alpha {
    opacity: 0.5;
    transform: translateY(-100%);
    transition: none;
  }
  header .header-beta {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    transform: translateY(-100%);
  }
  header.sticky .header-beta {
    opacity: 1;
    transform: translateY(0);
    transition: 0.35s ease-out;
  }
  header .fake-header {
    height: 1px;
    position: relative;
  }
  @media (max-width: 715px) {
    header {
      display: none;
    }
  }
  
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 5rem;
  }
  section .top-title {
    margin: 5rem 0 5rem;
    flex-basis: 100%;
    text-align: center;
  }
  section#main {
    align-items: center;
    height: 100vh;
    background-color: #222222;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='385' height='192.5' viewBox='0 0 1600 800'%3E%3Cpath fill='%23f7efe5' d='M1102.5 734.8c2.5-1.2 24.8-8.6 25.6-7.5.5.7-3.9 23.8-4.6 24.5C1123.3 752.1 1107.5 739.5 1102.5 734.8zM1226.3 229.1c0-.1-4.9-9.4-7-14.2-.1-.3-.3-1.1-.4-1.6-.1-.4-.3-.7-.6-.9-.3-.2-.6-.1-.8.1l-13.1 12.3c0 0 0 0 0 0-.2.2-.3.5-.4.8 0 .3 0 .7.2 1 .1.1 1.4 2.5 2.1 3.6 2.4 3.7 6.5 12.1 6.5 12.2.2.3.4.5.7.6.3 0 .5-.1.7-.3 0 0 1.8-2.5 2.7-3.6 1.5-1.6 3-3.2 4.6-4.7 1.2-1.2 1.6-1.4 2.1-1.6.5-.3 1.1-.5 2.5-1.9C1226.5 230.4 1226.6 229.6 1226.3 229.1zM33 770.3C33 770.3 33 770.3 33 770.3c0-.7-.5-1.2-1.2-1.2-.1 0-.3 0-.4.1-1.6.2-14.3.1-22.2 0-.3 0-.6.1-.9.4-.2.2-.4.5-.4.9 0 .2 0 4.9.1 5.9l.4 13.6c0 .3.2.6.4.9.2.2.5.3.8.3 0 0 .1 0 .1 0 7.3-.7 14.7-.9 22-.6.3 0 .7-.1.9-.3.2-.2.4-.6.4-.9C32.9 783.3 32.9 776.2 33 770.3z'/%3E%3Cpath fill='%23fd5825' d='M171.1 383.4c1.3-2.5 14.3-22 15.6-21.6.8.3 11.5 21.2 11.5 22.1C198.1 384.2 177.9 384 171.1 383.4zM596.4 711.8c-.1-.1-6.7-8.2-9.7-12.5-.2-.3-.5-1-.7-1.5-.2-.4-.4-.7-.7-.8-.3-.1-.6 0-.8.3L574 712c0 0 0 0 0 0-.2.2-.2.5-.2.9 0 .3.2.7.4.9.1.1 1.8 2.2 2.8 3.1 3.1 3.1 8.8 10.5 8.9 10.6.2.3.5.4.8.4.3 0 .5-.2.6-.5 0 0 1.2-2.8 2-4.1 1.1-1.9 2.3-3.7 3.5-5.5.9-1.4 1.3-1.7 1.7-2 .5-.4 1-.7 2.1-2.4C596.9 713.1 596.8 712.3 596.4 711.8zM727.5 179.9C727.5 179.9 727.5 179.9 727.5 179.9c.6.2 1.3-.2 1.4-.8 0-.1 0-.2 0-.4.2-1.4 2.8-12.6 4.5-19.5.1-.3 0-.6-.2-.8-.2-.3-.5-.4-.8-.5-.2 0-4.7-1.1-5.7-1.3l-13.4-2.7c-.3-.1-.7 0-.9.2-.2.2-.4.4-.5.6 0 0 0 .1 0 .1-.8 6.5-2.2 13.1-3.9 19.4-.1.3 0 .6.2.9.2.3.5.4.8.5C714.8 176.9 721.7 178.5 727.5 179.9zM728.5 178.1c-.1-.1-.2-.2-.4-.2C728.3 177.9 728.4 178 728.5 178.1z'/%3E%3Cg fill-opacity='0.26' fill='%23FFF'%3E%3Cpath d='M699.6 472.7c-1.5 0-2.8-.8-3.5-2.3-.8-1.9 0-4.2 1.9-5 3.7-1.6 6.8-4.7 8.4-8.5 1.6-3.8 1.7-8.1.2-11.9-.3-.9-.8-1.8-1.2-2.8-.8-1.7-1.8-3.7-2.3-5.9-.9-4.1-.2-8.6 2-12.8 1.7-3.1 4.1-6.1 7.6-9.1 1.6-1.4 4-1.2 5.3.4 1.4 1.6 1.2 4-.4 5.3-2.8 2.5-4.7 4.7-5.9 7-1.4 2.6-1.9 5.3-1.3 7.6.3 1.4 1 2.8 1.7 4.3.5 1.1 1 2.2 1.5 3.3 2.1 5.6 2 12-.3 17.6-2.3 5.5-6.8 10.1-12.3 12.5C700.6 472.6 700.1 472.7 699.6 472.7zM740.4 421.4c1.5-.2 3 .5 3.8 1.9 1.1 1.8.4 4.2-1.4 5.3-3.7 2.1-6.4 5.6-7.6 9.5-1.2 4-.8 8.4 1.1 12.1.4.9 1 1.7 1.6 2.7 1 1.7 2.2 3.5 3 5.7 1.4 4 1.2 8.7-.6 13.2-1.4 3.4-3.5 6.6-6.8 10.1-1.5 1.6-3.9 1.7-5.5.2-1.6-1.4-1.7-3.9-.2-5.4 2.6-2.8 4.3-5.3 5.3-7.7 1.1-2.8 1.3-5.6.5-7.9-.5-1.3-1.3-2.7-2.2-4.1-.6-1-1.3-2.1-1.9-3.2-2.8-5.4-3.4-11.9-1.7-17.8 1.8-5.9 5.8-11 11.2-14C739.4 421.6 739.9 421.4 740.4 421.4zM261.3 590.9c5.7 6.8 9 15.7 9.4 22.4.5 7.3-2.4 16.4-10.2 20.4-3 1.5-6.7 2.2-11.2 2.2-7.9-.1-12.9-2.9-15.4-8.4-2.1-4.7-2.3-11.4 1.8-15.9 3.2-3.5 7.8-4.1 11.2-1.6 1.2.9 1.5 2.7.6 3.9-.9 1.2-2.7 1.5-3.9.6-1.8-1.3-3.6.6-3.8.8-2.4 2.6-2.1 7-.8 9.9 1.5 3.4 4.7 5 10.4 5.1 3.6 0 6.4-.5 8.6-1.6 4.7-2.4 7.7-8.6 7.2-15-.5-7.3-5.3-18.2-13-23.9-4.2-3.1-8.5-4.1-12.9-3.1-3.1.7-6.2 2.4-9.7 5-6.6 5.1-11.7 11.8-14.2 19-2.7 7.7-2.1 15.8 1.9 23.9.7 1.4.1 3.1-1.3 3.7-1.4.7-3.1.1-3.7-1.3-4.6-9.4-5.4-19.2-2.2-28.2 2.9-8.2 8.6-15.9 16.1-21.6 4.1-3.1 8-5.1 11.8-6 6-1.4 12 0 17.5 4C257.6 586.9 259.6 588.8 261.3 590.9z'/%3E%3Ccircle cx='1013.7' cy='153.9' r='7.1'/%3E%3Ccircle cx='1024.3' cy='132.1' r='7.1'/%3E%3Ccircle cx='1037.3' cy='148.9' r='7.1'/%3E%3Cpath d='M1508.7 297.2c-4.8-5.4-9.7-10.8-14.8-16.2 5.6-5.6 11.1-11.5 15.6-18.2 1.2-1.7.7-4.1-1-5.2-1.7-1.2-4.1-.7-5.2 1-4.2 6.2-9.1 11.6-14.5 16.9-4.8-5-9.7-10-14.7-14.9-1.5-1.5-3.9-1.5-5.3 0-1.5 1.5-1.5 3.9 0 5.3 4.9 4.8 9.7 9.8 14.5 14.8-1.1 1.1-2.3 2.2-3.5 3.2-4.1 3.8-8.4 7.8-12.4 12-1.4 1.5-1.4 3.8 0 5.3 0 0 0 0 0 0 1.5 1.4 3.9 1.4 5.3-.1 3.9-4 8.1-7.9 12.1-11.7 1.2-1.1 2.3-2.2 3.5-3.3 4.9 5.3 9.8 10.6 14.6 15.9.1.1.1.1.2.2 1.4 1.4 3.7 1.5 5.2.2C1510 301.2 1510.1 298.8 1508.7 297.2zM327.6 248.6l-.4-2.6c-1.5-11.1-2.2-23.2-2.3-37 0-5.5 0-11.5.2-18.5 0-.7 0-1.5 0-2.3 0-5 0-11.2 3.9-13.5 2.2-1.3 5.1-1 8.5.9 5.7 3.1 13.2 8.7 17.5 14.9 5.5 7.8 7.3 16.9 5 25.7-3.2 12.3-15 31-30 32.1L327.6 248.6zM332.1 179.2c-.2 0-.3 0-.4.1-.1.1-.7.5-1.1 2.7-.3 1.9-.3 4.2-.3 6.3 0 .8 0 1.7 0 2.4-.2 6.9-.2 12.8-.2 18.3.1 12.5.7 23.5 2 33.7 11-2.7 20.4-18.1 23-27.8 1.9-7.2.4-14.8-4.2-21.3l0 0C347 188.1 340 183 335 180.3 333.6 179.5 332.6 179.2 332.1 179.2zM516.3 60.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C517.3 60.4 516.8 60.8 516.3 60.8zM506.1 70.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C506.4 70.5 506.2 70.5 506.1 70.5zM494.1 64.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C494.7 64.3 494.4 64.4 494.1 64.4zM500.5 55.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C500.9 55.3 500.7 55.3 500.5 55.3zM506.7 55c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C507.4 54.8 507.1 55 506.7 55zM1029.3 382.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C1030.3 382.4 1029.8 382.8 1029.3 382.8zM1019.1 392.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C1019.4 392.5 1019.2 392.5 1019.1 392.5zM1007.1 386.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C1007.7 386.3 1007.4 386.4 1007.1 386.4zM1013.5 377.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C1013.9 377.3 1013.7 377.3 1013.5 377.3zM1019.7 377c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C1020.4 376.8 1020.1 377 1019.7 377zM1329.7 573.4c-1.4 0-2.9-.2-4.5-.7-8.4-2.7-16.6-12.7-18.7-20-.4-1.4-.7-2.9-.9-4.4-8.1 3.3-15.5 10.6-15.4 21 0 1.5-1.2 2.7-2.7 2.8 0 0 0 0 0 0-1.5 0-2.7-1.2-2.7-2.7-.1-6.7 2.4-12.9 7-18 3.6-4 8.4-7.1 13.7-8.8.5-6.5 3.1-12.9 7.4-17.4 7-7.4 18.2-8.9 27.3-10.1l.7-.1c1.5-.2 2.9.9 3.1 2.3.2 1.5-.9 2.9-2.3 3.1l-.7.1c-8.6 1.2-18.4 2.5-24 8.4-3 3.2-5 7.7-5.7 12.4 7.9-1 17.7 1.3 24.3 5.7 4.3 2.9 7.1 7.8 7.2 12.7.2 4.3-1.7 8.3-5.2 11.1C1335.2 572.4 1332.6 573.4 1329.7 573.4zM1311 546.7c.1 1.5.4 3 .8 4.4 1.7 5.8 8.7 14.2 15.1 16.3 2.8.9 5.1.5 7.2-1.1 2.7-2.1 3.2-4.8 3.1-6.6-.1-3.2-2-6.4-4.8-8.3C1326.7 547.5 1317.7 545.6 1311 546.7z'/%3E%3C/g%3E%3C/svg%3E");
    color: white;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 0;
  }
  section#main i {
    margin-top: 5rem;
  }
  section#main h1 {
    color: white;
    flex: 0 1 100%;
    margin-bottom: 3rem;
  }
  section#main p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 2rem;
  }
  section#main .inner {
    letter-spacing: 0.42rem;
  }
  section .anchor {
    position: relative;
    flex-basis: 100%;
  }
  section .anchor a {
    position: absolute;
    left: 0;
    top: -8rem;
  }/*
  section#about {
    align-content: flex-start;
    // Remove space betwen element on secondary axis 
    background-color: #3fabaf;
  }
  section#about h2 {
    font-size: 4rem;
  }
  section#about h3 {
    font-size: 2.7rem;
  }
  section#about div.content {
    width: 33%;
  }
  section#about div.content h3 {
    margin-bottom: 2rem;
  }
  section#about div.content img {
    float: left;
    margin-right: 1rem;
  }
  section#about div.content p {
    width: 70%;
    text-align: justify;
  }*/
  /* section#certifications {
    background-color: ivory;
  }
  section#certifications h2, section#certifications h3 {
    color: #222222;
  }
  section#certifications div.content {
    width: 66%;
  }
  @media (max-width: 715px) {
    section#certifications div.content {
      width: 80%;
    }
  }
  @media (max-width: 715px) {
    section#certifications div.card img {
      margin-right: 1rem;
    }
  } */
  section#contact {
    background-color: #222222;
  }
  section#contact div.content {
    width: 66%;
  }
  section#contact div.inner {
    width: calc((100% - 1rem ) / 2);
    display: inline-block;
  }
  @media (max-width: 715px) {
    section#contact div.content, section#contact form {
      width: 80%;
    }
    section#contact div.inner, section#contact input[type=submit] {
      width: 100%;
    }
  }
  /* section#projects {
    background-color: #fcf5ef;
  } */
  /* section#projects .square {
    display: inline-block;
    margin-right: 1rem;
  }
  section#projects .square img {
    max-width: 100%;
    height: 20rem;
  }
  section#projects div.content {
    width: 66%;
    text-align: center;
  }
  section#projects h2, section#projects h3 {
    color: #222222;
  }
  section#projects .container .overlay h3 {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 33%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  } */
  /* @media (max-width: 715px) {
    section#about div.content {
      flex-basis: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
    }
    section#about .content h3 {
      margin: 2rem 0;
    }
  } */
  
  footer {
    width: 100%;
    background-color: #111;
    padding: 10rem 0;
  }
  footer p {
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 100;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.5);
    padding-top: 2rem;
    width: 33%;
    margin: 0 auto;
  }
  @media (max-width: 715px) {
    footer p {
      width: 80%;
    }
  }
  
  @media (max-width: 715px) {
    .container.skills {
      /* height: 15rem;
      width: 95%;
      margin-top: 2rem;
      text-align: center; */
    }
  }
  /*.container.skills .main-slider {
     width: 42rem;
    overflow: hidden;
    background: #000000a1;
    box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.66);
    margin-top: 2rem;
    display: flex;
    position: relative;
  } */
  /* @media (max-width: 715px) {
    .container.skills .main-slider {
      position: absolute;
      width: 100%;
    }
  } */
  /* .container.skills .main-slider::before, .container.skills .main-slider::after {
    background: linear-gradient(to right, #00000030 0%, rgba(255, 255, 255, 0) 100%);
    content: "";
    height: 100%;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  .container.skills .main-slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
  .container.skills .main-slider::before {
    left: 0;
    top: 0;
  }
  .container.skills .main-slider .customer-logos.slider {
    animation-name: autoSlide;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    display: flex;
    padding: 1rem;
  }
  .container.skills .main-slider .customer-logos.slider .slide {
    border-left: 1px solid rgba(255, 255, 255, 0.603);
  }
  .container.skills .main-slider .customer-logos.slider .slide img {
    padding: 0 10px;
    width: 70px;
  }
  
  .profile-image {
    border-radius: 50%;
  } */
  
  div.content a.button, input[type=submit] {
    display: block;
    margin: 0 auto;
    background-color: #fd5825;
    border: 0;
    padding: 2rem;
    font-weight: 700;
    font-size: 2rem;
    border-radius: 0.5rem;
    text-align: center;
    width: 50%;
    cursor: pointer;
  }
  @media (max-width: 715px) {
    div.content a.button, input[type=submit] {
      width: 80%;
    }
  }
  
  /* div.card {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 1rem;
  }
  div.card h3 {
    margin: 0 0rem 4rem 2rem;
  }
  div.card img {
    width: 15%;
    float: left;
    margin-right: 5rem;
  } */
  
  form {
    width: 50%;
  }
  form label {
    color: white;
    display: block;
    margin-bottom: 1rem;
    font-weight: 100;
  }
  form input {
    width: 100%;
    height: 3rem;
    margin-bottom: 2rem;
    border: 0;
    border-bottom: 1px solid #777;
    background-color: transparent;
    color: white;
    font-family: Muli;
    outline: none;
    font-weight: 400;
  }
  form input:focus {
    animation: borderBottomForm 0.3s ease;
    animation-fill-mode: forwards;
  }
  form input[type=submit] {
    background-color: white;
    color: #222222;
    vertical-align: top;
    padding: 0.3rem 0;
    width: 33%;
    font-weight: 400;
  }
  
  .container:hover .overlay {
    opacity: 0.8;
  }
  
  .overlay {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: #222222;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.5s ease;
  }
  
  div.content a.button.overlay {
    display: inline-block;
    position: relative;
    padding: 1rem 0 0 0;
    font-size: 1rem;
    border-radius: 0.2rem;
    width: 25%;
    height: 10%;
    border: 0.1rem solid white;
    background-color: transparent;
    margin: 0 1rem;
  }  
`;

export default GlobalStyle;
