import BaseLayout from '@/components/custom/base-layout'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React from 'react'
import UserProfile from './user-profile'
import Posts from './posts'

export default function HomeScreen() {
  const admin = {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    image: "https://avatar.iran.liara.run/public/girl?username=jane",
  }

  const user = {
    id: 123,
    email: "user@gmail.com",
    name: "John Doe",
    image: "https://avatar.iran.liara.run/public/girl?username=alex",
    isSubscribed: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }

  return (
    <BaseLayout>
      <UserProfile />
      <Posts admin={admin!} isSubscribed={user?.isSubscribed} />
    </BaseLayout>
  )
}
