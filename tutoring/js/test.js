const test = ["./GatetrSlot.html", "./GatetrSlot.html", "./GatetrSlot.html"];

// Function to add <li> items to the existing <ul>
function addListItems() {
	let myList = document.getElementById("myList");
	// let aTag = document.querySelectorAll("myList");

	for (let i = 0; i < test.length; i++) {
		let listItem = document.createElement("li");
		let add_tag = document.createElement("a");
		listItem.textContent = `Item ${i}`;
		myList.appendChild(listItem);
	}
}

// Call the function to add <li> items when the page loads
document.addEventListener("DOMContentLoaded", addListItems);

// function addListItems() {
// 	let MyGameList = document.getElementById("myList");
// 	for (let i = 1; i <= 30; i++) {
// 		let listItem = document.createElement("li");
// 		listItem.textContent = `Item ${i}`;
// 		MyGameList.appendChild(listItem);
// 	}
// }

// document.addEventListener("DOMContentLoaded", addListItems);
