import { useEffect } from "react";
import { MainNav } from "../components/NavBar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

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

let grid = 5;
  
    const navigate = useNavigate();
    const routeChange = () => {
        navigate("/");
    }


  const itemData = [
    { name: "milk",  price: "$10", rating: 2, fancy: 4},
    { name: "not-milk",  price: "$20", rating: 4, fancy: 5}
  ]
  return (
    <>
      <MainNav />
      <div className="cartContainer"> 
      <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>My shopping cart</CardTitle>
        </CardHeader>
      <Table>
        <TableBody>
          {itemData.map((item, index) => <TableRow>
            <TableCell><img src="./cow.png" width='60px'/></TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.rating}</TableCell>
            <TableCell>{item.fancy}</TableCell>
          </TableRow>)}
          </TableBody>
      </Table>
      </Card>
      <Card className = "w-[300px]">
      <CardHeader>
        <CardTitle>Related Items</CardTitle>
        </CardHeader>
      <Table>
        <TableBody>
          {itemData.map((item, index) => <TableRow>
            <TableCell>{item.name}</TableCell>         
            <TableCell>{item.rating}</TableCell>
          </TableRow>)}
          </TableBody>
      </Table>
      </Card>
      </div>
      <div className = "cart-button-group">
      <Button className = "buttonSpaced">Checkout</Button>
      <Button className = "buttonSpaced" onClick={() => routeChange()}>Keep Shopping</Button>
      </div>
      cart
    </>
  )
}