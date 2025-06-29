import { useBlockListQuery } from '@/entities/block-list'
import { UseDebouncedValue } from '@/shared/lib/react-std'
import { useState } from 'react'

export function useBlockItems() {
	const [q, setQ] = useState('')
	const blockListQuery = useBlockListQuery({ q: UseDebouncedValue(q, 275) })

	const items = blockListQuery.data?.items ?? []

	return { items, isLoading: blockListQuery.isLoading, q, setQ }
}
