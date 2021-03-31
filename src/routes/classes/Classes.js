import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import Schedule from "./components/Schedule";

import { getClasses } from "../../actions";
import axios from "axios";

const Classes = ({ getClasses }) => {
	const classes = useSelector((state) => state.classes);
	const locations = useSelector((state) => state.locations);

	// fetch api classes
	useEffect(() => {
		if (classes.length === 0) getClasses();
	}, [getClasses, classes, locations]);

	return (
		<>
			<Banner N={2} />
			<SearchForm />
			<Schedule classes={classes} />
		</>
	);
};

export default connect(null, {
	getClasses,
})(Classes);
