import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: teal;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(2, 1fr);
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: grey;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;


export const FooterContainer = styled.footer`
  padding: 10px;
  text-align: center;
`;

export const CopyrightText = styled.p`
  font-size: 24px;
  color: white;
`;


export const SubscriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;


export const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  &:hover {
	background-color: darkred;
}
`;