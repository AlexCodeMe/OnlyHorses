'use client'

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { DropdownMenuItem } from "../ui/dropdown-menu"

export default function LogoutButton() {
    return (
        <LogoutLink>
            <DropdownMenuItem>Logout</DropdownMenuItem>
        </LogoutLink>
    )
}
