import { combineReducers } from 'redux'
import books from './books/reducer'
import categories from './categories/reducer'

export default combineReducers({
    books,
    categories
})