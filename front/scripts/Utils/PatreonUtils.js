export const IS_PATRON_KEY = 'is-patron';

export function userIsPatron() {
  return localStorage && localStorage.getItem(IS_PATRON_KEY) === 'true';
}