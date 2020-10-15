
export const dismissSnack = (state, action) => {
	const { payload } = action;
	return {
		...state,
		error: false,
		snack: undefined,
		errors: undefined,
		...payload
	}
}
