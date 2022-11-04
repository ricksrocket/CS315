/*eslint-disable*/
/*
let photoGridContainer = document.getElementById("photo-grid-container");

let phoneItemsData = [{
    id: "phone1",
    imageSource: "https://target.scene7.com/is/image/Target/GUEST_f41fd0ae-7e4c-42ad-bae8-172c07f7d0d1",
    itemName: "Boost Mobile Prepaid Samsung Galaxy A03s (32GB) Smartphone - Black",
    brand: "Samsung",
    rating: "3.4",
    price: 599.99,
    quantity: 9,
    itemCategory: ""
},
{
    id: "phone2",
    imageSource: "https://target.scene7.com/is/image/Target/GUEST_854cc1de-03b8-4952-b389-1ddcbdc25d0e",
    itemName: "Tracfone Prepaid Apple iPhone XR 4G CDMA (64GB) - Black",
    brand: "Apple",
    rating: "5",
    price: 179.99,
    quantity: 9,
    itemCategory: ""
},



{
    id: "phone3",
    imageSource: "https://target.scene7.com/is/image/Target/GUEST_cb29b7a2-6858-4324-b237-c7a8418398f0?wid=253&hei=253&qlt=80&fmt=pjpeg",
    itemName: "VTech DECT 6.0 Expandable Cordless Phone with Answering Machine - 3 Handsets (CS5329-3)",
    brand: "V-tech",
    rating: "4",
    price: 59.99,
    quantity: 9,
    itemCategory: ""
}]


let generatePhoneGrid = () => {
    return (photoGridContainer.innerHTML = phoneItemsData.map((obj) =>{
        let {id, imageSource, itemName, brand, rating, price } = obj;
        return`
    
        <div class="photo-grid-item" id="product-id-${id}">
        <div class="card-image">
            <div class="Sirv photo-image-main">
                <img class="phone-image-main"
                    alt="${itemName}"
                    src="${imageSource}"
                    width="100%">
    
    
            </div>
    
            <a href="/p/boost-mobile-prepaid-samsung-galaxy-a03s-32gb-smartphone-black/-/A-85630826#lnk=sametab"
                class="phone-heading" style="font-size: 14px ;">${itemName}</a>
    
    
    
            <div class="brand">${brand}</div>
            <div class="rating-container">
                <div class="rating" style="--rating: ${rating}"
                    aria-label="Rating of this product is ${rating} out of 5."></div>
            </div>
            <div class="price">${price}</div>
            <div style="font-size: 12px; font-family:Arial, Helvetica, sans-serif">When purchased online
            </div>
            <div class="phone-text" style="color: green">Free shipping*</div>
            <div class="phone-text">*Exclusions Apply</div>
            <div class="phone-text">In stock at Burlington</div>
            <div class="phone-text">Not eligible for pickup</div>
        </div>
        <div class="cart-btn-container">
            <div id=${id} class="cart-qty">0</div>
            <button class="cart-btn" onclick="">Add to Cart</button>
        </div>
    </div>
    `

    }).join(""))


}

generatePhoneGrid();   
*/
// let summary = document.getElementById("summary");
let phone1;
let leftSubtotal = document.getElementById("left-subtotal")
let shoppingCart = document.getElementById("left-box");
let summary = document.getElementById("second");

let basket = JSON.parse(localStorage.getItem("basketData")) || [];
let globalProductsSource = JSON.parse(localStorage.getItem("globalProductsSource")) || [];
console.log("phone inventory data on local is", globalProductsSource);


let basketTotalQty = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.reduce((prev, curr) => prev + curr.cartQty, 0);
    let totalQty = basket.reduce((prev, curr) => prev + curr.cartQty, 0);
    return totalQty;
    // console.log("bskt-totalQty", totalQty);

}

basketTotalQty();

let generateCartItems = () => {
    if (basket.length !== 0) {


        return shoppingCart.innerHTML = basket.map((cartObj) => {
            let { id, cartQty } = cartObj;
            console.log("items is cart are", id, cartQty);
            let search = globalProductsSource.find((dbObj) => dbObj.id === id) || [];
            console.log(search);

            return `
            <div class="cart-item" id="cart-item">

            <div class="cart-top-row">
                <div class="photo-image-thumb" id="photo-image-thumb">
                    <img src=${search.imageSource}
                        style="height: 80px; width: 80px;">
                </div>

                <div class="item-name" id="item-name">${search.itemName}

                </div>

                <div class="shipping-radio"><input type="radio" name="${id}" id="radio" checked>
                    <label for="radio">2-day shipping</label> 

                </div>

                <div class="cart-item-price" id="cart-item-price">$${search.price}
                </div>

                <div class="delete-item" id="delete-item">
                    <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                </div>

            </div>

            <div class="pm-buttons">

            <i onclick= "decrementQty(${cartObj})" class="bi bi-dash-lg"></i>

                <div id="cart-qty" class="cart-qty">${cartQty}</div>
                <i onclick= "incrementQty(${id})" class="bi bi-plus-lg"></i>

            </div>
            <h3>subtotal this item: $${cartQty * search.price}</h3>
        </div>
            `;
        }).join("");

    } else {
        shoppingCart.innerHTML = ``;
        summary.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="product-list.html"
        <div class="cart-btn-container">
            <button class="cart-btn">Back to Home</button>
        </div>
        </a>
        `
    }
}

generateCartItems();


let incrementQty = () => {
    console.log(id)
    // let selectedItem = id;
    // console.log("incrementing", selectedItem)
    // let search = basket.find((obj) => obj.id === selectedItem.id);
    // if (search === undefined) {
    //     basket.push({
    //         id: selectedItem.id,
    //         cartQty: 1
    //     })
    // }
    // else {
    //     search.cartQty += 1
    // }
    // updateQty(selectedItem.id);
    // localStorage.setItem("basketData", JSON.stringify(basket));


}

let decrementQty = (id) => {
    let selectedItem = id;
    let search = basket.find((obj) => obj.id === selectedItem.id);
    if (search === undefined) return // if there is no local storage of basketData, seaach is undef. and will have error w/o this
    else if (search.cartQty === 0) return;
    else {
        search.cartQty -= 1;
    }

    updateQty(selectedItem.id);
    basket = basket.filter((obj) => obj.cartQty !== 0); //keep only items in basket with qty!==0

    localStorage.setItem("basketData", JSON.stringify(basket));//store data onto local storage
}

let updateQty = (id) => {// id argument is the basket object that was selected either by pressing "+" or "-" button
    let search = basket.find((obj) => obj.id === id)//if we get a match update that item's qty any time incr/decr is invoked 

    // search = basket.find((obj) => obj.id === id  );
    console.log("id being incr/decr is: ", id);
    console.log("qty: ", search.cartQty);
    console.log(basket);
    document.getElementById(id).innerHTML = search.cartQty;
    basketTotalQty();

}

/**
 * ! functions below are for calculating Total Amount of cart items and removing items
**/

let removeItem = (id) => {
    let selectedItem = id;
    console.log("running remove item function removing item id=", id)
    // console.log("item you want to delete is ", selectedItem.id);
    basket = basket.filter((objToRemove) => objToRemove.id !== selectedItem.id)//whichever item is selected by clicking on X, remove

    generateCartItems();//update the total amount upon removal from cart
    localStorage.setItem("basketData", JSON.stringify(basket));
    basketTotalQty();
    totalAmount()//update the total amount upon removal from cart

}

let clearCart = () => {
    basket = [];
    generateCartItems(); //regenerate cart page
    localStorage.setItem("basketData", JSON.stringify(basket));
    basketTotalQty();




}



let totalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket.map((obj) => { //map the basket to compute extended price
            let { cartQty, id } = obj;
            let search = globalProductsSource.find((y) => y.id === id) || []// y=dataObject in product list DB
            return cartQty * search.price;

        });
        console.log("array is", amount);
        let total = amount.reduce((prev, curr) => prev + curr, 0)
        total = total.toFixed(2);
        console.log(total);
        let totalQty = basketTotalQty();
        leftSubtotal.innerHTML = `
        <h1 class="cart-title1">Cart</h1>
        <h2 id="subtotal" class="subtotal">$${total} subtotal &#x2022 ${totalQty} items</h2>`;




    } else return
};
totalAmount()