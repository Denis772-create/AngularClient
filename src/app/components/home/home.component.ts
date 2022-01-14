import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookstoreService } from 'src/app/services/bookstore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tableMode: boolean = true;
  book: Book = new Book();
  books: Book[] = [];
  columns = ['id', 'author', 'title', 'price'];

  constructor(private bs: BookstoreService) { }

  ngOnInit(): void {
    this.bs.getCatalog()
      .subscribe(res => {
        this.books = res
      })
  }

  save() {
    if (this.book.id == null)
      this.bs.createBook(this.book).subscribe(data => this.books.push(data));
    else
      this.bs.updateBook(this.book).subscribe(data => this.ngOnInit());

    this.cancel();
  }

  editBook(book: Book) {
    this.book = book;
  }

  deleteBook(book: Book) {
    this.bs.deleteBook(book.id).subscribe(data => this.ngOnInit());
  }

  addBook() {
    this.cancel();
    this.tableMode = false;
  }

  cancel() {
    this.book = new Book();
    this.tableMode = true;
  }
}
