import { NavLink as Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/seperator";

export function MainNav(
    className,
    ...props
) {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate("/");
    }

    return (
        <>
            <nav
                className={cn("flex items-center space-x-4 lg:space-x-6", className)}
                {...props}
            >
                <img src="./cow.png" width="60px" alt="Description of the image" onClick={() => routeChange()} />
                <p
                    className="grow"
                    onClick={() => routeChange()}
                >
                    The Milk Road
                </p>
                <Link
                    href="/examples/dashboard"
                    style={{ margiinRight: "10px" }}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    to="/cart"
                >
                    Cart
                </Link>
                <Link
                    href="/examples/dashboard"
                    style={{ marginRight: "10px" }}
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