$("#form-submit").on("submit", function (evt) {
  evt.preventDefault();
  let movie = $("#movie").val();
  let rating = $("#rating").val();

  let $totalMovie = $(`<li>movie: ${movie}, rating:${rating}</li>`);
  let $removeButton = $("<button> delete </button>");

  $totalMovie.append($removeButton);
  $("#list-of-movies").append($totalMovie);
  $removeButton.on("click", function (evt) {
    $totalMovie.remove();
  });
});
