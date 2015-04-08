

(function(){
	var xhr = new XMLHttpRequest();
	var url = '/recipes';
	xhr.open('GET', url);
	xhr.addEventListener('load', function(e){
		var data = xhr.responseText;
		console.log(JSON.parse(data));
	});
	xhr.send();
})()