
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(

    <Provider store={store}>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </Provider>

)
