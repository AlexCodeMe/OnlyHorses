import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'
import Sidebar from '../layout/sidebar'
import SuggestedProducts from './suggested-products'

type Props = {
    children: ReactNode
    renderRightPanel?: boolean
}

export default async function BaseLayout({ children, renderRightPanel = true }: Props) {
    const { isAuthenticated } = getKindeServerSession()
    if (!(await isAuthenticated())) return redirect("/")

    return (
        <div className='flex max-w-2xl lg:max-w-7xl mx-auto relative'>
            <Sidebar />

            <div className='w-full lg:w-3/5 flex flex-col border-r'>{children}</div>
            {renderRightPanel && <SuggestedProducts />}
        </div>
    )
}