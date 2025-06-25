import { useQuery } from '@tanstack/react-query'
import { Inter } from 'next/font/google'
import { authControllerGetSessionInfo } from '@/shared/api/generated'
import { UiButton } from '@/shared/ui/ui-button'
import { UiTextField } from '@/shared/ui/ui-text-field'
import { UiSelectField } from '@/shared/ui/ui-select-field'
import { UiLink } from '@/shared/ui/ui-link'
import { UiSpinner } from '@/shared/ui/ui-spinner'

const inter = Inter({ subsets: ['latin'] })

export function HomePage() {
	const { data } = useQuery({
		queryKey: ['session'],
		queryFn: () => authControllerGetSessionInfo(),
	})
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			{data?.email}
			<UiButton variant='primary'>Primary</UiButton>
			<UiButton variant='secondary'>Secondary</UiButton>
			<UiButton variant='outlined'>Outlined</UiButton>
			<UiButton disabled variant='primary'>
				Primary/Disabled
			</UiButton>

			<UiTextField
				label='Text Field 1'
				inputProps={{ placeholder: 'Placeholder' }}
			/>
			<UiTextField
				error='Error message'
				inputProps={{ placeholder: 'Placeholder' }}
			/>
			<UiTextField inputProps={{ placeholder: 'Placeholder' }} />

			<UiSelectField
				selectProps={{ placeholder: 'Placeholder' }}
				options={[{ value: '1', label: 'Option 1' }]}
			/>

			<UiLink href={'/'}>Link</UiLink>

			<UiSpinner className={'text-teal-600 w-9 h-9'} />
		</main>
	)
}
