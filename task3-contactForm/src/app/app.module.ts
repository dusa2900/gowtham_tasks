import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
//import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { RequestInterceptor } from './interceptor/request.interceptor';
import { MatchInterceptor } from './interceptor/match.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true
    },
  {
      provide:HTTP_INTERCEPTORS,
      useClass:MatchInterceptor,
      multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
