# ng2x-table

Simple table extension npm package with sorting, filtering, paging... for Angular2 apps

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Feature
- Column sorting (ASE/DESE) .
- Pagination ngx-bootsrap component
- Row Selection with checkbox
- Filtering

## Installation
````
    npm install -s ng2x-table
````
## Usage example
1.include ng2x-table in AppModule.ts
```
import { Ng2xTableModule } from 'ng2x-table';

@NgModule({
  imports: [
    ...
    Ng2xTableModule,
    ...
```
2.use ng2x-table in AppComponent.html
````
<ng2x-table [source]="rows" [config]="config" (ngxChange)="tableChange($event)" ></ng2x-table>

````
2.in the AppComponent.ts you need define config object .

##### Example :
````
import { TableConfig } from 'n2gx-table';
...

export class AppComponent implements OnInit {
public config: TableConfig;

ngOnInit(): void {
    let _self = this;
    this.config = {
          options: {
            filter: true,
            sort: true,
            className: '',
            sortBy: 'email',
            sortOrder: 'asc',
            rowsPerPage: 5,
          },
          columns: [
            {
              name: 'email',
              title: 'email',
              filtering: {type: 'email', placeHolder: 'email'}
    
            },
            {
              name: 'name',
              title: 'full name',
              filtering: {type: 'text', placeHolder: 'name'}
    
            },
            {
              name: 'regDate',
              title: 'Register Date',
              filtering: {type: 'date', placeHolder: 'name'}
    
            },
            {
              name: 'age',
              title: 'age',
              filtering: {type: 'number', placeHolder: 'age'}
    
            }
          ],
          actions: {
            header: [
              {
                name: 'Add',
                class: 'btn btn-sm btn-success',
                handler() {
                  _self.add();
                }
    
              }, {
                name: 'Delete',
                class: 'btn btn-sm btn-danger',
                handler() {
                  _self.delete();
                },
                condition() {
                  return _self.selectRow();
                }
    
              }
            ],
            row: [
              {
                name: 'edit',
                class: 'btn btn-sm btn-success',
                handler() {
                  _self.edit();
                }
    
              },
              {
                name: 'Add',
                class: 'btn btn-sm btn-success',
                handler() {
                  _self.change();
                }
    
              }
            ]
          }
        };
  }
  ...
  selectRow(): boolean {
      return true;
    }
  
    add(): void {
      console.log('action add');
    }
  
    delete(): void {
      console.log('action delete');
    }
    edit(): void {
      console.log('action edit');
    }
    change(): void {
      console.log('action change');
    }
    tableChange(e): void {
    }
}
````