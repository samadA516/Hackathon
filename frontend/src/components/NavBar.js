import { NavLink as Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/seperator";

export function MainNav(
    className,
    ...props
) {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate("/login");
        console.log("Logout");
    }

    return (
        <>
            <nav
                className={cn("flex items-center space-x-4 lg:space-x-6", className)}
                {...props}
            >   
                <img src="./cow.png" width="70px" alt="Description of the image" />
                <p className="grow">
                    The Milk Road
                </p>
                <Link
                    href="/examples/dashboard"
                    style={{margiinRight: "10px"}}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    to="/cart"
                >   
                    Cart
                </Link>
                <Link
                    href="/examples/dashboard"
                    style={{marginRight: "10px"}}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    to="/login"
                >   
                    Logout
                </Link>
            </nav>
            <Separator />
        </>
    )
}