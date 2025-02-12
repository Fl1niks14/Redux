import { useSelector } from 'react-redux'

const VuieName = () => {
	const storeName = useSelector(state => state.ReducerName.name)
	return (
		<>
			<h1>{storeName}</h1>
		</>
	)
}

export default VuieName
