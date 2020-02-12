import React from "react";
import { Wrapper, Title, Subtitle } from "../component/styles";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import styled from "styled-components";
import backgroundImg from "../../img/sky2.png";
import { Link } from "react-router-dom";

const Background = styled.div`
	background-image: url(${backgroundImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: left top;
	height: 100%;
`;
const BackgroundOverlay = styled.div`
	background-color: rgb(255, 255, 255, 0.09);
	height: 100%;
`;
const Button = styled.div`
	background: black;
	border: 1px solid green;
	padding: 10px 20px;
`;
const TitleWrapper = styled.div`
	margin-top: 15em;
	font-weight: bold;
	text-shadow: 3px 4px 0 rgb(15, 14, 14);
	line-height: 55px;
	font-family: "Lato", SansSerif;
`;
export const Home = () => {
	return (
		<Background>
			<BackgroundOverlay>
				<Wrapper>
					<div>
						<TitleWrapper>
							<Title>Taskraiders Job Search</Title>
						</TitleWrapper>
						<Subtitle>Start your search here!</Subtitle>
						{/* <GetJobButton background="#ffffff00"/> */}
						<Link to="/jobs">
							<Button>Search</Button>
						</Link>
					</div>
				</Wrapper>
			</BackgroundOverlay>
		</Background>
	);
};
