import { UiHeader } from '@/shared/ui/ui-header'
import { ToggleBlockingButton } from '@/features/toggle-blocking/ui/toggle-blocking-button'
import { Profile } from '@/widgets/profile'

export function HomePage() {
	return (
		<div className={'min-h-screen flex flex-col'}>
			<UiHeader right={<Profile />} />

			<div className='grid grid-cols-[200px_1fr]'>
				<aside className='px-5'>
					<ToggleBlockingButton />
				</aside>
				<main className=''>Block List</main>
			</div>
		</div>
	)
}
