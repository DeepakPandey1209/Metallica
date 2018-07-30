import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {MatDialog,MatSort, MatPaginator, MatTableDataSource} from '@angular/material';

import {TradeEntity} from '../../models/tradeEntity'
import {RefData} from '../../models/refData'

@Component({
  selector: 'app-trade-grid-view',
  templateUrl: './trade-grid-view.component.html',
  styleUrls: ['./trade-grid-view.component.css']
})
export class TradeGridViewComponent implements OnInit {

  constructor() { }


  
  displayedColumns: string[] = ['tradeDate', 'commodity', 'side', 'quantity', 'price', 'counterParty','location'];
  dataSource = new MatTableDataSource<TradeEntity>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild (MatSort) sort :MatSort;
  @ViewChild('filter') filter:ElementRef;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

 

}



const ELEMENT_DATA = [
  {tradeId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e' , tradeDate:"05/05/2018",
  commodityId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e',
  commodity : "AL",side:"Buy",
   quantity:100,price:100,
  counterParty:"Dolor",counterPartyId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  location:"BA",
  status :"Open",
  locationId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  user : "Deepak",
  userId : "13c1e737-1871-4e6c-8d7d-8d35d1c6e57e"},
  {tradeId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e' , tradeDate:"05/05/2018",
  commodityId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e',
  commodity : "AL",side:"Buy",
   quantity:100,price:100,
  counterParty:"Dolor",counterPartyId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  location:"BA",
  status :"Open",
  locationId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  user : "Deepak",
  userId : "13c1e737-1871-4e6c-8d7d-8d35d1c6e57e"},

  {tradeId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e' , tradeDate:"05/05/2018",
  commodityId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e',
  commodity : "AL",side:"Buy",
   quantity:100,price:100,
  counterParty:"Dolor",counterPartyId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  location:"BA",
  status :"Open",
  locationId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  user : "Deepak",
  userId : "13c1e737-1871-4e6c-8d7d-8d35d1c6e57e"},
  {tradeId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e' , tradeDate:"05/05/2018",
  commodityId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e',
  commodity : "AL",side:"Buy",
   quantity:100,price:100,
  counterParty:"Dolor",counterPartyId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  location:"BA",
  status :"Open",
  locationId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  user : "Deepak",
  userId : "13c1e737-1871-4e6c-8d7d-8d35d1c6e57e"},
  {tradeId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e' , tradeDate:"05/05/2018",
  commodityId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e',
  commodity : "AL",side:"Buy",
   quantity:100,price:100,
  counterParty:"Dolor",counterPartyId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  location:"BA",
  status :"Open",
  locationId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  user : "Deepak",
  userId : "13c1e737-1871-4e6c-8d7d-8d35d1c6e57e"},
  {tradeId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e' , tradeDate:"05/05/2018",
  commodityId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e',
  commodity : "AL",side:"Buy",
   quantity:100,price:100,
  counterParty:"Dolor",counterPartyId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  location:"BA",
  status :"Open",
  locationId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  user : "Deepak",
  userId : "13c1e737-1871-4e6c-8d7d-8d35d1c6e57e"},
  {tradeId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e' , tradeDate:"05/05/2018",
  commodityId: '13c1e737-1871-4e6c-8d7d-8d35d1c6e57e',
  commodity : "AL",side:"Buy",
   quantity:100,price:100,
  counterParty:"Dolor",counterPartyId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  location:"BA",
  status :"Open",
  locationId:"13c1e737-1871-4e6c-8d7d-8d35d1c6e57e",
  user : "Deepak",
  userId : "13c1e737-1871-4e6c-8d7d-8d35d1c6e57e"}
];
