import styled from "@emotion/styled";

export const Profiler = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 240px;
border: 2px solid black;
border-radius: 20px;
overflow: hidden;
margin:50px;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Avatar = styled.img`
height: 100px;
border: 2px solid black;
border-radius: 50%;
margin-top: 20px;
`;

export const Name = styled.p`
font-size: 20px;
font-weight: 700;
margin-top: 30px;
margin-bottom: 5px;
`;

export const Tag = styled.p`
color: darkgrey;
margin-top: 5px;
margin-bottom: 5px;
`;

export const Location = styled.p`
color: darkgrey;
margin-top: 5px;
margin-bottom: 30px;
`;

export const Stats = styled.ul`
display: flex;
justify-content: space-between;
padding:0;
margin:0;
`;

export const StatsEl = styled.li`
border: 1px solid grey;
width:80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 0;
`;

export const Label = styled.span`
font-size: 10px;
`;

export const Quantity = styled.span`
font-weight: 700;
`;