import React from 'react';
import './Table.css';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

export type TableComponent = React.FC<TableProps> & {
  Header: React.FC<TableHeaderProps>;
  Body: React.FC<TableBodyProps>;
  Row: React.FC<TableRowProps>;
  Head: React.FC<TableHeadProps>;
  Cell: React.FC<TableCellProps>;
};

const TableRoot: React.FC<TableProps> = ({ children, className = '', ...props }) => {
  return React.createElement(
    'table',
    { className: 'nutria-table ' + className, ...props },
    children
  );
};

const TableHeader: React.FC<TableHeaderProps> = ({ children, className = '', ...props }) => {
  return React.createElement(
    'thead',
    { className: 'nutria-table__header ' + className, ...props },
    children
  );
};

const TableBody: React.FC<TableBodyProps> = ({ children, className = '', ...props }) => {
  return React.createElement(
    'tbody',
    { className: 'nutria-table__body ' + className, ...props },
    children
  );
};

const TableRow: React.FC<TableRowProps> = ({ children, className = '', ...props }) => {
  return React.createElement(
    'tr',
    { className: 'nutria-table__row ' + className, ...props },
    children
  );
};

const TableHead: React.FC<TableHeadProps> = ({
  children,
  className = '',
  scope = 'col',
  ...props
}) => {
  return React.createElement(
    'th',
    { className: 'nutria-table__head ' + className, scope, ...props },
    children
  );
};

const TableCell: React.FC<TableCellProps> = ({ children, className = '', ...props }) => {
  return React.createElement(
    'td',
    { className: 'nutria-table__cell ' + className, ...props },
    children
  );
};

export const Table: TableComponent = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
});

export {
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
};

export default Table;
