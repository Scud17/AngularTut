import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    products: any[] = [
        {
            "prodid": 2,
            "prodName": "Garden Cart",
            "prodCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling cart",
            "price": 32.99,
            "starRating": 4.2,
            "imgUrl": "asset/images/garden_cart.png"
        },
        {
            "prodid": 5,
            "prodName": "Hammer",
            "prodCode": "TBX-0048",
            "releaseDate": "May 11, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imgUrl": "asset/images/garden_cart.png"
        }
    ];
}