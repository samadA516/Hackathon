import { useEffect, useState } from "react";
import { MainNav } from "../components/NavBar";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { ItemCard } from '@/components/itemCard'
import axios from "axios";

export const Item = () => {
    const [itemProps, setItemProps] = useState([]);
    const { item } = useParams();
    useEffect(() => {
        axios.get(`api/items/${item}`)
            .then((response) => {
                console.log(response.data);
                setItemProps(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            <MainNav />
            <h1 
                className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
                style={{ marginBottom: "50px" }}
            >
                The Joke Tax Chronicles
            </h1>
            <div className="m-5">
            </div>
        </>
    )
}