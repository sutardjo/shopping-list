//*************** App States ***************
// Array to hold shopping list objects. Each object has itemName: and checked:
var itemsInShoppingList = [];

//*************** State Modifications ***************

// Creates new shopping list object and pushes to itemsInShoppingList array
function createNewItem(itemToAdd) {
	var item = {
		itemName: itemToAdd,
		checked: false
	};
	itemsInShoppingList.push(item);
}

// Deletes object from shopping list array
function deleteItem(itemValue) {
	console.log("deleting " + itemValue);
	for (var i = 0; i < itemsInShoppingList.length; i++) {
		if (itemsInShoppingList[i].itemName === itemValue) {
			itemsInShoppingList.splice(i, 1);
		}
	}
	console.log("current shopping list: " + itemsInShoppingList);
	renderShoppingList();
}

// Toggles checked status in the object
function checkOff(itemValue) {
	var foundItYet = false;
	var i = 0;
	while (foundItYet === false) {
		console.log(i);
		console.log("looking for " + itemValue);
		let itemToCompare = itemsInShoppingList[i].itemName;
		console.log("found " + itemToCompare);
		if (itemToCompare === itemValue) {
			console.log("they match!");
			foundItYet = true;
			if (itemsInShoppingList[i].checked === false) {
				itemsInShoppingList[i].checked = true;
				console.log("switched to true");
			} else {
				itemsInShoppingList[i].checked = false;
				console.log("switched to false");
			}
		} else {
			i = i + 1;
			console.log("still looking")
		}
	}	
	renderShoppingList();
	console.log("done!");
}


//*************** Render functions ***************

// Renders shopping list from itemsInShoppingList array
function renderShoppingList() {
	console.log("rendering shopping list");
	$('ul').empty();
	for (var i = 0; i < itemsInShoppingList.length; i++) {
		// If item object is not checked
		if (itemsInShoppingList[i].checked === false) {
			$('ul').append('<li><span class="shopping-item">' + itemsInShoppingList[i].itemName + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
		} else {
		// If item object is checked
			$('ul').append('<li><span class="shopping-item shopping-item__checked">' + itemsInShoppingList[i].itemName + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
		}
	}
		whichItemToDelete();
		clickCheckButton();
}


//*************** Event listeners ***************
const $addItemButton = $('#js-addItemButton');
const $shoppingListEntryBox = $('#shopping-list-entry');

// Listens for "Add Item" button click
function addItem() {
	$addItemButton.on('click', function() {
		event.preventDefault();
		var itemToAdd = $shoppingListEntryBox.val();
		console.log("adding " + itemToAdd);
		createNewItem(itemToAdd);
		renderShoppingList()
	})
}

// Listens for Check button click
function clickCheckButton() {
	$('button.shopping-item-toggle').on('click', function(event) {
		console.log("You clicked the check button");
		event.preventDefault();
		itemValue = $(event.currentTarget).closest('li').text().slice(0,-11);
		checkOff(itemValue);
	})
}


// Listens for Delete button click & finds which item to delete
function whichItemToDelete() {
	$('button.shopping-item-delete').click(function(event) {
		itemValue = $(event.currentTarget).closest('li').text().slice(0,-11);
		deleteItem(itemValue);
	})
}

addItem();
