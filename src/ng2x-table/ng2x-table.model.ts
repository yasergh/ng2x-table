export interface TableConfig {
  options?: TableOption;
  columns?: Array<TableColumn>;
  actions?: {
    header?: Array<TableButton>,
    row?: Array<TableButton>
  };
}

export interface TableOption {
  filter?: boolean;
  sort?: boolean;
  sortBy?: string;
  sortOrder?: string;
  rowsPerPage?: number;
  totalRows?: number;
  page?: number;
  className?: any;
}

export interface TableColumn {
  name: string;
  title?: string;
  filtering?: TableColumnFiltering;
  state?: boolean;
  width?: string;
}

export interface TableButton {
  name: string;
  class?: string;
  icon?: string;
  handler?(): void;
  condition?(): boolean;
}

export interface TableColumnFiltering {
  type?: String;
  placeHolder?: String;
  value?: String;
}
