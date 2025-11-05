function escapeForCharClass(s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
7}
export { escapeForCharClass };