'use client'

import ProductCard from '@/components/custom/product-card'
import { Skeleton } from '@/components/ui/skeleton'
import { products } from '@/dummy_data'
import { useQuery } from '@tanstack/react-query'
import { X } from 'lucide-react'
import React from 'react'
import { getAllProductsAction } from '../actions'

export default function ExistingProducts() {
    const { data: products, isLoading } = useQuery({
		queryKey: ["getAllProducts"],
		queryFn: async () => await getAllProductsAction(),
	})

  return (
    <>
			<p className='text-3xl tracking-tighter my-3 font-medium'>Existing Products</p>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{products?.map((product) => (
					<ProductCard adminView key={product.id} product={product} />
				))}
			</div>

			{!isLoading && products?.length === 0 && (
				<div className='flex flex-col items-center justify-center mt-10 p-6 bg-secondary rounded-lg shadow-md'>
					<X className='h-16 w-16 text-red-600' />
					<p className='text-center text-xl text-red-600 font-semibold mt-4'>No products found</p>
					<p className='text-center text-md text-gray-500 mt-2'>Please add new products to see them here.</p>
				</div>
			)}

			{isLoading && (
				<div className='flex flex-wrap gap-10 justify-start'>
					{[...Array(3)].map((_, i) => (
						<ProductSekeleton key={i} />
					))}
				</div>
			)}
		</>
  )
}

export function ProductSekeleton() {
    return (
        <div className='w-3/4 max-w-48'>
			<div className='flex flex-col items-center space-y-3 w-full'>
				<div className='flex justify-between gap-2 w-full'>
					<Skeleton className='h-4 w-[90px]' />
					<Skeleton className='h-4 w-[50px]' />
				</div>
				<Skeleton className='h-[250px] w-full rounded-xl' />
				<div className='space-y-2 w-full'>
					<Skeleton className='h-4 w-full' />
					<Skeleton className='h-4 w-3/4' />
				</div>
			</div>
		</div>
    )
}