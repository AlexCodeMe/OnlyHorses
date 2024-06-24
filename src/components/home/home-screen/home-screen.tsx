import BaseLayout from '@/components/custom/base-layout'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React from 'react'
import UserProfile from './user-profile'
import Posts from './posts'
import { getUserProfileAction } from '@/app/update-profile/actions'
import prisma from '@/lib/db'
import { notFound } from 'next/navigation'

export default async function HomeScreen() {
  const admin = await prisma.user.findUnique({ where: { email: process.env.ADMIN_EMAIL } })

  const user = await getUserProfileAction()
  if (!user) return notFound()

  return (
    <BaseLayout>
      <UserProfile />
      <Posts admin={admin!} isSubscribed={user?.isSubscribed} />
    </BaseLayout>
  )
}
