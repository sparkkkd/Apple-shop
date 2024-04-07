import { ConfigProvider, Pagination } from 'antd'

interface PaginationProps {
	currentPage: number
	total: number
	isLoading: boolean
	onChange?: (page: number) => void
}

export default function PaginationComponent({
	currentPage,
	total,
	onChange,
	isLoading,
}: PaginationProps) {
	return (
		<ConfigProvider
			theme={{
				components: {
					Pagination: {
						itemActiveBg: '#fff',
						itemSize: 42,
					},
				},
				token: {
					colorText: '#fff',
					fontSize: 19,
				},
			}}
		>
			<Pagination
				defaultCurrent={1}
				total={total}
				current={currentPage}
				defaultPageSize={10}
				style={{ textAlign: 'center', marginTop: 30 }}
				onChange={onChange}
				disabled={isLoading}
			/>
		</ConfigProvider>
	)
}
