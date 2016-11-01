
let _config = {}

export function setSorting(value) {
  _config.sorting = value
}

export function getSorting() {
  return _config.sorting
}

export function init() {
  _config.sorting = localStorage.getItem('pokemon-sorting')
}