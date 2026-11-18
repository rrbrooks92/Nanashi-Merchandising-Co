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
        [
            'assets/images/placeholder.png', 
            'Placeholder Picture'
        ]
    ], 
    newDescription = 'Item Description'
) 
{
    for (const i of newImages) //for all addProduct images
    {
        for (const j of Products) //for all Products
            {
            for (const k of Products[j].ProductItem.images) //for all Products [j] images
                {
                if (Products[j].ProductItem.images[k][0] == i[0]) {
                    console.log(`Image ${newImages[0]} already exists`)
                } //if new image src matches an already existing images src, error
                else if (Products[j].ProductItem.name == newName) {
                    console.log(`A Product named ${newName} already exists`)
                }// if new name matches an old Product name, error
                else if (Products[j].ProductItem.description == newDescription) {
                    console.log(`Somehow, this description already exists for ${Products[j].name}`)
                }// if new description matches an old description, error
            }
        }
    }
    if (newImages == [
        [
            'assets/images/placeholder.png', 
            'Placeholder Picture'
        ]
    ] &&
    newName == 'Item Name' &&
    newDescription == 'Item Description'
    )
    {
        console.log('This matches the Placeholder Product, which already exists')
    }// if it is the same as a placeholder, it doesn't save
    else {
        Products.push(
            ProductItem(
                newName, 
                newImages, 
                newDescription
            )
        );
    }//add new item
}

addProduct(
    'Item Name',
    [
        [
            'assets/images/placeholder.png', 
            'Placeholder Picture'
        ]
    ],
    'Item Description'
)
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