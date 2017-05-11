// // Single state object
// var state = {
//     items: []
// };
var shoppingListArray = []


//*************** State modification functions *************
// var addItem = function(state, item) {
//     state.items.push(item);
// };

// Add item to shopping list array
function addItemToShoppingListArray () {
	shoppingListArray.push(itemToAdd);
	console.log(itemToAdd + " added to the shopping list.");
}






//*************** Render functions ***************
// var renderList = function(state, element) {
//     var itemsHTML = state.items.map(function(item) {
//         return '<li>' + item + '</li>';
//     });
//     element.html(itemsHTML);
// };

//*************** Event listeners ***************
var itemToAdd;

// Add Item Button
function addThisItem() {
$('#js-addItemButton').click(function() {
	event.preventDefault();
	itemToAdd = $('#shopping-list-entry').val();
	console.log("We're adding " + itemToAdd +"!");
	addItemToShoppingListArray();
})
}

// Return Button Submit
$('#shopping-list-entry').keyup(function(event) {
	if (event.keyCode == 13) {
		$('js-addItemButton').click()
	}
})


// Run Application

function runShoppingList() {
	addThisItem();
}

$(runShoppingList);