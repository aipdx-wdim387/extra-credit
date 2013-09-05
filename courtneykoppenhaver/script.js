window.dome = (function () {
	console.log('working');


   function init() {
   	  // Cycles 10 times and grabs the element from the dom with the ID of 'paragraph' and appaend it plus a string. 
   	  for(i = 0; i < 10; i++){
   	  	var temp = document.getElementById("paragraph");
   	  	var temp2 = temp.innerHTML + 'rawer rawer';
   	  	var temp3 = document.createTextNode(temp2);
   	  	//console.log(temp2);
   	  	temp.appendChild(temp3);
   	  }
   	  // This listens for click events
			temp.onclick = function(e)
			{
				// Checks the color of the paragraph and switches the color
				var dis = this;
				if(dis.style.color == "rgb(255, 0, 255)"){
					dis.style.color="black";
				}else {
					dis.style.color="magenta";
				}

				//creates a new ajax request object
				xmlhttp=new XMLHttpRequest();
				//This listen for a change (the request came back)
				xmlhttp.onreadystatechange=function()
				  {
				  if (xmlhttp.readyState==4 && xmlhttp.status==200)
				    {
				    document.getElementById("response").innerHTML=xmlhttp.responseText;
				    }
				  }
				// Open a ajax request
				xmlhttp.open("GET","temp.php",true);
				// Send a ajax request
				xmlhttp.send();
			}


   	 
   }

   var dome = {
      get: function (selector) {
        console.log('var');
      }
   };
   init();
   //return dome;

}());