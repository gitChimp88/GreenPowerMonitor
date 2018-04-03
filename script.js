var formInfo = {
	rows: 0,
	
	getInfo: function(){
		
		var name = document.getElementById("name").value;
		var type = document.getElementById("type").value;
		var brand = document.getElementById("brand").value;
		var model = document.getElementById("model").value;
		var date = document.getElementById("date").value;
		
		var table = document.getElementById("table");
		var deleteButton = document.createElement("button");
		deleteButton.textContent = "delete";
		deleteButton.className = "delete";
		deleteButton.onclick = this.delete();
		
		/*didnt get round to implementing the delete function or the sort function as ran out of time*/
		
		if(name != "" && type != "" && brand != "" && model != "" && date != ""){
			var row = table.insertRow(this.rows);
		

			var cell4 = row.insertCell(0);
			cell4.innerHTML = "Date: " + date

			var cell3 = row.insertCell(0);
			cell3.innerHTML = "Model: " + model

			var cell2 = row.insertCell(0);
			cell2.innerHTML = "Brand: " + brand

			var cell1 = row.insertCell(0);
			cell1.innerHTML = "Type: " + type

			var cell = row.insertCell(0);
			cell.innerHTML = "Name: " + name;
			row.appendChild(deleteButton)
		
		
		
		

	      this.row ++;
		}
		
		
			document.getElementById("name").value = "";
			document.getElementById("type").value = "";
			document.getElementById("brand").value = "";
			document.getElementById("model").value = "";
			document.getElementById("date").value = "";
		
		
	},
	delete: function(){
		document.getElementByClassName("delete")
	}
	
}

