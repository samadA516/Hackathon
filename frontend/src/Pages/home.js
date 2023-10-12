import { useEffect } from "react";
import { MainNav } from "../components/NavBar";
import axios from "axios"; 

export const Home = () => {
    useEffect(() => {
    axios.get("api/items")
      .then((response) => {
       console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
     }, []);
    return (
        <>
            <MainNav />
        </>
    )
}