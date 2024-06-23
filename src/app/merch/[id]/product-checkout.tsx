'use client'

import ZoomedImage from '@/components/custom/zoomed-image'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'
import { centsToDollars } from '@/lib/utils'
import { Product } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function ProductCheckout({ product }: { product: Product }) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const { toast } = useToast()
    const router = useRouter()

    async function handleBuyProduct() {}

  return (
    <div className='flex flex-col md:flex-row gap-5'>
			<ZoomedImage imgSrc={product.image} />

			<div className='w-full'>
				<h1 className='text-2xl md:text-4xl font-bold'>{product.name}</h1>
				<p className='text-muted-foreground text-base'>${centsToDollars(product.price)}</p>
				<Label className='mt-5 inline-block'>Size</Label>

				<Select onValueChange={setSelectedSize}>
					<SelectTrigger className='w-[180px] focus:ring-0'>
						<SelectValue placeholder='Select' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='sm'>Small</SelectItem>
						<SelectItem value='md'>Medium</SelectItem>
						<SelectItem value='lg'>Large</SelectItem>
					</SelectContent>
				</Select>

				<Button
					className='mt-5 text-white px-5 py-2 rounded-md'
					// disabled={isPending}
					size={"sm"}
					onClick={handleBuyProduct}
				>Buy Now
					{/* {isPending ? "Processing..." : "Buy Now"} */}
				</Button>
			</div>
		</div>
  )
}
