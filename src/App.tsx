import React from 'react'
import {hot} from 'react-hot-loader/root'
import {Layout} from './shared/Layout'
import './main.global.css'
import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { CardsList } from './shared/CardsList'
import { PostsContextProvider } from './shared/Context/postsContext'
import { Provider} from 'react-redux'
import { rootReducer} from './store/reducer'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { useToken } from './hooks/useToken'





const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [thunk],

  }
);



function AppComponent() {
  useToken()
  return (
      <Layout>
          <Header/>
            <Content>
              <PostsContextProvider > 
                <CardsList />
              </PostsContextProvider >
            </Content>
        </Layout>
  
  )
}

export const App = hot(() =>
  <Provider store={store}>
    <AppComponent />
  </Provider>
 )





