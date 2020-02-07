$(document).ready(function(){	

    $("#myform").submit(function(){
 
          var search = $("#books").val();
          if(search == "")
          {
              alert("Please enter something in the field");
          }
          else{		
          var url = "";
          var img = "";
       var title = "";
       var author = "";
 
          $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){
 
           for(i=0;i<response.items.length;i++)
           {
            title=$('<div class="col-lg-8 ml-auto"><p class="lead"><h5>' + response.items[i].volumeInfo.title + '</h5></p></div>');  
            author=$('<div class="col-lg-8 ml-auto"><p class="lead"> By: ' + response.items[i].volumeInfo.authors + '</p></div>');
            img = $('<img class="card col-lg-2 container aligning z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><div class="col-lg-8 ml-auto"><button class="btn btn-primary">Read More</button></a></div>'); 	
            url= response.items[i].volumeInfo.imageLinks.thumbnail;
            img.attr('src', url);
            title.appendTo('#result');
            author.appendTo('#result');
            img.appendTo('#result');
           }
          });
       
       }
       return false;
    });
 
 });