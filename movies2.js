$("#form-submit").on("submit", function (evt) {
  evt.preventDefault();
  let movie = $("#movie").val();
  let rating = $("#rating").val();

  let totalMovie = `<li>movie: ${movie}, rating:${rating}</li>`;
  let removeButton = "<button> delete </button>";

  $("#list-of-movies").append(totalMovie);
  $("#list-of-movies").append(removeButton);
  $(removeButton).on("click", function (evt) {
    $(evt).closest("#list-of-movies").remove();
    console.log(evt);
  });
});
