'use client'

import UnderlinedText from '@/components/text-decorators/underlined-text'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import Post from './post'
import { User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { getPostsAction } from '@/actions/home-screen'

export default function Posts({ isSubscribed, admin }: { isSubscribed: boolean, admin: User }) {
	const { data: posts, isLoading } = useQuery({
		queryKey: ["posts"],
		queryFn: async () => await getPostsAction(),
	})

	return (
		<div>
			{!isLoading &&
				posts?.map((post) => (
					<Post key={post.id}
						post={post}
						admin={admin}
						isSubscribed={isSubscribed}
					/>
				))}

			{isLoading && (
				<div className='mt-10 px-3 flex flex-col gap-10'>
					{[...Array(3)].map((_, i) => (
						<PostSkeleton key={i} />
					))}
				</div>
			)}

			{!isLoading && posts?.length === 0 && (
				<div className='mt-10 px-3'>
					<div className='flex flex-col items-center space-y-3 w-full md:w-3/4 mx-auto '>
						<p className='text-xl font-semibold'>
							No Posts <UnderlinedText>Yet</UnderlinedText>
						</p>

						<p className='text-center'>
							Stay tuned for more posts from{" "}
							<span className='text-primary font-semibold text-xl'>OnlyHorse.</span> You can subscribe to
							access exclusive content when it&apos;s available.
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

function PostSkeleton() {
	return (
		<div className='w-full'>
			<div className='flex flex-col items-center space-y-3 w-full'>
				<div className='flex flex-col gap-2 w-full'>
					<Skeleton className='h-4 w-3/4' />
					<Skeleton className='h-4 w-3/4' />
				</div>
				<Skeleton className='h-[250px] w-full rounded-xl' />
			</div>
		</div>
	)
}