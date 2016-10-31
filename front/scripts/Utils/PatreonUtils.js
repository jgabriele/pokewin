const IS_PATRON_KEY = 'is-patron';

export default {
  userIsPatron() {
    return localStorage && localStorage.getItem(IS_PATRON_KEY) === 'true';
  }
}