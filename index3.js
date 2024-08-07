fetch('data/data3.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(category => {
        const productsContainer = document.getElementById("container6");
        const searchButton = document.getElementById("search-button");
        const searchInput = document.getElementById("search-input");

        let productsData = category;

        let shouldScroll = false;

        function displayProducts(products) {
            const productElements = products.map(product => {
                return `
                <div class="page3">
                    <div class="page3-product">
                        <div class="product">
                            <!-- Displaying the product image multiple times (if needed) -->
                            <img class="page3-img" src="${product.image}" alt="${product.name}"></img>
                        <div class="add-to-cart">Add To Cart</div>
                            
                        </div>

                        <div class="page3-icons">
                            <ul class="page3-ul">
                                <li class="page3-li"><img class="page3-img2" src="${product.icons}" alt="${product.name}"></img></li>
                                <li class="page3-li"><img class="page3-img2" src="${product.icons1}" alt="${product.name}"></img></li>
                            </ul>
                        </div>
                    </div>

                    <div class="product-details">
                        <h3>${product.name}</h3>
                        <div class="rating">
                            <p class="cost"> $ ${product.cost}</p>
                            <img class="details-img" src="${product.image1}" alt="${product.name}"></img>
                            <p class="buyed">(${product.buyed})</p>
                        </div>
                    </div>
                </div>
                `;
            }).join('');

            productsContainer.innerHTML = productElements;

            if (shouldScroll) {
                productsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                shouldScroll = false; 
            }
        }

        function handleSearch() {
            const query = searchInput.value.toLowerCase();
            const filteredProducts = productsData.filter(product =>
                product.name.toLowerCase().includes(query)
            );
            shouldScroll = true; 
            displayProducts(filteredProducts);
        }

        displayProducts(productsData);
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                handleSearch();
            }
        });

        searchInput.addEventListener('focus', () => {
            shouldScroll = false; 
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


    var menuOpenButton = document.querySelector("#menuopen");
    var navList = document.querySelector(".navigation1");
    var center = document.querySelector(".center1");
    var menuIcon = document.querySelector(".menu-icon");
    
    function openMenu() {
      navList.style.opacity = "1"; 
      center.style.height = "100vh"; 
      menuIcon.innerHTML = '<i class="bi bi-x" id="kamali"></i>'; 
      menuOpenButton.removeEventListener("click", openMenu);
      menuOpenButton.addEventListener("click", closeMenu);
    }
    
    function closeMenu() {
      navList.style.opacity = "0"; 
      center.style.height = "0vh"; 
      menuIcon.innerHTML = '<i class="bi bi-list" id="kamali"></i>'; 
      menuOpenButton.removeEventListener("click", closeMenu);
      menuOpenButton.addEventListener("click", openMenu);
    }
    
    menuOpenButton.addEventListener("click", openMenu);