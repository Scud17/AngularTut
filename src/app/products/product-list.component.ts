import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    private _listFilter: string = "";
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        console.log("in Setter:", value);
        this.filteredProducts = this.performFilter(value);
    }
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [
        {
            "prodid": 2,
            "prodName": "Garden Cart",
            "prodCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling cart",
            "price": 32.99,
            "starRating": 4.2,
            "imgUrl": "assets/images/me.jpg"
        },
        {
            "prodid": 5,
            "prodName": "Hammer",
            "prodCode": "TBX-0048",
            "releaseDate": "May 11, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imgUrl": "assets/images/me.jpg"
        }
    ];

    ngOnInit(): void {
        this.listFilter = "cart"
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((prod : IProduct) =>
        prod.prodName.toLocaleLowerCase().includes(filterBy));
    }
}