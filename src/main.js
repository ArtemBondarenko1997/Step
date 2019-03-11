		var index = localStorage.getItem("index"), obj, booksArr;
		booksArr = JSON.parse(localStorage.getItem("books") || "[]");
		obj= booksArr[index];

		if(localStorage.getItem("edit") == 'true'){
			document.getElementById('selectedImg').setAttribute("src", obj.BookImg[0]);
			for(var  i =0; i<obj.BookImg.length; i++){
				var Img = document.createElement('img');
				Img.setAttribute("src", obj.BookImg[i]);
				Img.setAttribute("class", "littleImg");
				Img.setAttribute("onclick", "selectPicture(this)");
				document.getElementById('imgList').appendChild(Img);
			}

			document.getElementById('BookName').value = obj.BookName;
			document.getElementById('PublishingHouse').value = obj.PublishingHouse;
			document.getElementById('BookAuthor').value = obj.BookAuthor;
			document.getElementById('DataPublication').value = obj.DataPublication;
			document.getElementById('Addres').value = obj.Addres;
			document.getElementById('Phone').value = obj.Phone;
			document.getElementById('BookHeading').value = obj.BookHeading;
		}

		selectPicture = function(e){
			document.getElementById('selectedImg').setAttribute("src", e.getAttribute("src"));
		}

		document.getElementById('myForm').onsubmit = function(e) {
			obj.BookName = document.getElementById('BookName').value;
			obj.PublishingHouse = document.getElementById('PublishingHouse').value;
			obj.BookAuthor = document.getElementById('BookAuthor').value;
			obj.DataPublication = document.getElementById('DataPublication').value;
			obj.Addres = document.getElementById('Addres').value;
			obj.Phone = document.getElementById('Phone').value;
			obj.BookHeading = document.getElementById('BookHeading').value;
			var fullPath;
			var upload = document.getElementById('upload');
			var images = [];
			for(var i = 0; i < upload.files.length; i++){
				fullPath = upload.files[i].name;
				if (fullPath) {
				    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
				    var filename = fullPath.substring(startIndex);
				    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
				        filename = filename.substring(1);
				    }
				    images.push(filename);	
				};
			}
			obj.BookImg = images;
			if(localStorage.getItem("edit") == 'true')
				booksArr[index] = obj;
			else
				booksArr.push(obj);
			localStorage.setItem("books", JSON.stringify(booksArr));
		}