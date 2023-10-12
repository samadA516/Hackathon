import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom";

export function ItemCard(itemProps) {
    const [item, setItem] = useState();
    useEffect(() => {
        setItem(itemProps);
      }, [itemProps])
    const navigate = useNavigate();
    const routeChange = () => {
        navigate(`/item/${item?.item.item}`);
    }
    console.log(itemProps);
    console.log(item?.item.item);

    return (
            <Card className="w-[300px]">
                <CardHeader>
                    <CardTitle>{item?.item.item}test</CardTitle>
                </CardHeader>
                <CardContent>
                    <img width="100" src="cow.png"/>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => routeChange()}>Add to Cart</Button>
                    <Button onClick={() => routeChange()}>Details</Button>
                </CardFooter>
            </Card>
    )
}
