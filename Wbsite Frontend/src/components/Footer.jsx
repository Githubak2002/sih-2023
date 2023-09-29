// import React from "react";
// import { Box, Column, Container, CopyrightText, EmailInput, FooterContainer, FooterLink, Heading, Row, SubmitButton, SubscriptionSection } from '../components/style'


// const Footer = () => {
// return (
// 	<Box>
// 	<h1 style={{ color: "White",
// 				textAlign: "center",
// 				marginTop: "-50px" }}>
// 		VERYWELL MIND
// 	</h1>
// 	<Container>


// 	    <Column>
// 			<SubscriptionSection>
// 			<Heading>Daily Tips for a Healthy Mind to Your Inbox</Heading>
// 				<div style={{ display: 'flex', alignItems: 'center' }}>
// 					<EmailInput
// 					type="email"
// 					placeholder="Enter your email"
// 					/>
// 					<SubmitButton type="submit">SIGN UP</SubmitButton>
// 				</div>
// 			</SubscriptionSection>	
// 		</Column>


import React from "react";
import { Box, Column, Container, CopyrightText, EmailInput, FooterContainer, FooterLink, Heading, Row, SubmitButton, SubscriptionSection } from "./style";


const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "White",
				textAlign: "center",
				marginTop: "-50px" }}>
		VERYWELL MIND
	</h1>
	<Container>


	    <Column>
			<SubscriptionSection>
			<Heading>Daily Tips for a Healthy Mind to Your Inbox</Heading>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<EmailInput
					type="email"
					placeholder="Enter your email"
					/>
					<SubmitButton type="submit">SIGN UP</SubmitButton>
				</div>
			</SubscriptionSection>	
		</Column>
    <Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Follow Us</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
      </FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
			
		</Column>

		</Row>

		<FooterContainer>
            <CopyrightText>&copy; {new Date().getFullYear()} Dotdash Media, Inc. — All rights reserved</CopyrightText>
        </FooterContainer>
		
	</Container>
	   
	</Box>
	
);
};

export default Footer;