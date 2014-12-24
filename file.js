function handleFileSelect(evt) {
 	var files = evt.target.files[0];
  
    var reader = new FileReader();
    var content;
	reader.onload = function (evt) {
    content = evt.target.result;
          document.getElementById('textlist').value = content;
}
    reader.readAsText(files);
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
