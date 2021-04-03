import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import Schedule from "./components/Schedule";

import { getClasses } from "../../actions";

const Classes = ({ getClasses }) => {
	const classes = useSelector((state) => state.classes);
	const results = useSelector((state) => state.searchResults)
	const locations = useSelector((state) => state.locations);
	const user = useSelector(state => state.user);

	// fetch api classes
	useEffect(() => {
		if (classes.length === 0) getClasses();
	}, [getClasses, classes, locations]);

	return (
		<>
			<Banner N={2} />
			<SearchForm />
			<Schedule classes={results.length ? results:classes} user={user}/>
		</>
	);
};

export default connect(null, {
	getClasses,
})(Classes);
