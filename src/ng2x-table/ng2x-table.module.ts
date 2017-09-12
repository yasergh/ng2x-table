import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PaginationModule} from 'ngx-bootstrap';
import {Ng2xTableComponent} from './ng2x-table.component';

@NgModule({
  declarations: [
    Ng2xTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PaginationModule.forRoot(),
  ],
  providers: [
  ],
  exports: [
    Ng2xTableComponent
  ]
})

export class Ng2xTableModule {
  //static forRoot(): ModuleWithProviders;
}
