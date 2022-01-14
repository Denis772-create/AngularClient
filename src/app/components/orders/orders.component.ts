import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookstoreService } from 'src/app/services/bookstore.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Book[] = [];
  columns = ['id', 'author', 'title', 'price'];

  constructor(private bs: BookstoreService) { }

  ngOnInit(): void {
    this.bs.getOrders()
      .subscribe(res => {
        this.orders = res
      })
  }

}
