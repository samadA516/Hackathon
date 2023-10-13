import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react"
import {
    Card,
    CardContent,
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
        setItem({});
    }

    return (
        <Card className="w-[300px]">
            <CardHeader>
                <CardTitle>{item?.item.item.replace(/([A-Z])/g, ' $1').trim()}</CardTitle>
            </CardHeader>
            <CardContent>
                <img width="100" src={`${item?.item.item}.webp`} />
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick = {() => alert('Item added to cart!')} >Add to Cart</Button>
                <Button onClick={() => routeChange()}>Details</Button>
            </CardFooter>
        </Card>
    )
}
