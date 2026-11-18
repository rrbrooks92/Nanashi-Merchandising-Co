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

//Adding items to store, default to placeholder if field is empty
function addProduct(
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

addProduct(
    'Item',
    [
        {
            src: 'dave', 
            alt: 'claude'
        }
    ],
    'Description'
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