import BaseLayout from '@/components/custom/base-layout'
import ProductCard from '@/components/custom/product-card'
import UnderlinedText from '@/components/text-decorators/underlined-text'
import { products } from '@/dummy_data'
import prisma from '@/lib/db'
import React from 'react'

export default async function MerchPage() {
    const products = await prisma.product.findMany({
		where: {
			isArchived: false,
		},
	})

    return (
        <BaseLayout renderRightPanel={false}>
            <div className='px-3 md:px-10 my-10'>
                <h1 className='text-3xl text-center my-5 font-bold tracking-tight'>
                    Our <UnderlinedText className='decoration-wavy'>Products</UnderlinedText>
                </h1>

                <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </BaseLayout>
    )
}
