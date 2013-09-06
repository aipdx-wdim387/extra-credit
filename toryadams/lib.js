window.ghub_fetch = (function () {
	function gHub (elm) {
		this.elm = elm;
		this.gname = elm.getAttribute("github-name");
		this.feed = this.parseObj();
	}

	gHub.prototype.deparse = function (obj) {
		that = this; 
		var obj = JSON.parse(obj); 
		that.elm.style.height = "500px"; 
		that.elm.style.width = "200px"; 
		that.elm.style.background = "#000"; 
		for(var i = 0, repos = obj.length; i < repos; i++){
			var newLink = document.createElement("a"); 
			newLink.setAttribute('href', obj[i].pulls_url); 
			newLink.innerHTML = obj[i].name; 
			newLink.style.display = "block"; 
			newLink.style.color = "#fff";
			newLink.style.padding = "0 0 0 10px";
			that.elm.appendChild(newLink);
		}
	}

	gHub.prototype.parseObj = function () {
		self = this; 
		this.fetchObj(this.gname);
	}

	// ajax calls raw... :( sad day, this is so bloated
	gHub.prototype.fetchObj = function (url_tag) {
		var xmlhttp, self = this; 
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest(); 
		}
		else {// code for IE6, IE5
  			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  		}

  		xmlhttp.onreadystatechange = function () {
  			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  				self.deparse(xmlhttp.responseText); 
  			}
  		}

  		xmlhttp.open("GET","https://api.github.com/users/" + url_tag + "/repos", true);
  		xmlhttp.send();
	}


	var fetch = {
		options : {
			slider: true,
			random: false
		},

		get: function (options) {
			if(options == undefined) {
				options = this.options; 
			}
			var selector = "githubrss"; 
			window.onload = function () {
				sel = document.getElementById(selector); 
				return new gHub(sel); 
			}
		}
	}

	return fetch;
}()); 
