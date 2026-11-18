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
        this.images = images; //nested images srcs and alts
        this.name = name;
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
    ProductItem(
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
    images = [
        {
            src:'assets/images/placeholder.png', 
            alt:'Placeholder Picture'
        }
    ], 
    name = 'Item Name', 
    description = 'Item Description'
) 
{
    //if () // if it is the same as a placeholder, it doesn't save
    Products.push(
        ProductItem(
            name, 
            images, 
            description
        )
    );
}


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