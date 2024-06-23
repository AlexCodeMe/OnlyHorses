import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { DollarSign } from 'lucide-react'
import { centsToDollars, cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import ZoomedImage from './zoomed-image'
import { Product } from '@prisma/client'

export default function SuggestedProduct({ product }: { product: Product }) {
	return (
		<Card className='flex flex-col'>
			<CardHeader className='px-2 flex flex-row items-center justify-between space-y-0 pb-0'>
				<CardTitle className='text-sm font-medium flex-grow'>
					<p className='w-24 pr-4 text-ellipsis overflow-hidden whitespace-nowrap'>{product.name}</p>
				</CardTitle>
				<div className='flex items-center'>
					<DollarSign className='h-4 w-4 text-muted-foreground' />
					<span className='text-sm pr-2'>{centsToDollars(product.price)}</span>
				</div>
			</CardHeader>
			<CardContent className='flex flex-col flex-1 gap-2 p-2'>
				<ZoomedImage imgSrc={product.image} className='h-44' />
				<div className='flex justify-center mt-auto'>
					<Link href={`/merch/${product.id}`} className={cn("w-full", buttonVariants({ size: "sm" }))}>
						Buy
					</Link>
				</div>
			</CardContent>
		</Card>
	)
}
