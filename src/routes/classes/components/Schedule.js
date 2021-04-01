import React from "react";
import styled from "styled-components";
import Class from "./Class";
const Schedule = (props) => {
	return (
		<Eight>
			{props.classes.map((opt) => {
				return <Class key={opt.id} info={opt} />;
			})}
		</Eight>
	);
};

const Eight = styled.div`
	display: flex;
	height: 100rem;
	flex-direction: column;
	align-items: stretch;
	flex-wrap: wrap;
	background-color: #2e3450;
	max-width: 100vw;
	@media (max-width: 980px) {
		height: 80em;
		flex-wrap: nowrap;
	}
`;

export default Schedule;
