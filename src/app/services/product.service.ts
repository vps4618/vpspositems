import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import items from 'src/assets/items';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://vpsposapi.herokuapp.com/';
  constructor(private http:HttpClient) { }
  HttpOptions ={
    headers:new HttpHeaders({'Content-Type':'application/json'}),
};
    getProductByNameInclude(Name:any){
      
      const findedItems = items.filter((item:any)=> {
          if(item.ItemName.toLowerCase().includes(Name.toLowerCase())){
              return item
          }
      })
      return findedItems;
      //return this.http.get<Product[]>(this.baseUrl+'items/name/'+Name);
    }
    getProductByNameStartsWith(Name:any){
      
      const findedItems = items.filter((item:any)=> {
          if(item.ItemName.toLowerCase().startsWith(Name.toLowerCase())){
              return item
          }
      })
      return findedItems;
      //return this.http.get<Product[]>(this.baseUrl+'items/name/'+Name);
    }

    getProductByBarcode(Barcode:any){
      const findedItems = items.filter((item:any)=> {
        if(item.Barcode.startsWith(Barcode)){
            return item
        }
    })
    return findedItems;
  }

    getProductBySinhalaName(SinhalaName:any){
      const findedItems = items.filter((item:any)=> {
        if(item.SinhalaName.includes(SinhalaName)){
            return item
        }
    })
    return findedItems;
    }
    getProductByCostPrice(Cost:any){
      const findedItems = items.filter((item:any)=> {
        if((item.Cost).toString().startsWith(Cost)){
            return item
        }
    })
    return findedItems;
    }
    
    getProductByWholesale(Wholesale:any){
      const findedItems = items.filter((item:any)=> {
        if((item.Wholesale).toString().startsWith(Wholesale)){
            return item
        }
    })
    return findedItems;
    }

    getProductByBillPrice(Bill:any){
      const findedItems = items.filter((item:any)=> {
        if((item.BillPrice).toString().startsWith(Bill)){
            return item
        }
    })
    return findedItems;
    }

    getProductBySalePrice(Sale:any){
      const findedItems = items.filter((item:any)=> {
        if((item.Price).toString().startsWith(Sale)){
            return item
        }
    })
    return findedItems;
    }
    
    getProductById(Id:any){
      const findedItems = items.filter((item:any)=> {
        return item.ITEM_ID == Id;
    })
    return findedItems;
    }
    
    getDateTimeBySinhalaName(Type:any){
      const findedItems = items.filter((item:any)=> {
        return item.SinhalaName == Type;
    })
    return findedItems;
    }

    getNumberOfItems(){
      const numberOfItems:string = items.length;
      return numberOfItems;
    }

  }

