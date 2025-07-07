import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../ui/table";
import { ChevronUp, ChevronDown } from "lucide-react";

interface CustomTableProps {
  headers: Record<string, string>;
  rows: Array<Record<string, any>>;
  sortableKeys?: string[]; // keys allowed to be sorted
}

const CustomTable: React.FC<CustomTableProps> = ({
  headers,
  rows,
  sortableKeys = [],
}) => {
  const keys = Object.keys(headers);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: string) => {
    if (!sortableKeys.includes(key)) return;

    setSortConfig((prev) => {
      if (prev?.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted/50 hover:bg-muted/50">
          {keys.map((key) => (
            <TableHead
              key={key}
              onClick={() => handleSort(key)}
              className={
                sortableKeys.includes(key)
                  ? "cursor-pointer select-none bg-muted/50 hover:bg-muted/70"
                  : "bg-muted/50"
              }
            >
              <div className="flex justify-between items-center gap-1">
                <span>{headers[key]}</span>
                {sortableKeys.includes(key) && (
                  <>
                    {sortConfig?.key === key ? (
                      sortConfig.direction === "asc" ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )
                    ) : (
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    )}
                  </>
                )}
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={i}>
            {keys.map((key) => (
              <TableCell key={key}>{row[key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
