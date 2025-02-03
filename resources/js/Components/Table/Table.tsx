import { Link } from '@inertiajs/react';
import { Table as BSTable } from 'react-bootstrap';
import get from 'lodash/get';
import { ChevronRight } from 'lucide-react';

interface TableProps<T> {
  columns: {
    name: string;
    label: string;
    colSpan?: number;
    renderCell?: (row: T) => React.ReactNode;
  }[];
  rows: T[];
  getRowDetailsUrl?: (row: T) => string;
}

export default function Table<T>({
  columns = [],
  rows = [],
  getRowDetailsUrl
}: TableProps<T>) {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <BSTable hover responsive className="mb-0">
        <thead>
          <tr>
            {columns?.map(column => (
              <th
                key={column.label}
                colSpan={column.colSpan ?? 1}
                className="px-3 py-2"
              >
                {column.label}
              </th>
            ))}
            {getRowDetailsUrl && <th className="w-px"></th>}
          </tr>
        </thead>
        <tbody>
          {/* Empty state */}
          {rows?.length === 0 && (
            <tr>
              <td
                className="text-center py-5"
                colSpan={getRowDetailsUrl ? columns.length + 1 : columns.length}
              >
                No data found.
              </td>
            </tr>
          )}
          {rows?.map((row, index) => {
            return (
              <tr key={index}>
                {columns.map(column => {
                  return (
                    <td key={column.name}>
                      <Link
                        tabIndex={-1}
                        href={getRowDetailsUrl?.(row) as string}
                        className="d-flex align-items-center px-3 py-2 text-decoration-none text-body"
                      >
                        {column.renderCell?.(row) ??
                          get(row, column.name) ??
                          'N/A'}
                      </Link>
                    </td>
                  );
                })}
                {getRowDetailsUrl && (
                  <td className="w-px">
                    <Link
                      href={getRowDetailsUrl(row)}
                      className="d-flex align-items-center px-3"
                    >
                      <ChevronRight size={24} className="text-secondary" />
                    </Link>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </BSTable>
    </div>
  );
}
