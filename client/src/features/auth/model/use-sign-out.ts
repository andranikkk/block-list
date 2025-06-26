import { authControllerSignOut } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/routes'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useResetSession } from '../../../entities/session/queries'

export function useSignOut() {
	const resetSession = useResetSession()
	const router = useRouter()

	const signOutMutation = useMutation({
		mutationFn: authControllerSignOut,
		async onSuccess() {
			router.push(ROUTES.SIGN_IN)
			resetSession()
		},
	})

	return {
		isLoading: signOutMutation.isPending,
		signOut: signOutMutation.mutate,
	}
}
