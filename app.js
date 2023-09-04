const buyBtn = document.querySelectorAll('.buy-btn');
const price = document.querySelectorAll('.final-price');
const productImg = document.querySelectorAll('.items-img');
const productDetails = document.querySelectorAll('.items-details');
let cartNav = document.querySelector('.cart-nav-quantity');
let checkoutCart = document.querySelector('.checkout-cart');
let cartItems = document.querySelector('.cart-ul');
let cartNavCounter = 0;

const shoppingCart = document.querySelector('.cart-nav');
const closeCart = document.querySelector('.close-cart');

buyBtn.forEach(function(btn, i) {
    btn.addEventListener('click', function() {
        console.log("Jhun");
        cartNavCounter += 1;
        cartNav.innerHTML = cartNavCounter;
        cartItems.innerHTML += `<li class="cart-items">
                                    <img src="./images/recently-bought/recently-bought-${i + 1}.png" alt="" />
                                    <p>${productDetails[i].innerHTML}</p>
                                    <div class="cart-btn">
                                    <button class="remove-item">-</button>
                                    <p class="checkout-cart-quantity">1</p>
                                    <button class="add-item">+</button>
                                    </div>
                                </li>`;
        if (cartNavCounter) {
            cartNav.style.display = "flex";
        }
        console.log(productDetails[i].innerHTML)
    }); 
});

shoppingCart.addEventListener('click', () => {
    checkoutCart.style.display = "flex";
});

closeCart.addEventListener('click', () => {
    checkoutCart.style.display = "none";
})
