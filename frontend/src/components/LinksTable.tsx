import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface LinksTableProps {
  title: string;
  links: string[];
}

export default function LinksTable({ title, links }: LinksTableProps) {
  return (
    <>
      <Table className="w-1/3 mt-8">
        <TableCaption>
          A list of relative links found on "{title}".
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Links</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {links.map((link) => (
            <TableRow>
              <TableCell className="font-medium" key={link}>
                {link}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
