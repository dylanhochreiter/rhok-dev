window.onload = loadJSON();

function loadJSON(){
   var data_file = "data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json

        for(var key in jsonObj){
          console.log(jsonObj[key]);

          var projects = document.getElementById("projects");

          var newDiv = document.createElement('div');

          var feedImg = document.createElement("img");

          feedImg.setAttribute('src', jsonObj[key].imageUrl);

          var feedHeader = document.createElement("h3");

          feedHeader.innerHTML = jsonObj[key].title;

          var feedDesc = document.createElement("p");

          feedDesc.innerHTML = jsonObj[key].desc;

          var feedDetails = document.createElement("p");

          feedDetails.innerHTML = jsonObj[key].details;

          newDiv.appendChild(feedImg);
          newDiv.appendChild(feedHeader);
          newDiv.appendChild(feedDesc);
          newDiv.appendChild(feedDetails);
          projects.appendChild(newDiv);

        }

        return false;

        
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}