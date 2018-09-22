export default function (val) {
	let search = val.length === 0? null:val;
	return {
		type:'SEARCH',
		search,
	}
}