<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <meta charset="utf-8">
    <title>Movies list</title>
  </head>
  <body>
    <h1>My movies</h1>
    <div class="movieswrapper" id="movies">

    </div>
    <a class="btn btn-warning btn-lg" onclick="deleteMovie('panpan')">Encore Plus!</a>
  </body>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


    <script>


    function deleteMovie(title){
      alert("deletion of " + title);
      var entireurl = '10.2.3.25:3000/movie?type=delete&title='+title;
      $.ajax({
          url: entireurl,
          method: 'GET',
      }).fail(function(){
          alert('Erreur API');
      });
    }

</script>
</html>
