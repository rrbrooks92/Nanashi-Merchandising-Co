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
    newImages = [
        {
            src:'assets/images/placeholder.png', 
            alt:'Placeholder Picture'
        }
    ], 
    newName = 'Item Name', 
    newDescription = 'Item Description'
) 
{
    for (const i of newImages) //for all addProduct images
    {
        for (const j of Products) //for all Products
            {
            for (const k of Products[j].images) //for all Products [j] images
                {
                if (Products[j].images[k].src == i.src) {
                    console.log('This image already exists', images[i])
                } //if new image src matches an already existing images src, error
                else if (Products[j].name == newName) {
                    console.log(`A Product named ${newName} already exists`)
                }// if new name matches an old Product name, error
                else if (Products[j].description == newDescription) {
                    console.log(`Somehow, this description already exists for ${Products[j].name}`)
                }// if new description matches an old description, error
            }
        }
    }
    if (newImages == [
        {
            src:'assets/images/placeholder.png', 
            alt:'Placeholder Picture'
        }
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