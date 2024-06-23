import AuthScreen from '@/components/home/auth-screen/auth-screen'
import HomeScreen from '@/components/home/home-screen/home-screen'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export default async function Home() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
 
  console.log({ user }, 'user')
  return (
    <main className=''>
      {user ? <HomeScreen /> : <AuthScreen />}
    </main>
  )
}
