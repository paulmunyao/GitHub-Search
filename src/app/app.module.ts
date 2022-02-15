import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormServiceService } from './form-service.service';
import { FormsModule } from '@angular/forms';
import { SearchRepositoryComponent } from './search-repository/search-repository.component';

@NgModule({
  declarations: [AppComponent, FormComponent, SearchRepositoryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],

  providers: [FormServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
