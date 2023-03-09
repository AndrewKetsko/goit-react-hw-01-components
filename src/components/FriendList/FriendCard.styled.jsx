import styled from '@emotion/styled';

export const Item = styled.li`
list-style: none;
background: white;
display: flex;
align-items: center;
margin:10px;
padding:5px;
width:300px;
border-radius: 5px;
box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const Name = styled.p`
font-size: 24px;
font-weight: 500;
margin-left:10px;
`;

export const Avatar = styled.img`
height: 70px;
background: lightgrey;
border-radius: 10px;
padding:5px;
margin-left:10px;
`;

export const Status = styled.span`
height: 20px;
width: 20px;
border-radius: 50%;
overflow: hidden;
`;