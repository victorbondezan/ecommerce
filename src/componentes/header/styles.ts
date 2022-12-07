import styled from "styled-components";

export const Container = styled.div`

height: 100px;
background: ${props => props.theme.colors.primary};
color: #FFF;
display: flex;
align-items: center;
padding: 0 75px;
justify-content: space-between;
/* h1{   
    img{
        height: 205px;
        width: 180px;
           
    }
} */
ul{ 
    position: absolute;
    top: 35px;
    right: 0;
    padding: 0 250px;
    li{
        display: inline;
        margin: 0 0 0 20px;
        font-size: 24px;
    }
    li:hover { /*passar do mause*/
    color: rgb(201, 154, 92);
    } 
}

       
`;

