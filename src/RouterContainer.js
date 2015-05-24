let _router = null;
function set(router) {
	_router = router;
}
function get() {
	return _router;
}
export default {get, set};
