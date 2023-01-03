import React, { useEffect, useState } from 'react'
import {hot} from 'react-hot-loader/root'
import {Layout} from './shared/Layout'
import './main.global.css'
import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { CardsList } from './shared/CardsList'
import { Provider} from 'react-redux'
import { rootReducer} from './store/reducer'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Post } from './shared/Post';
import { useToken } from './hooks/useToken'





const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [thunk],
  }
);





function AppComponent() {
  const [mounted, setMounted] = useState(false);
  useToken();
  useEffect(() => {
    setMounted(true);
    
  }, [])

  if (!mounted) return (<></>);

  return (
    <BrowserRouter>
      <Layout>
        <Header></Header>
        <Content>
          <Routes>
            <Route path="/" element={<Navigate replace to="/posts" />}></Route>
            <Route path="auth" element={<Navigate replace to="/posts" />}></Route>
              <Route path="posts/*" element={<CardsList/>}></Route>
              <Route path="posts/:id" element={
                <>
                <CardsList/>
                <Post/>
                </>
              }></Route>
            <Route path='*' element={<ErrorBoundary/>}></Route>
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  )
}



export const App = hot(() =>
  <Provider store={store} >
    <AppComponent/> 
  </Provider>
)

function ErrorBoundary() {
  return (
    <div id="error-page"><h1>Ошибка 404</h1><p>Страница не найдена</p></div>
  )
}



