import { useEffect, useState } from "react";
import { MainNav } from "../components/NavBar";
import { Input } from "@/components/ui/input"
import { ItemCard } from '@/components/itemCard'
import axios from "axios";

export const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get("api/items")
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
                <Input
                    placeholder="Search for a product"
                    className="w-1/2"
                />
                <div className="displa-block mt-5">
                    <div className="flex display-flex flex-row gap-4 flex-wrap">
                        {items.length>0 &&
                            items.map((item) => <ItemCard item={item} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}