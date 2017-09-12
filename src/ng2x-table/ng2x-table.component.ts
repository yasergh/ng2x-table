import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableConfig} from './ng2x-table.model';

@Component({
  selector: 'ng2x-table',
  templateUrl: './ng2x-table.component.html',
  styleUrls: ['./ng2x-table.component.css']
})
export class Ng2xTableComponent implements OnInit {

  @Output() ng2xChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() source: Array<any>;
  // public set source(_source: Array<any>) {
  //   this.rows = _source;
  // }
  @Input()
  public set config(conf: TableConfig) {
    if (!conf.options.className) {
      conf.options.className = 'table table-striped table-bordered table-hover  order-column dataTable no-footer';
    }
    if (conf.options.className instanceof Array) {
      conf.options.className = conf.options.className.join(' ');
    }
    this._config = conf;
  }
  private _config: TableConfig ;
  private rows: Array<any>;

  constructor() { }

  ngOnInit() {
    this._config.options.totalRows = this.source.length;
    this.changePage({page: 1 , itemsPerPage: this._config.options.rowsPerPage });

  }

  toInt(num: string) {
    return +num;
  }

  isAllChecked() {
    return this.source.every(x => x.state);
  }

  checkAll(event) {
    this.source.forEach(x => x.state = event.target.checked);
  }

  sort(column): void {
    if (this._config.options.sortBy === column) {
      if (this._config.options.sortOrder === 'desc') {
        this._config.options.sortOrder = 'asc';
      }else {
        this._config.options.sortOrder = 'desc';
      }
    }else {
      this._config.options.sortBy = column;
    }
    this.ng2xChange.emit(this._config);
  }

  sortClass(column): String {
    if (this._config.options.sortBy === column) {
      if (this._config.options.sortOrder === 'desc') {
        return 'sorting_desc';
      }else {
        return 'sorting_asc';
      }
    }
    return 'sorting';
  }

  changePage(page: any) {
    //  console.log(page);
    this._config.options.page = page.page;
    this._config.options.rowsPerPage = page.itemsPerPage;
    const start: number = (page.page - 1) * page.itemsPerPage;
    const end: number = page.itemsPerPage > -1 ? (start + parseInt(page.itemsPerPage, 10 )) : this.source.length;
      console.log('start:' + start + '  end:' + end);
    this.rows = [];
    this.rows = this.source.slice(start, end);
  }

  changeRowPerPage() {
    this.changePage({page: 1 , itemsPerPage: this._config.options.rowsPerPage });
  }

}
