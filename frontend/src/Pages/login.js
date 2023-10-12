import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Login = () => {
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
            <div>
                <Input />
            </div>
            <Button>Test</Button>
        </>
    )
}