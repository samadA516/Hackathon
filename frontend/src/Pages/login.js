import { Button } from "@/components/ui/button";
import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom";

export function Login() {

    const navigate = useNavigate();
    const routeChange = () => {
        navigate("/");
    }

    return (
        <div class="min-h-screen flex items-center justify-center theme-color">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Log in</CardTitle>
                    <CardDescription>Don't have an account? Sign up here</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Username</Label>
                                <Input id="username" placeholder="Usename" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Password</Label>
                                <Input type="password"  id="password" placeholder="Password" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button onClick={() => routeChange()}>Login</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
