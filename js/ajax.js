function loadJSON(){
     var data_file = "js/data.json";
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

          var projects = document.getElementById("projects");

          for(var key in jsonObj){
            // console.log(jsonObj[key]);

            var newDiv = document.createElement('div');
            newDiv.className += "shadow";
             newDiv.className += " row";

            var leftCol = document.createElement('div');

            leftCol.className = "col-6";
            leftCol.className += " col-lg-6";

            var rightCol = document.createElement('div');

            rightCol.className = "col-6";
            rightCol.className += " col-lg-6";

            var projectImg = document.createElement("img");

            projectImg.className = "img-responsive";
            projectImg.setAttribute('src', jsonObj[key].imageUrl);

            var projectHeader = document.createElement("h3");

            projectHeader.innerHTML = jsonObj[key].title;

            var projectDesc = document.createElement("p");

            projectDesc.innerHTML = jsonObj[key].desc;

            var projectDetails = document.createElement("p");

            projectDetails.innerHTML = jsonObj[key].details;

            var projectUrl = document.createElement('a');

            projectUrl.innerHTML = "The Code";
            projectUrl.setAttribute('href', jsonObj[key].url);

            var projectTeam = document.createElement('h3');
            projectTeam.innerHTML = "Project completed by: " + jsonObj[key].team;

            leftCol.appendChild(projectImg);
            leftCol.appendChild(projectTeam);
            rightCol.appendChild(projectHeader);
            rightCol.appendChild(projectDesc);
            rightCol.appendChild(projectDetails);
            rightCol.appendChild(projectUrl);
            newDiv.appendChild(leftCol);
            newDiv.appendChild(rightCol);
            projects.appendChild(newDiv);
            

          }

        }

          
    }
     http_request.open("GET", data_file, true);
     http_request.send();
  }

$(document).ready(function(){

  loadJSON();

});