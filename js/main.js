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
        name, 
        images = [], 
        description
    ) 
    { 
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
function addProduct(newName, newImages, newDescription) {
    if (!newName || !newImages || !newDescription) {
        console.log('this is the placeholder product, please input arguments');
        return;
}

const imageExists = Products.some(product =>
    product.images.some(image => 
        newImages.some(newImage => newImage.src === image.src),

)
);

if (imageExists) {
    console.log(`Image ${newImages[0].src} already exists`);
    return;
}

const productExists = Products.some(product => 
    product.name === newName
);

if (productExists) {
    console.log(`Product ${newName} already exists`);
    return;
}

const product = new ProductItem(newName, newImages, newDescription);
    Products.push(product);
    renderProduct(product);
}


//this one renders it. i added a shopping-products id to the html on your element, so it should work now.
function renderProduct(product) {
    const list = document.querySelector('#shopping-products');
    const item = document.createElement('li');
    item.className = 'Product';
    const image = document.createElement('img');

    image.src = product.images[0].src;
    image.alt = product.images[0].alt;

    const name = document.createElement('h2');
    name.textContent = product.name;
    
    const description = document.createElement('p');
    description.textContent = product.description;

    item.appendChild(image);
    item.appendChild(name);
    item.appendChild(description);
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

const newProducts = [
    {
        name: 'First Item',
        images: [
            { src: 'assets/images/1402431.png', alt: 'First Item' }
        ],
        description: 'First description'
    },
    {
        name: 'Second Item',
        images: [
            { src: 'assets/images/1402431.png', alt: 'Second Item' }
        ],
        description: 'Second description'
    }
];

for (const product of newProducts) {
    addProduct(product.name, product.images, product.description);
}
// this is for manually adding products, i threw some pictures in to test it, we can delete them later.
addProduct(
    'First Item',
    [{ src: 'assets/images/1402431.png', alt: 'First Item' }],
    'First description'
);

addProduct(
    'Second Item',
    [{ src: 'assets/images/image.png', alt: 'Second Item' }],
    'Second description'
);
addProduct(
    'Third Item',
    [{ src: 'assets/images/tim.png', alt: 'Third Item' }],
    'Third description'
);
addProduct(
    'Fourth Item',
    [{ src: 'assets/images/1251757.jpg', alt: 'Fourth Item' }],
    'Fourth description'
);
// the breakpoint you set up for the grid is working perfectly. 
addProduct(
    'Fifth Item',
    [{ src: 'assets/images/51757.jpg', alt: 'Fifth Item' }],
    'Fifth description'
);

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
