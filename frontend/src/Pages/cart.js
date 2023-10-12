import { useEffect } from "react";
import { MainNav } from "../components/NavBar";
import { Table, TableBody, TableCell } from "@/components/ui/table";
import axios from "axios";

export const Cart = () => {
  useEffect(() => {
    axios.get("api/items")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const values = [
    { name: "asdf" }, { name: "asdf" }
  ]
  return (
    <>
      <MainNav />
      <Table>
        <TableBody>
          {values.map((item) => <TableCell>item.name</TableCell>)}

        </TableBody>
      </Table>
      cart
    </>
  )
}