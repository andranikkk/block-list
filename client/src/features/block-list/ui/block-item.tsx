import { useRemoveBlockItemMutation } from '@/entities/block-list/queries'
import { AddBlockItemDtoType } from '@/shared/api/generated'

export function BlockItem({
	id,
	type,
	data,
}: {
	id: number
	type: AddBlockItemDtoType
	data: string
}) {
	const removeBlockItemMutation = useRemoveBlockItemMutation()
	const handleRemove = () => {
		removeBlockItemMutation.mutate(id)
	}

	return (
		<div className='flex gap-4'>
			<div className='flex flex-col gap-0.5'>
				<div className='text-lg'>{data}</div>
				<div className='text-slate-500'>{type}</div>
			</div>

			<button
				className='ml-auto text-rose-500 hover:text-rose-600 disabled:opacity-50'
				onClick={handleRemove}
				disabled={removeBlockItemMutation.isPending}
			>
				<Trash className='w-6 h-6' />
			</button>
		</div>
	)
}

const Trash = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
		>
			<path
				fill='currentColor'
				d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z'
			/>
		</svg>
	)
}
