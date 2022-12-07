import styled from "styled-components";

export const Container = styled.div`
    width: 940px;
    margin: 0px auto;
    padding: 50px 0; 
    li {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        width: 30%;
        margin: 0 1.5%;
        padding: 40px 10px;
        box-sizing: border-box; 
        border: 2px solid black ; 
        border-radius: 10px; 
    }
    
    li:hover {
        border-color: #c99a5c; 
        cursor: pointer; 
    li:hover h2{ 
        font-size: 34px;   
    }
    h2 {
        font-weight: bold;
        font-size: 30px;
        color: #c99a5c; 
        text-decoration: wavy underline 
    }
    p {
        font-size: 18px;
        color: #c99a5c; 
    }
    p {
        font-weight: bold;
        margin: 10px 0 0; 
        font-size: 21px; 
        color: #c99a5c;   
    }
`;

