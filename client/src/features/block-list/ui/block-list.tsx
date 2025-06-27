import { UiTextField } from '@/shared/ui/ui-text-field'
import { useBlockItems } from '../model/use-block-items'
import { UiSpinner } from '@/shared/ui/ui-spinner'
import { BlockItem } from './block-item'

export function BlockList({ className }: { className?: string }) {
	const { items, isLoading, q, setQ } = useBlockItems()

	return (
		<div className={className}>
			<UiTextField
				className='mb-2'
				label='Search...'
				inputProps={{ value: q, onChange: e => setQ(e.target.value) }}
			/>

			<div className='rounded-xl bg-slate-100/50 px-10 py-6'>
				{isLoading && <UiSpinner className='text-teal-600 w-10 h-10 mx-auto' />}
				{items.length === 0 && !isLoading ? (
					<div className='text-xl py-1 text-center'>No items</div>
				) : (
					<div className='flex flex-col gap-4'>
						{items.map(item => (
							<BlockItem {...item} key={item.id} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}
