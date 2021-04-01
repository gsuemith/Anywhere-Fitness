import {
	CHANGE_CLASS_FORM,
	FETCH_CLASSES_FAIL,
	FETCH_CLASSES_START,
	FETCH_CLASSES_SUCCESS,
	LOGOUT,
} from "../actions";

import { initialState } from "./initialState";

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHANGE_CLASS_FORM:
			return {
				...state,
				createClassForm: {
					...state.createClassForm,
					[payload.name]: payload.value,
				},
			};

		case FETCH_CLASSES_START:
			return {
				...state,
				isFetching: true,
				error: "",
			};

		case FETCH_CLASSES_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: "",
				classes: payload.classes,
				locations: payload.locations,
			};

		case FETCH_CLASSES_FAIL:
			return {
				...state,
				isFetching: false,
				error: payload,
			};
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				user: null,
			};
		default:
			return state;
	}
};

export default reducer;
