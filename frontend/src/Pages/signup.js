import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,

} from "@/components/ui/card";
import { Link } from "react-router-dom"
import background from "../background-milk.png";


export const SignUp = () => {
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
        <div style={{ backgroundImage: `url(${background})` }}>
         <div class="min-h-screen flex items-center justify-center theme-color">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Already have an account?<Link to="/login"> Click here</Link></CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Username</Label>
                        <Input id="username" placeholder="Username" />
                    </div>
                    <div className="flex flex-col space-y-1.5 mt-2">
                        <Label htmlFor="name">Password</Label>
                        <Input type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="flex flex-col space-y-1.5 mt-2">
                        <Label htmlFor="name">Confirm Password</Label>
                        <Input type="password" id="password" placeholder="Password" />
                    </div>

                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button>Sign up</Button>
                </CardFooter>
            </Card>
        </div>
        </div>
    )
}
