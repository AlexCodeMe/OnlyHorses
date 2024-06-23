import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Home, LayoutDashboard, Shirt, User } from "lucide-react";
import ModeToggle from "../custom/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import LogoutButton from "../custom/logout-button";

const SIDEBAR_LINKS = [
    {
        icon: Home,
        label: "Home",
        href: "/",
    },
    {
        icon: Shirt,
        label: "Merch",
        href: "/merch",
    },
]

export default async function Sidebar() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    // const userProfile = await getUserProfileAction()
    const userProfile = {
        id: 123,
        email: "user@gmail.com",
        name: "Alex Doe",
        image: "https://avatar.iran.liara.run/public/girl?username=alex",
        isSubscribed: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    }

    // const isAdmin = process.env.ADMIN_EMAIL === user?.email
    const isAdmin = true

    return (
        <div className='flex lg:w-1/5 flex-col gap-3 px-2 border-r sticky left-0 top-0 h-screen'>
            <Link href='/update-profile' className='max-w-fit'>
                <Avatar className='mt-4 cursor-pointer'>
                    <AvatarImage src={userProfile?.image || "/user-placeholder.png"} className='object-cover' />
                    <AvatarFallback>AM</AvatarFallback>
                </Avatar>
            </Link>

            <nav className='flex flex-col gap-3'>
                {SIDEBAR_LINKS.map((link) => (
                    <Link key={link.href}
                        href={link.href}
                        className='flex w-12 lg:w-full items-center gap-2 hover:bg-primary-foreground font-bold hover:text-primary px-2 py-1 rounded-full justify-center lg:justify-normal'
                    >
                        <link.icon className='w-6 h-6' />
                        <span className='hidden lg:block'>{link.label}</span>
                    </Link>
                ))}

                {isAdmin && (
                    <Link href={"/secret-dashboard"}
                        className='flex w-12 lg:w-full items-center gap-2 hover:bg-primary-foreground font-bold hover:text-primary px-2 py-1 rounded-full justify-center lg:justify-normal'
                    >
                        <LayoutDashboard className='w-6 h-6' />
                        <span className='hidden lg:block'>Dashboard</span>
                    </Link>
                )}

                <DropdownMenu>
                    <div className='flex w-12 lg:w-full items-center gap-2 hover:bg-primary-foreground font-bold hover:text-primary px-2 py-1 rounded-full justify-center lg:justify-normal'>
                        <DropdownMenuTrigger className='flex items-center gap-2'>
                            <User className='w-6 h-6' />
                            <span className='hidden lg:block'>Setting</span>
                        </DropdownMenuTrigger>
                    </div>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href={process.env.STRIPE_BILLING_PORTAL_LINK_DEV + "?prefilled_email=" + user?.email}>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                        </Link>
                        <LogoutButton />
                    </DropdownMenuContent>
                </DropdownMenu>

                <ModeToggle />
            </nav>
        </div>
    )
}