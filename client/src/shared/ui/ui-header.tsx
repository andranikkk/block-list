import clsx from 'clsx'
import { UiLogo } from './ui-logo'

export function UiHeader({
	className,
	right,
}: {
	className?: string
	right?: React.ReactNode
}) {
	return (
		<header
			className={clsx(
				'px-4 py-5 border border-b-slate-300 flex justify-between items-center bg-white',
				className
			)}
		>
			<UiLogo />
			{right}
		</header>
	)
}
