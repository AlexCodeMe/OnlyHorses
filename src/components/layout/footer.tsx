import React from 'react'

export default function Footer() {
  return (
    <footer className='md:px-8 md:py-0 border-t'>
			<div className='container flex  items-center gap-4 h-24'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Built by{" "}
					<a
						href='https://twitter.com/shadcn'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						AlexCodeMe
					</a>
					. The source code is available on{" "}
					<a
						href='https://github.com/alexcodeme'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
  )
}
