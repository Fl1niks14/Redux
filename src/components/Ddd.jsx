import { useDispatch } from 'react-redux'

import { setName } from '../Store/Actions/actions'

const Ddd = () => {
	const dispatch = useDispatch()
	const changeName = () => {
		dispatch(
			setName({
				name: 'Luke'
			})
		)
	}

	return (
		<>
			<button onClick={changeName}>Change Name</button>
		</>
	)
}
export default Ddd
