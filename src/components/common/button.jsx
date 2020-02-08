import styled from 'styled-components';

export const ButtonContainer=styled.button`
font-size:1.43rem;
text-transform:capitalize;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-radius:0.5rem;
color:${prop=>prop.cart? "var(--mainYellow)":"var(--lightBlue)"};
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.3rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
background:var(--lightBlue);
color:var(--mainBlue); 
}
&:focus{
    outline:none;
}
`;