import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';

import '../styles/TrafficTable.css';

const columnHelper = createColumnHelper();

const TrafficTable = ({ data, onDelete, onEdit }) => {
  const columns = useMemo(() => [
    columnHelper.accessor('date', {
      header: 'Date',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('visits', {
      header: 'Visits',
      cell: info => info.getValue(),
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div>
          <button onClick={() => onEdit(row.original)} className="btn btn-sm btn-warning me-2">Edit</button>
          <button onClick={() => onDelete(row.original.id)} className="btn btn-sm btn-danger">Delete</button>
        </div>
      ),
    }),
  ], [onDelete, onEdit]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: [],
    },
  });

  return (
    <div className="table-responsive mt-4">
      <table className="table table-hover table-bordered text-center">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()} style={{ cursor: 'pointer' }}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted() === 'asc' ? ' 🔼' : header.column.getIsSorted() === 'desc' ? ' 🔽' : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrafficTable;
