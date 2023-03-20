import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class IntInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((response:any) => {

        if (request.url.includes('reqres.in') && response instanceof HttpResponse) {
          const modifiedResponse = response.clone({ body: this.addNameToData(response.body) });
          return modifiedResponse;
        }
        return response;
      })
    );
  }

  addNameToData(data: any): any {
    if(!!data && !Array.isArray(data)){
      data.name = 'Sreehari P';
    }
    return data;
  }
}