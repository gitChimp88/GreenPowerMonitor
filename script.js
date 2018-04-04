var formInfo = {
	rowInfo: [],
	addRow: function(){
		
		var name = document.getElementById("name").value;
		var type = document.getElementById("type").value;
		var brand = document.getElementById("brand").value;
		var model = document.getElementById("model").value;
		var date = document.getElementById("date").value;
		
		if(name != "" && type != "" && brand != "" && model != "" && date != ""){
			
			this.rowInfo.push({
				name: name,
				type: type,
				brand: brand,
				model: model,
				date: date
			});
			
			document.getElementById("name").value = "";
			document.getElementById("type").value = "";
			document.getElementById("brand").value = "";
			document.getElementById("model").value = "";
			document.getElementById("date").value = "";
		}
		
		formInfo.displayInfo()
	},
	
	 displayInfo: function(){
		
		 var tbody = document.querySelector('tbody');
         tbody.innerHTML = '';
		
		formInfo.rowInfo.forEach(function(val, index){
			var table = document.getElementById("body");
			var deleteButton = document.createElement("button");
			deleteButton.textContent = "delete";
			deleteButton.className = "delete";
			deleteButton.id = index;
			
			var row = table.insertRow();
			row.id = index;
			
			var cell5 = row.insertCell(0);
			cell5.appendChild(deleteButton);
			
			var cell4 = row.insertCell(0);
			cell4.innerHTML = val.date;

			var cell3 = row.insertCell(0);
			cell3.innerHTML = val.model;

			var cell2 = row.insertCell(0);
			cell2.innerHTML = val.brand;

			var cell1 = row.insertCell(0);
			cell1.innerHTML = val.type;

			var cell = row.insertCell(0);
			cell.innerHTML = val.name;
			
		})
		
	},
	
	deleteRow: function(position){
		this.rowInfo.splice(position, 1);
		this.displayInfo();
	},
	
	deleteEventListener: function(){
		var tbody = document.querySelector('tbody');
		tbody.addEventListener('click', function(event){
			var clicked = event.target;
			if(clicked.className == "delete"){
				formInfo.deleteRow(parseInt(clicked.id));
				//console.log(event);
			}
		});
	},
	sortEventListener: function(){
		var sortSelector = document.getElementById("sortSelector");
		sortSelector.addEventListener('change', function(event){
			
			var clicked = event.target;
			if(clicked.value == "name"){
				
				formInfo.sortName();
			} else if(clicked.value == "date"){
				formInfo.sortDate();
			} 
		})
		
	},
	sortName: function(){
		
		var sorted = formInfo.rowInfo.sort(function(a, b){
			return a.name > b.name
		});
		
		 var tbody = document.querySelector('tbody');
         tbody.innerHTML = '';
		
		sorted.forEach(function(val, index){
			var table = document.getElementById("body");
			var deleteButton = document.createElement("button");
			deleteButton.textContent = "delete";
			deleteButton.className = "delete";
			deleteButton.id = index;
			
			var row = table.insertRow();
			row.id = index;
			
			var cell5 = row.insertCell(0);
			cell5.appendChild(deleteButton);
			
			var cell4 = row.insertCell(0);
			cell4.innerHTML = val.date;

			var cell3 = row.insertCell(0);
			cell3.innerHTML = val.model;

			var cell2 = row.insertCell(0);
			cell2.innerHTML = val.brand;

			var cell1 = row.insertCell(0);
			cell1.innerHTML = val.type;

			var cell = row.insertCell(0);
			cell.innerHTML = val.name;
	   })
    },
	sortDate: function(){
		
		function convertDate(d) {
		  var p = d.split("-");
		  return +(p[2]+p[1]+p[0]);
		}
		var sorted = formInfo.rowInfo.sort(function(a,b) {
		return convertDate(a.date) - convertDate(b.date);
    });
		
		 var tbody = document.querySelector('tbody');
         tbody.innerHTML = '';
		
		sorted.forEach(function(val, index){
			var table = document.getElementById("body");
			var deleteButton = document.createElement("button");
			deleteButton.textContent = "delete";
			deleteButton.className = "delete";
			deleteButton.id = index;
			
			var row = table.insertRow();
			row.id = index;
			
			var cell5 = row.insertCell(0);
			cell5.appendChild(deleteButton);
			
			var cell4 = row.insertCell(0);
			cell4.innerHTML = val.date;

			var cell3 = row.insertCell(0);
			cell3.innerHTML = val.model;

			var cell2 = row.insertCell(0);
			cell2.innerHTML = val.brand;

			var cell1 = row.insertCell(0);
			cell1.innerHTML = val.type;

			var cell = row.insertCell(0);
			cell.innerHTML = val.name;
	   })
		
	}
	
}

formInfo.deleteEventListener();
formInfo.sortEventListener();
