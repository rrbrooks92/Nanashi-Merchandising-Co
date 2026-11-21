//JavaScript

//List of Products
//Format of Products
//Product[
//  Name,
//  Images[
//      commonThumbnail, 
//      altImage1, 
//      altImage2, 
//      ...
//  ],
//  Description
//]

class ProductItem {
    constructor(
        id,
        name, 
        images = [], 
        description
    ) 
    { 
        this.id = id;
        this.name = name;
        this.images = images; //nested images srcs and alts
        this.description = description;
    }

    //adds 1 images src and alt
    addImage(
        src, 
        alt
    ) 
    {
        this.images.push({src, alt});
    }
}

//keeping Products[0] as placeholder, always
const Products = [
    new ProductItem(
        'placeholder',
        'Item Name',
        [
            {
                src: 'assets/images/placeholder.png', 
                alt: 'Placeholder Picture'
            }
        ], 
        'Item Description' 
    )
];

// this function adds a product to the array of products,
function addProduct(newId, newName, newImages, newDescription) {
    if (!newId || !newName || !newImages || !newDescription) {
        console.log('this is the placeholder product, please input arguments');
        return;
}

const productExists = Products.some(product => 
    product.id === newId
);

if (productExists) {
    console.log(`Product ${newName} already exists`);
    return;
}

const product = new ProductItem(newId, newName, newImages, newDescription);
    Products.push(product);
    renderProduct(product);
}


//Render a product on the main-page catalog.
function renderProduct(product) {
    const list = document.querySelector('#main-products');
        if (!list) {
            return;
        }
    const item = document.createElement('li');
    item.className = 'Product';
    const image = document.createElement('img');

    image.src = product.images[0].src;
    image.alt = product.images[0].alt;

    const name = document.createElement('h2');
    name.textContent = product.name;
    
    const description = document.createElement('p');
    description.textContent = product.description;

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.textContent = 'Add to Cart';
    addButton.addEventListener('click', () => addToCart(product));
    item.appendChild(image);
    item.appendChild(name);
    item.appendChild(description);
    item.appendChild(addButton);
    list.appendChild(item);
}

//Adding items to store, default to placeholder if field is empty
/*function addProduct(
    newName = 'Item Name',
    newImages = [
        {
            src: 'assets/images/placeholder.png', 
            alt: 'Placeholder Picture'
        }
    ], 
    newDescription = 'Item Description'
) 
{
    for (const newImage of newImages) {
        for (const product of Products) {
            for (const image of product.images) {
                if (newImage.src === image.src && newName === Products[0].name && newDescription === Products[0].description) {
                    console.log('This is the placeholder product, please input arguments')
                }
                else if (newImage.src === image.src) {
                    console.log(`Image ${newImages[0].src} Already Exists`);
                }
                else if (newName === Products[0].name) {
                    console.log(`Product ${newName} Already Exists`);
                }
                else if (newDescription === Products[0].description) {
                    console.log(`Description ${newDescription} Already Exists`);
                }
                else {
                    Products.push(
                        new ProductItem(
                            newName, 
                            newImages, 
                            newDescription
                        )
                    );
                }//add new item
            }
        }
    }
}
*/

const newProducts = [];

for (const product of newProducts) {
    addProduct(product.id, product.name, product.images, product.description);
}
// this is for manually adding products, i threw some pictures in to test it, we can delete them later.
addProduct(
    'test-alpha',
    'Test Alpha',
    [{ src: 'assets/images/1402431.png', alt: 'Alert.' }],
    'this is a regularly scheduled broadcast of the emergency alert system. this is only a test. if this had been an actual emergency, you would have been instructed where to tune in your area for news and official information.'
);

addProduct(
    'test-beta',
    'Test Beta',
    [{ src: 'assets/images/image.png', alt: 'Test Beta' }],
    'Second description'
);
addProduct(
    'test-gamma',
    'Test Gamma',
    [{ src: 'assets/images/tim.png', alt: 'Test Gamma' }],
    'Third description'
);
addProduct(
    'test-delta',
    'Test Delta',
    [{ src: 'assets/images/1251757.jpg', alt: 'The Fourth Wah.' }],
    'Fourth description'
);
// the breakpoint you set up for the grid is working perfectly. 
addProduct(
    'test-epsilon',
    'Test Epsilon',
    [{ src: 'assets/images/51757.jpg', alt: 'Test Epsilon ' }],
    'Fifth description'
);
// defining a cart storage key to use in localStorage for saving cart items,
// added in a function to add items to the cart and a function to render the cart items on the page.
const CART_STORAGE_KEY = 'nanashi_cart';

function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            images: product.images,
            description: product.description,
            alt: product.images[0].alt,
            quantity: 1
        });
    }
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function renderCart() {
    const list = document.querySelector('#cart-items');
    if (!list) {
        return;
    }
    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    const emptyMessage = document.querySelector('#empty-cart');
    list.replaceChildren();

    cart.forEach(item => {
        const row = document.createElement('li');

        const image = document.createElement('img');
        image.src = '../${item.images[0].src}';
        image.alt = item.alt;

        const name = document.createElement('h2');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        const quantity = document.createElement('p');
        quantity.textContent = `Quantity: ${item.quantity}`;
        
        row.appendChild(image);
        row.appendChild(name);
        row.appendChild(description);
        row.appendChild(quantity);
        list.appendChild(row);
    });
    if (emptyMessage) {
        emptyMessage.hidden = cart.length > 0;
    }
}

renderCart();
//List of Companies
//Format of Company
//Company[
//  Image,
//  Name,
//  Description
//]
//Tag Calls
//Company - ".Company"

//Adding Companies to Page
