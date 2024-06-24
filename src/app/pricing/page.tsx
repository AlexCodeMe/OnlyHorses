import BaseLayout from '@/components/custom/base-layout'
import Pricing from '@/components/custom/pricing'
import React from 'react'

export default function PricingPage() {
    return (
        <BaseLayout renderRightPanel={false}>
            <Pricing />
        </BaseLayout>
    )
}
