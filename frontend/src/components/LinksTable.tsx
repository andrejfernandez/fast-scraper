import { Table, TableBody, TableCell, TableRow } from "./ui/table";

interface LinksTableProps {
  links: string[];
}

export default function LinksTable({ links }: LinksTableProps) {
  return (
    <Table>
      <TableBody>
        {links.map((link) => (
          <TableRow>
            {!link.startsWith("/") ? (
              <TableCell className="font-medium " key={link}>
                <a href={link} target="_blank" className="hover:underline">
                  {link}
                </a>
              </TableCell>
            ) : (
              <TableCell className="font-medium " key={link}>
                {link}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
