import { useEffect, useState } from "react";
import { MainNav } from "../components/NavBar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";


export const Cart = () => {
  const [items, setItems] = useState([]);
  
  const navigate = useNavigate();
  const routeChange = () => {
      navigate("/");
  }

  useEffect(() => {
    axios.get("api/Cart")
    .then((response) => {
      console.log(response.data);
      setItems(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <>
      <MainNav />
      <div className="cartContainer"> 
      <Card className="w-[800px] theme-color">
      <CardHeader>
        <CardTitle>My shopping cart</CardTitle>
        </CardHeader>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Rating (out of 5)</TableCell>
            <TableCell>Fanciness (out of 5)</TableCell>
          </TableRow>
          {items?.map((item, index) => <TableRow key={index}> 
            <TableCell><img src="./cow.png" width='60px' alt="issa picture"/></TableCell>
            <TableCell>{item.item}</TableCell>
            <TableCell>${item.price}</TableCell>
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
           {items.map((item, index) => (<TableRow>
            <TableCell>{item.item}</TableCell>         
            <TableCell>{item.rating}</TableCell>
          </TableRow>))} 
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
  );
};

export default Cart;