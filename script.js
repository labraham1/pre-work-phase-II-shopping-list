window.onload = function() {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-form");

    form.addEventListener("submit", (event) => {
        handleItemForm(event, form);
    });
}

function handleItemForm(event, formRef) {
    if (event.preventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();
    formRef.reset();

    return false;
}

function addItemToShoppingList() {
    let itemName = document.getElementById("itemName");
    let itemAmount = document.getElementById("itemAmount");
    let id = getRandomInt(0, 10000000);

    // Creates list item html and appends to page.
    let itemHtml = createListItemHtml(itemName.value, itemAmount.value);
    console.log("Item HTML; ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterEnd", itemHtml);



}

