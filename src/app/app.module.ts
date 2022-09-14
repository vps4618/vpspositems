import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    SearchItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
