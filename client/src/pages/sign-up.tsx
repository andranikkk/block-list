import { SignUpForm } from '@/features/auth'
import { UiFormPageLayout } from '@/shared/ui/layouts/ui-form-page-layout'
import { UiHeader } from '@/shared/ui/ui-header'

export function SignUpPage() {
	return (
		<UiFormPageLayout
			header={<UiHeader />}
			form={<SignUpForm />}
			title='Sign up'
		/>
	)
}
