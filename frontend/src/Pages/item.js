import { useEffect, useState } from "react";
import { MainNav } from "../components/NavBar";
import { useParams, useNavigate } from "react-router-dom";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import axios from "axios";


export const Item = () => {
    const [itemProps, setItemProps] = useState([]);

    const { item } = useParams();
    useEffect(() => {
        axios.get(`api/items/${item}`)
            .then((response) => {
                setItemProps(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const navigate = useNavigate();
    const handleNavigate = (route) => {
        navigate(`../${route}`, { replace: true });
    }

    return (
        <>
            <MainNav />
            <div className="m-5">
                <h1
                    className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center"
                    style={{ marginBottom: "50px" }}
                >
                    {itemProps.item?.replace(/([A-Z])/g, ' $1').trim()}
                </h1>
                <div className="flex justify-center">
                    <img src="cow.png" width="400" />
                    <Card className="w-[300px]">
                        <CardHeader>
                            {/* <CardTitle>card ittle</CardTitle> */}
                        </CardHeader>
                        <CardContent>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">Price: ${itemProps?.price?.toString()[0]}.{itemProps?.price?.toString()[1]}{itemProps?.price?.toString()[2]}</p>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">Durability: 7</p>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">Flavor: 9</p>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">Facyness: 3</p>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">Lactose levels: 8</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button >Add to Cart</Button>
                        </CardFooter>
                    </Card>
                </div>
                <Button onClick={() => handleNavigate("/")} >Keep Shopping</Button>
                <h2 className="scroll-m-2 text-3xl font-semibold tracking-tight transition-colors mt-5 first:mt-0">
                    Related Products
                </h2>
                <div className="flex flex-row gap-1">
                    {
                        ["Yogurt", "Butter", "Cheese", "Parmesan"].map((item) => (
                            <Card 
                                className="w-[300px] mt-5"
                                onClick={() => handleNavigate(`/item/${item}`)}
                            >
                                <p className="leading-7 [&:not(:first-child)]:mt-6 text-center" style={{height: "50px", padding: "10px"}}>{item}</p>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </>
    )
}