		var books = JSON.parse(localStorage.getItem("books") || "[]");
		for(var  i =0; i<books.length; i++){
			var Item = document.createElement('Item');
			Item.setAttribute("class", "Item");
			var imgBlock = document.createElement('imgBlock');
			imgBlock.setAttribute("class", "imgBlock");
			var Img = document.createElement('img');
			Img.setAttribute("src", books[i].BookImg[0]);
			imgBlock.appendChild(Img);
			var infomation = document.createElement('infomation');
			infomation.setAttribute("class", "infomation");
			infomation.innerHTML += "Название: " + books[i].BookName + "<br>";
			infomation.innerHTML += "Автор: " + books[i].BookAuthor + "<br>";
			infomation.innerHTML += "Издательство: " + books[i].PublishingHouse + "<br>";
			infomation.innerHTML += "Год издания: " + books[i].DataPublication + "<br>";
			infomation.innerHTML += "Адрес издательства: " + books[i].Addres + "<br>";
			infomation.innerHTML += "Телефон издательства: " + books[i].Phone + "<br>";
			infomation.innerHTML += "Категория: " + books[i].BookHeading + "<br>";

			var deleteBtn = document.createElement("button");
			deleteBtn.setAttribute("onclick", "dleteItem("+i+")");
			deleteBtn.setAttribute("class", "delBtn");
			deleteBtn.innerHTML = "Удалить";

			var editeBtn = document.createElement("button");
			editeBtn.setAttribute("onclick", "editeItem("+i+")");
			editeBtn.setAttribute("class", "editeBtn");
			editeBtn.innerHTML = "Редактировать";

			Item.appendChild(imgBlock);
			Item.appendChild(infomation);
			Item.appendChild(deleteBtn);
			Item.appendChild(editeBtn);

			document.getElementById('content').appendChild(Item);
		}
		function dleteItem (i) {
			booksArr = JSON.parse(localStorage.getItem("books") || "[]");
			booksArr.splice(i, 1);
			console.log(booksArr);
			localStorage.setItem("books", JSON.stringify(booksArr));
			location.reload();
		}
		function editeItem (i) {
			localStorage.setItem("edit", true);
			localStorage.setItem("index", i);
			window.location = "page1.html"
		}
		function addBook() {
			localStorage.setItem("edit", false);
			window.location = "page1.html";
		}