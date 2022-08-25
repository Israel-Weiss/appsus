import { storageService } from '../../../services/storage.service.js'

export const todoService = {
    queryNoteTodos,
    removeTodo
}

function queryNoteTodos(noteId) {
    if (!noteId) return
    const notes = storageService.loadFromStorage('notesDB')
    const note = notes.find(note => note.id === noteId)
    const todos = note.info.todos
    return Promise.resolve(todos)
}

function removeTodo(noteToEdit, todoIdx) {
    const notes = storageService.loadFromStorage('notesDB')
    const note = notes.find(note => note.id === noteToEdit.id)
    note.info.todos.splice(todoIdx, 1)
    storageService.saveToStorage('notesDB', notes)
    console.log(notes);
    return Promise.resolve()
}