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
               if (response.items[i].accessInfo.accessViewStatus == "SAMPLE"){
                title=$('<p class="lead"><h5>' + response.items[i].volumeInfo.title +  '</h5></p>');  
                author=$('<p class="lead"> By: ' + response.items[i].volumeInfo.authors + '</p>');
                img = $('<img class="mb-3"><br><a href=' + response.items[i].accessInfo.webReaderLink + '><button class="btn btn-primary mb-3">Read More</button></a>'); 	
                url= response.items[i].volumeInfo.imageLinks.thumbnail;
                img.attr('src', url);
                title.appendTo('#result');
                author.appendTo('#result');
                img.appendTo('#result');
               }
           }
          });
       
       }
       return false;
    });
 
 });