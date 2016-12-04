import {Observable} from "rxjs";
import { Http, Response } from '@angular/http';
import {Injectable} from "@angular/core";
/**
 * Created by georg on 04.12.2016.
 */

@Injectable()
export class bookService {

  private isbn;
  private bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";

  constructor(private http: Http){

  }

  getBookData(isbn: String):Observable<any[]>{
    this.isbn=isbn;
    return this.http.get(this.bookUrl+isbn)
      .map(this.extractData)
      .catch(this.handleError);

  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
