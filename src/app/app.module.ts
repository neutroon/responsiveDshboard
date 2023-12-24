import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProductsComponent } from './components/products/products.component';
import { MyTooltipDirective } from './shared/my-tooltip.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SubnavComponent } from './components/subnav/subnav.component';
import { PopupDirective } from './shared/popup.directive';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    NgxSkeletonLoaderModule,
    TableModule

  ],
  providers: [],
  declarations: [
    AppComponent,
    HeaderComponent,
    StatisticsComponent,
    ProductsComponent,
    MyTooltipDirective,
    SubnavComponent,
    PopupDirective,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
