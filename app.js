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
	console.log(itemValue);
	for (var i = 0; i < itemsInShoppingList.length; i++) {
		if (itemsInShoppingList[i].itemName === itemValue) {
			itemsInShoppingList.splice(i, 1);
		}
	}
	console.log(itemsInShoppingList);
	renderShoppingList()
}


//*************** Render functions ***************

// Renders shopping list from itemsInShoppingList array
function renderShoppingList() {
	$('ul').empty();
	for (var i = 0; i < itemsInShoppingList.length; i++) {
		$('ul').append('<li><span class="shopping-item">' + itemsInShoppingList[i].itemName + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
		whichItemToDelete();
		clickCheckButton();
	}
	
}



// Toggle Check
function checkOff(event) {
	console.log('checked!');
	$(event.currentTarget).closest('li').toggleClass('shopping-item__checked');
	console.log('added check!');

}



//*************** Event listeners ***************
const $addItemButton = $('#js-addItemButton');
const $shoppingListEntryBox = $('#shopping-list-entry');

// Listens for "Add Item" button click
function addItem() {
	$addItemButton.click(function() {
		event.preventDefault();
		var itemToAdd = $shoppingListEntryBox.val();
		createNewItem(itemToAdd);
		renderShoppingList()
	})
}

// Listens for Check button click
function clickCheckButton() {
	let $checkButton = $('button.shopping-item-toggle');
	$checkButton.click(function(event) {
		checkOff(event);
	})
}

// Listens for Delete button click & finds which item to delete
function whichItemToDelete() {
	let itemValue;
	$('button.shopping-item-delete').click(function(event) {
		itemValue = $(event.currentTarget).closest('li').text().slice(0,-11);
		deleteItem(itemValue);
	})
}


addItem();
