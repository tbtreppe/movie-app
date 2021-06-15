$("#form-submit").on("submit", function (evt) {
  evt.preventDefault();

  let movie = $("#movie").val();
  let rating = $("#rating").val();
  let $totalMovie = $(`<li>Movie: ${movie} Rating: ${rating}</li>`);
  let $deletebtn = $("<button>delete</button>");

  $totalMovie.append($deletebtn);
  $("#movie-list").append($totalMovie);

  $deletebtn.on("click", function () {
    $totalMovie.remove();
  });
});
