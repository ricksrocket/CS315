


/*eslint-disable*/


    /**
     * 
     * @param {object} productData information/ data of a product
     * @returns {HTMLElement} Product component(complex element combined of multiple elements)
     */
     function getProductComponent(productData = { imgSrc: "", title: "", vendor: "", rating: "", price: 0 }) {


        // create all of the tile elements
        let photoGridItem = document.createElement("div");//added by rick
        let cardImage = document.createElement("div");//added by rick (card-image container)
        let imgElement = document.createElement("img");
        let imgContainer = document.createElement("div");//main image container
        let titleElement = document.createElement("h4");
        let vendorElement = document.createElement("div");
        let ratingContainer = document.createElement("div");
        let ratingElement = document.createElement("div");//added by rick
        let priceElement = document.createElement("div");
        // let addToCartButton = document.createElement("button");
        let infoWrapper = document.createElement("div");
        let buttonWrapper = document.createElement("div");
        let eachProductContainer = document.createElement("div");
        let cartButtonContainer = document.createElement("div");//added by rick
        let cartButton = document.createElement("button");//added by rick
        // add phone text below the price element
        let phoneTextWP = document.createElement("div")
        let phoneTextFS = document.createElement("div")
        let phoneTextEA = document.createElement("div")
        let phoneTextIS = document.createElement("div")
        let phoneTextPU = document.createElement("div")





        // additional setups - added by Rick
        // photoGridItem.className = "photo-grid-item"
        imgContainer.setAttribute("class", "Sirv phone-image-main");
        // let productListContainer = document.getElementById("productListContainer");
        eachProductContainer.className = "photo-grid-item"
        vendorElement.className = "brand";
        ratingContainer.className = "rating-container";
        priceElement.className = "price";
        titleElement.className = "phone-heading";
        ratingElement.className = "rating";
        ratingElement.setAttribute("style", `--rating: ${productData.rating}`);
        cardImage.className = "card-image";


        // setup cart-button
        cartButtonContainer.className = "cart-btn-container";
        cartButton.className = "cart-btn";
        cartButton.setAttribute("onclick", "")
        cartButton.innerHTML = "Add to Cart";
        cartButtonContainer.append(cartButton)

        //setup of phone text below pricing
         phoneTextWP.className="phone-text";
         phoneTextFS.className="phone-text";
         phoneTextEA.className="phone-text";
         phoneTextIS.className="phone-text";
         phoneTextPU.className="phone-text";
         phoneTextWP.innerHTML = "When Purchased online";
         phoneTextFS.innerHTML = "Free shipping"
         phoneTextEA.innerHTML="Exclusions apply";
         phoneTextIS.innerHTML="In stock in Burlington";
         phoneTextPU.innerHTML= "Not eligible for pickup"






        // Setup main Image Component;
        imgContainer.style.height = "250px";
        imgContainer.style.width = "250px";
        imgContainer.style.overflow = "hidden";
        imgElement.setAttribute("src", productData.imgSrc);
        imgElement.setAttribute("class", "phone-image-main");//added by rick
        imgElement.alt = productData.title//added by rick
        imgElement.style.height = "100%";//may need to add/modify to width 100%
        imgElement.style.margin = "0px auto";
        imgContainer.append(imgElement);
        ratingContainer.append(ratingElement);//added by rick
        // photoGridItem.append(cardImage, cartButtonContainer);


        // area reserved for second "hover-over" image

        // Setup info wrapper 
        titleElement.innerText = productData.title;
        vendorElement.innerText = productData.vendor;
        ratingElement.innerHTML = productData.rating;//modify or delete
        priceElement.innerText = "$" + productData.price;
        infoWrapper.className = "info-container";
        infoWrapper.append(titleElement, vendorElement, ratingContainer, priceElement,
            phoneTextWP, phoneTextFS, phoneTextEA, phoneTextIS, phoneTextPU);
        cardImage.append(imgContainer, infoWrapper)

        // All product elements are inside eachProductContainer
        eachProductContainer.append(cardImage, cartButtonContainer)
        // imgContainer, infoWrapper); fix

        return eachProductContainer;
    }

    function generateProductElementList(products = []) {


        // get a list of corresponding product elements or components for each product
        // let productElements = products.map(product => getProductComponent(product));

        let productElements = [];

        for (let product of products) {
            let productElement = getProductComponent(product);

            productElements.push(productElement);
        }

        let productListContainer = document.getElementById("productListContainer");
        if (productListContainer !== null) {
            productListContainer.remove();
        }

        productListContainer = document.createElement("div");
        productListContainer.setAttribute("id", "productListContainer");
        productListContainer.className = "photo-grid-container"//added by rick
        // productListContainer.setAttribute("style", "display: flex; flex-wrap: wrap; width: 100%;");
        productListContainer.append(...productElements);



        // change document body to any other element when the parent of product list container is defined
        document.body.append(productListContainer);
    }

    window.onload = windowOnloadHandler;
    function windowOnloadHandler() {

        let products = getProducts();
        generateProductElementList(products);
        let second = document.querySelector(".second");//added by Rick...read existing element to append to
        let productListContainer = document.getElementById("productListContainer");//added by Rick
        second.append(productListContainer)////added by Rick



    }

    function getProducts() {
        let products = [
            {
                imgSrc: "https://target.scene7.com/is/image/Target/GUEST_f41fd0ae-7e4c-42ad-bae8-172c07f7d0d1",
                title: "Test product1",
                vendor: "Motorola",
                rating: "4",
                price: 6.78
            },

            {
                imgSrc: "https://target.scene7.com/is/image/Target/GUEST_f41fd0ae-7e4c-42ad-bae8-172c07f7d0d1",
                title: "Test product2",
                vendor: "Motorola",
                rating: "4",
                price: 6.78
            },
            {
                imgSrc: "https://target.scene7.com/is/image/Target/GUEST_f41fd0ae-7e4c-42ad-bae8-172c07f7d0d1",
                title: "Test product3",
                vendor: "Motorola",
                rating: "4",
                price: 6.78
            },
            {
                imgSrc: "https://target.scene7.com/is/image/Target/GUEST_f41fd0ae-7e4c-42ad-bae8-172c07f7d0d1",
                title: "Test product4",
                vendor: "Motorola",
                rating: "4",
                price: 6.78
            },

            {
                imgSrc: "https://target.scene7.com/is/image/Target/GUEST_f41fd0ae-7e4c-42ad-bae8-172c07f7d0d1",
                title: "Test product5",
                vendor: "Motorola",
                rating: "4",
                price: 6.78
            },
            {
                imgSrc: "https://target.scene7.com/is/image/Target/GUEST_f41fd0ae-7e4c-42ad-bae8-172c07f7d0d1",
                title: "Test product6",
                vendor: "Motorola",
                rating: "4",
                price: 6.78
            },
            {
                imgSrc: "https://target.scene7.com/is/image/Target/GUEST_f41fd0ae-7e4c-42ad-bae8-172c07f7d0d1",
                title: "Test product7",
                vendor: "Motorola",
                rating: "4",
                price: 6.78
            },
            {
                imgSrc: "https://target.scene7.com/is/image/Target/GUEST_f41fd0ae-7e4c-42ad-bae8-172c07f7d0d1",
                title: "Test product8",
                vendor: "Motorola",
                rating: "4",
                price: 6.78
            }
            ,
            {
                imgSrc: "https://target.scene7.com/is/image/Target/GUEST_f41fd0ae-7e4c-42ad-bae8-172c07f7d0d1",
                title: "Test product9",
                vendor: "Motorola",
                rating: "4",
                price: 6.78
            }

        ];

        return products;
    }