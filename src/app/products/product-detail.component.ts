import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail"
  product: IProduct | undefined;
  
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.pageTitle += `: ${id}`;
    this.product = {
        "prodid": 5,
        "prodName": "Hammer",
        "prodCode": "TBX-0048",
        "releaseDate": "May 11, 2021",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imgUrl": "assets/images/me.jpg"
    }
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }
}
