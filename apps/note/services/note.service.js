import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    queryNotes,
    addNote,
    updateNote,
    removeNote,
    getNoteById,
    changeColor,
    pinNote
}

function queryNotes() {
    let notes = storageService.loadFromStorage('notesDB')

    if (!notes || notes.length === 0) {
        notes = gNotes
        storageService.saveToStorage('notesDB', notes)
    }
    return Promise.resolve(notes)
}

function pinNote(id) {
    let notes = storageService.loadFromStorage('notesDB')
    const note = notes.find(note=> note.id === id)
    note.isPinned = !note.isPinned
    storageService.saveToStorage('notesDB', notes)
    return Promise.resolve(notes)
}

function getNoteById(id) {
    let notes = storageService.loadFromStorage('notesDB')
    const note = notes.find(note => note.id === id)
    return Promise.resolve(note)
}

function addNote(type, content, bgColor) {
    let notes = storageService.loadFromStorage('notesDB')
    let newNote

    switch (type) {
        case 'note-txt':
            newNote = _createNote(type, content, bgColor)
            break;
        case 'note-img':
            newNote = _createNote(type, content, bgColor)
            break;
        case 'note-todos':
            let info = createTodosNote(content)
            newNote = _createNote(type, info, bgColor)
            break;
    }
    notes.unshift(newNote)
    storageService.saveToStorage('notesDB', notes)
    return Promise.resolve(newNote)
}

function createTodosNote(content) {
    const info = {
        title: content.title,
        todos: []
    }
    let todoSpliter = content.txt.split(",")
    const todos = todoSpliter.map(todo => {
        info.todos.push({ txt: todo, doneAt: null })
    })

    return info
}

function changeColor(noteId, color) {
    let notes = storageService.loadFromStorage('notesDB')
    const note = notes.find(note => note.id === noteId)
    note.style.backgroundColor = color
    storageService.saveToStorage('notesDB', notes)
    return Promise.resolve(notes)
}

function updateNote(updatedNote) {
    let notes = loadFromStorage('notesDB')
    notes = notes.map(note => note.id === updatedNote.id ? updatedNote : note)
    storageService.saveToStorage("notesDB", notes)
    return Promise.resolve(updatedNote)
}

function removeNote(id) {
    let notes = storageService.loadFromStorage('notesDB')
    notes = notes.filter(note => note.id !== id)
    storageService.saveToStorage('notesDB', notes)
    return Promise.resolve()
}

function _createNote(type, content, bgColor) {
    return {
        id: utilService.makeId(3),
        type,
        isPinned: false,
        info: content,
        style: {
            backgroundColor: bgColor
        }
    }
}

const gNotes = [
    {
        id: 101,
        type: "note-txt",
        isPinned: true,
        info: {
            title: "Hi there",
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "lightseagreen"
        }
    },
    {
        id: 102,
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "lightseagreen"
        }
    },
    {
        id: 103,
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "lightseagreen"
        }
    },
    {
        id: 104,
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "lightseagreen"
        }
    },
    {
        id: 105,
        type: "note-img",
        info: {
            title: "https://picsum.photos/seed/picsum/200/300",
            txt: "Bobi and Messsssss sssssssss"
        },
        style: {
            backgroundColor: "lightseagreen"
        }
    },
    {
        id: 106,
        type: "note-todos",
        info: {
            title: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "lightseagreen"
        }
    }
];