/*eslint-disable*/

let photoGridContainer = document.getElementById("photo-grid-container");
for (const element of globalProductsSource){
    console.log("values are: ", element.id, element.itemName)
}

console.log("data source is :", globalProductsSource)



let basket = JSON.parse(localStorage.getItem("basketData")) || [];

// let cartAmount = document.getElementById("cart-amount");


let generatePhoneGrid = () => {
    return (photoGridContainer.innerHTML = globalProductsSource.map((obj) => {
        let { id, imageSource, itemName, brand, rating, price } = obj;
        let search = basket.find((obj) => obj.id === id) || [];
        return `
    
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
            <div class="plus-minus-buttons">
                    <div>Quantity: </div>
                    <i onclick= "decrementQty(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">
                    ${search.cartQty === undefined ? 0 : search.cartQty}
                    </div>
                    <i onclick= "incrementQty(${id})" class="bi bi-plus-lg"></i>
                    
                </div>
        </div>
        <div class="cart-btn-container">
            <button class="cart-btn" onclick="incrementQty(${id})">Add to Cart</button>
        </div>
    </div>
    `

    }).join(""))


}

generatePhoneGrid();

let incrementQty = (id) => {
    let selectedItem = id;
    let search = basket.find((obj) => obj.id === selectedItem.id);
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            cartQty: 1
        })
    }
    else {
        search.cartQty += 1
    }
    updateQty(selectedItem.id);
    localStorage.setItem("basketData", JSON.stringify(basket));
    // console.log(basket)

    /*
    let selectedItem = id;
    let search = basket.find((obj) => obj.id === selectedItem.id);// search for selected item, find which item (by id) is being incremented

    if (search === undefined) {// if item does not exist in basket then push item to basket setting qty=1
        basket.push({
            id: selectedItem.id,
            cartQty: 1,
        })
    } else {
        search.cartQty += 1;
    };

    // console.log(basket);
    
    updateQty(selectedItem.id);
    localStorage.setItem("basketData", JSON.stringify(basket))



    // let test = localStorage.getItem(JSON.parse("basketData"))

*/

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
    // console.log(basket)
    
    /*
    let search = basket.find((obj) => obj.id === selectedItem.id);//

    if (search === undefined) return
    else if (search.cartQty === 0) return;
    else {
        search.cartQty -= 1;
    }
    console.log("basket from decr is" ,basket);

    updateQty(selectedItem.id);//update to browser must come before next step which deletes any item from cart with qty=0
    basket = basket.filter((x) => x.cartQty !==0); //keep only items in basket with qty>0
    
    localStorage.setItem("basketData", JSON.stringify(basket));

*/
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




    /*
    let search = basket.find((obj) => obj.id === id); //if we get a match update that item's qty any time incr/decr is invoked 

    console.log(search.cartQty)
    document.getElementById(id).innerHTML = search.cartQty;
    basketTotalQty();//update the basket icon in navbar each time we incre/decr
*/
}

let basketTotalQty = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.reduce((prev, curr) => prev + curr.cartQty, 0)

}

basketTotalQty();