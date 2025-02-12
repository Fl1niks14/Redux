import Ddd from './components/Ddd'
import ViueName from './components/ViewName'
import store from './Store/store'
import { Provider } from 'react-redux'

const App = () => {
	return (
		<>
			<Provider store={store}>
				<Ddd />
				<ViueName />
			</Provider>
		</>
	)
}

export default App
