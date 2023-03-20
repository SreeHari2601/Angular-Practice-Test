import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { UserRoutingModule } from './user/user-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { IntInterceptor } from './int.interceptor';
import { ApiService } from './api.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpDetailsComponent,
    ParentComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule,
    UserRoutingModule,
    AdminRoutingModule
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,useClass:IntInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
