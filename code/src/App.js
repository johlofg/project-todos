import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}> 
      <main className="main">     
        <TodoForm />
        <TodoList /> 
      </main>     
    </Provider>
  )
}
