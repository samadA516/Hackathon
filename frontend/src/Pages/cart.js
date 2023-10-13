import { useEffect, useState } from "react";
import { MainNav } from "../components/NavBar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
      <div className="m-5">
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
                  <TableCell><img src="./cow.png" width='60px' alt="issa picture" /></TableCell>
                  <TableCell>{item.item}</TableCell>
                  <TableCell>${item.price.toString()[0]}.{item.price?.toString()[1]}{item.price?.toString()[2]}
                  </TableCell>
                  <TableCell>{item.rating}</TableCell>
                  <TableCell>{item.fancy}</TableCell>
                </TableRow>)}
              </TableBody>
            </Table>
          </Card>
          <Card className="w-[300px]">
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
        {
          items.length === 0 ? <p className="leading-7 [&:not(:first-child)]:mt-6 text-center font-semibold">Your cart is empty</p> : null
        } 
        <div className="cart-button-group">
          {
             items.length != 0 && 
              <Button className="buttonSpaced" style={{ marginLeft: "0px", marginRight: "0px" }} onClick={() => routeChange()} variant="outline">Keep Shopping</Button>
          }
          { items.length != 0 && 
          <Dialog>
            <DialogTrigger asChild>
              <Button >Checkout</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogTitle>Payment Method</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-left">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-left">
                    Address
                  </Label>
                  <Input
                    id="username"
                    defaultValue="123 Real Address Ave"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="credit card" className="text-left">
                    Credit Card
                  </Label>
                  <Input
                    id="username"
                    defaultValue="1234-5678-9102"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="credit card" className="text-left">
                    Security Code
                  </Label>
                  <Input
                    id="username"
                    defaultValue="123"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogClose asChild>
                <Button onClick={()=> setItems([])}type="submit">Checkout</Button>
              </DialogClose>
            </DialogContent>
          </Dialog>}
        </div>
      </div>
    </>
  );
};

export default Cart;