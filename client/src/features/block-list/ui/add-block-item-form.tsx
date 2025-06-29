import { UiSelectField } from '@/shared/ui/ui-select-field'
import { useAddBlockItemForm } from '../model/use-add-block-item-form'
import { UiButton } from '@/shared/ui/ui-button'
import { UiTextField } from '@/shared/ui/ui-text-field'
import { AddBlockItemDtoType } from '@/shared/api/generated'

const typeOptions = [
	{ label: 'Website', value: AddBlockItemDtoType.Website },
	{ label: 'Keyword', value: AddBlockItemDtoType.KeyWord },
]

export function AddBlockItemForm() {
	const { handleSubmit, isLoading, register, type } = useAddBlockItemForm()

	return (
		<form onSubmit={handleSubmit} className='flex gap-2'>
			<UiSelectField
				options={typeOptions}
				className='grow min-w-[200px]'
				selectProps={{ placeholder: 'Select type', ...register('type') }}
			/>
			<UiTextField
				className='grow'
				inputProps={{
					placeholder:
						type === 'KeyWord' ? 'Enter keyword' : 'Enter website url',
					...register('data'),
				}}
			/>
			<UiButton variant='primary' disabled={isLoading}>
				Add Block Item
			</UiButton>
		</form>
	)
}
