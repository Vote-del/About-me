let cart =[];
let totalPrice = 0;

function addTocart(productName, productprice) {
    cart.push({name: productName, price: productprice});
    updateCart();
}
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsElement.innerHTML = '',
    totalprice = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(listItem);
        totalPrice += item.price;

    })
    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<li> No items in the cart </li>'
    }
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}