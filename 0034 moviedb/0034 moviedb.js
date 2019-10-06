var movies = [];
movies.push({
  title : "In Bruges",
  rating : 5,
  hasWatched : true
});
movies.push({
  title : "Frozen",
  rating : 4.5,
  hasWatched : false
});
movies.push({
  title : "Mad Max Fury Road",
  rating : 5,
  hasWatched : true
});
movies.push({
  title : "Les Miserables",
  rating : 3.5,
  hasWatched : false
});

movies.forEach(movie => {
  var watchedMsg;
  if (movie.hasWatched) {
    watchedMsg = " seen \"";
  } else {
    watchedMsg = " not seen \"";
  }
  console.log("You have" + watchedMsg + movie.title + "\" - " + movie.rating + " starts");
});