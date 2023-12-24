import { Component, OnInit } from '@angular/core';


interface Product{

    '#': string,
    code: string,
    name: string,
    description: string,
    image: string,
    price: number,
    category: string,
    quantity: number,
    inventoryStatus: string,
    rating: number

}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  isLooding:boolean = false





  showPopUp(){
    console.log('hello');

  }




  cols = [
    { field: '#', header: '#' },
    { field: 'services', header: 'الخدمات' },
    { field: 'sellingPrice', header: 'سعر البيع' },
    { field: 'typeOfStock', header: 'نوع المخزون' },
    { field: 'serviceCondition', header: 'حالة الخدمة' },
    { field: 'category', header: 'التصنيف' },
    { field: 'tax', header: 'الضريبة %' },
    { field: 'costPrice', header: 'سعر التكلفة' },
    { field: 'sale', header: 'الخصم' },
    { field: 'sellingRate', header: 'معدل البيع' },
    { field: 'setting', header: '../../../assets/imgs/headerIcon.svg' }
]





  Products =
[

  {
    '#': '1',
    services:{
      'type': 'حلاقة الشعر',
      'phone': '126565958987',
      'img': '../../../assets/imgs/3fe9bfbc1cfc318a1309b07c02d57c50.png'
    } ,
    sellingPrice: '3000$',
    typeOfStock: 'تعبئة تلقائية',
    serviceCondition: {
      Sname: 'متوفر',
      icon: '../../../assets/imgs/rightIcon.svg'
    },
    category: {
      cName: 'قص الشعر',
      icon: '../../../assets/imgs/hairCutIcon.svg'
    },
    tax: '% 14',
    costPrice: '150$',
    sale: '200$',
    sellingRate: '../../../assets/imgs/chartIcon.svg',
    setting: {
      eye: '../../../assets/imgs/eyeIcon.svg',
      edit: '../../../assets/imgs/editIcon.svg',
      dialog: '../../../assets/imgs/treeDots.svg'
    },
},
  {
    '#': '2',
    services:{
      'type': 'حلاقة الشعر',
      'phone': '126565958987',
      'img': '../../../assets/imgs/3fe9bfbc1cfc318a1309b07c02d57c50.png'
    } ,
    sellingPrice: '3000$',
    typeOfStock: 'تعبئة تلقائية',
    serviceCondition: {
      Sname: 'متوفر',
      icon: '../../../assets/imgs/rightIcon.svg'
    },
    category: {
      cName: 'قص الشعر',
      icon: '../../../assets/imgs/hairCutIcon.svg'
    },
    tax: '% 14',
    costPrice: '150$',
    sale: '200$',
    sellingRate: '../../../assets/imgs/chartIcon.svg',
    setting: {
      eye: '../../../assets/imgs/eyeIcon.svg',
      edit: '../../../assets/imgs/editIcon.svg',
      dialog: '../../../assets/imgs/treeDots.svg'
    },
},
  {
    '#': '3',
    services:{
      'type': 'حلاقة الشعر',
      'phone': '126565958987',
      'img': '../../../assets/imgs/3fe9bfbc1cfc318a1309b07c02d57c50.png'
    } ,
    sellingPrice: '3000$',
    typeOfStock: 'تعبئة تلقائية',
    serviceCondition: {
      Sname: 'متوفر',
      icon: '../../../assets/imgs/rightIcon.svg'
    },
    category: {
      cName: 'قص الشعر',
      icon: '../../../assets/imgs/hairCutIcon.svg'
    },
    tax: '% 14',
    costPrice: '150$',
    sale: '200$',
    sellingRate: '../../../assets/imgs/chartIcon.svg',
    setting: {
      eye: '../../../assets/imgs/eyeIcon.svg',
      edit: '../../../assets/imgs/editIcon.svg',
      dialog: '../../../assets/imgs/treeDots.svg'
    },
},



]







toggleCard(ele: HTMLElement){
  if(ele.style.maxHeight == '30rem'){
    ele.style.maxHeight = '5rem'
  }else{
    ele.style.maxHeight = '30rem'
  }
}

ngOnInit(): void {
  setTimeout(() => {
    this.isLooding = true
  }, 6000);

}




}
