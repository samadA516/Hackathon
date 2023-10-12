import './App.css';
// import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
    // Make the Axios GET request
    //  axios.get(apiUrl)
    //    .then((response) => {
    //      // Handle the successful response here
    //     console.log(response.data);
    //    })
    //    .catch((error) => {
    //      // Handle any errors here
    //      console.error('Error fetching data:', error);
    //    });

    return (
        <>
            <Input />
            <Input />
            <Button>Test</Button>
        </>
    )
}

export default Login;
