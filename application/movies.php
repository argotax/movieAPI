<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="/css/master.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <meta charset="utf-8">
    <title>Movies list</title>
  </head>
  <body>
    <h1>My movies</h1>
    <div class="movieswrapper" id="movies">

    </div>
  </body>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <script>

    function listMovie(offset = 0){
        $.ajax({
            url: 'localhost:3000/movie',
            method: 'GET',
        }).done(function(data){
            data.forEach(function(movie){
              $('#movies').append(
                "<div class='card d-inline-flex' style='width: 18rem;'>\n" +
                "        <img class='card-img-top' src='"+movie.poster+"' >\n" +
                "        <div class='card-body'>\n" +
                "            <h5 class='card-title'>"+movie.titre+"</h5>\n" +
                "            <span>"+movie.année+"</span>\n" +
                "  <a href=\"#\" class=\"btn btn-warning btn-lg\" onclick=\"deleteMovie("+ movie.titre +")\">Encore Plus!</a>"+
                "            <a href='"+launch.links.article_link+"' class='btn btn-primary' target='_blank'>Article</a>\n" +
                "        </div>\n" +
                "    </div>"
              )
            });
        }).fail(function(){
            alert('Erreur API');
        });
    }
    function deleteMovie(title){
      alert("deletion of " + title);
      $.ajax({
          url: 'localhost:3000/movie?type=delete&title='+title,
          method: 'GET',
      });
    }
    listMovie();
</script>
</html>
