import mongoose from 'mongoose'

const Schema = mongoose.Schema

const todoItemSchema = new Schema({
  title: String,
  description: String,
  isComplete: Boolean,
  color: String,
  dueDate: Date
}, {
  timestamps: true
})

const ToDoItem = mongoose.model('Todo', todoItemSchema)

export { ToDoItem }