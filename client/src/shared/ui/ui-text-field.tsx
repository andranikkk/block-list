import clsx from 'clsx'
import { InputHTMLAttributes, useId } from 'react'

export type UiTextFieldProps = {
	className?: string
	label?: string
	error?: string
	inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export function UiTextField({
	className,
	label,
	error,
	inputProps,
}: UiTextFieldProps) {
	const id = useId()

	return (
		<div className={clsx(className, 'flex flex-col gap-1')}>
			{label && (
				<label htmlFor={id} className='block'>
					{label}
				</label>
			)}
			<input
				{...inputProps}
				id={id}
				className={clsx(
					inputProps?.className,
					`rounded border ${error ? 'border-rose-400' : 'border-slate-300'} ${error ? 'focus:border-rose-600' : 'focus:border-teal-600'} px-2 h-10 outline-none ${error ? 'bg-rose-50' : ''}`
				)}
			/>
			{error && <div className='text-rose-400 text-sm'>{error}</div>}
		</div>
	)
}
