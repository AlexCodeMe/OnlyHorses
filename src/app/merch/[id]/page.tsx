import BaseLayout from '@/components/custom/base-layout'
import ProductCard from '@/components/custom/product-card'
import UnderlinedText from '@/components/text-decorators/underlined-text'
import React from 'react'
import ProductCheckout from './product-checkout'
import prisma from '@/lib/db'
import { notFound } from 'next/navigation'

export default async function MerchIdPage({ params }: { params: { id: string } }) {
    const currentProduct = await prisma.product.findUnique({
		where: {
			id: params.id,
		},
	});

	const products = await prisma.product.findMany({
		where: {
			isArchived: false,
			id: { not: params.id },
		},
	})

    if (!currentProduct || currentProduct.isArchived) return notFound()

    return (
        <BaseLayout renderRightPanel={false}>
            <div className='px-3 md:px-7 my-20'>
                <ProductCheckout product={currentProduct} />

                <h1 className='text-3xl text-center mt-20 mb-10 font-bold tracking-tight'>
                    More products from{" "}
                    <UnderlinedText className='decoration-wavy underline-offset-8'>OnlyHorse</UnderlinedText>
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
