import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }

  private baseApiUrl = `${this.apiUrl}api/`;

  getCatalog() {
    return this.http.get<Book[]>(`${this.baseApiUrl}books`);
  }

  getBook(id: number) {
    return this.http.get<Book>(`${this.baseApiUrl}books/${id}`);
  }

  createBook(book: Book) {
    return this.http.post<Book>(`${this.baseApiUrl}books`, book);
  }

  updateBook(book: Book) {
    return this.http.put(`${this.baseApiUrl}books`, book);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.baseApiUrl}books/${id}`);
  }

  getOrders() {
    return this.http.get<Book[]>(`${this.baseApiUrl}orders`);
  }
}
