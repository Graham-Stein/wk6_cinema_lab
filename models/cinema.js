const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listFilms = function () {
  // function that lists all films in cinema by title
  // const map1 = array1.map(x => x * 2);
  let result = this.films.map(film => film.title);
  return result;
};

Cinema.prototype.findTitle = function (searchFilmTitle) {
  // var found = array.1.find
  return this.films.find((search) => {
    return search.title === searchFilmTitle;
  });
};


module.exports = Cinema;
