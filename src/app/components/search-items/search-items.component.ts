import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {
  public selectedProduct !:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // this.productService.getProductByName('munchee').subscribe((res=>{
    //   this.selectedProduct = res;
    //   console.log(this.selectedProduct);
    // }))
    // this.productService.getAllProducts().subscribe((res) => {
    //   this.selectedProduct =  res;
    // })
  }
  public isLoading !:boolean;
  public isEmpty !:boolean;
  public input !:any;

  searchItems(){
    this.isEmpty = false;
    this.isLoading = true;
    setTimeout(() => {
      const inputField = document.getElementById('input') as HTMLInputElement;
      this.input = inputField.value;
      const selector = document.getElementById('selector') as HTMLSelectElement;
      const value = selector.options[selector.selectedIndex].value;
      const selectorName = document.getElementById('selectorName') as HTMLSelectElement;
      const valueName = selectorName.options[selectorName.selectedIndex].value;
      if(value=='1'){
        if(valueName == '1'){
          this.selectedProduct = this.productService.getProductByNameStartsWith(this.input);
        }else if(valueName == '2'){
          this.selectedProduct = this.productService.getProductByNameInclude(this.input);
        }else{
          alert('Please select name type');
        }
      
      }else if(value == '3'){
        this.selectedProduct = this.productService.getProductByBarcode(this.input);
      }else if(value == '2'){
      this.selectedProduct = this.productService.getProductBySinhalaName(this.input);
      }else if(value == '4'){
        this.selectedProduct = this.productService.getProductByCostPrice(this.input);
      }else if(value == '5'){
        this.selectedProduct = this.productService.getProductByWholesale(this.input);
      }else if(value == '6'){
        this.selectedProduct = this.productService.getProductByBillPrice(this.input);
      }else if(value == '7'){
        this.selectedProduct = this.productService.getProductBySalePrice(this.input);
      }else{
        alert('Please select input type');
      }

      if(this.selectedProduct.length == 0){
        this.isEmpty = true;
      }else{
      this.isEmpty = false;
      }

      this.isLoading = false;
    },2000)
    
 }
 
}
