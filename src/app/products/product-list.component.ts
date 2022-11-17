import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = "";
    sub!: Subscription;
    
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
    products: IProduct[] = [];

    ngOnInit(): void {
        // this.products = this.productService.getProducts();
        // this.filteredProducts = this.products;
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products,
                this.filteredProducts = this.products
            },
            error: err => this.errorMessage = err
        });
    }

    constructor(private productService: ProductService){

    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((prod : IProduct) =>
        prod.prodName.toLocaleLowerCase().includes(filterBy));
    }
    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: "+ message;
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
    
}