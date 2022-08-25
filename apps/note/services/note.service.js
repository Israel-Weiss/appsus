import { storageService } from '../../../services/storage.service.js'
import {utilService} from '../../../services/util.service.js'

export const noteService = {
    queryNotes,
    addNote,
    updateNote,
    removeNote,
}

function queryNotes() {
    let notes = storageService.loadFromStorage('notesDB')

    if (!notes || notes.length === 0) {
        notes = gNotes
        storageService.saveToStorage('notesDB', notes)
    }
    return Promise.resolve(notes)
}

function addNote(type,info) {
    let notes = storageService.loadFromStorage('notesDB')
    const newNote = _createNote(type,info)
    if(!notes) {
        notes = []
        notes.unshift(newNote)
        storageService.saveToStorage('notesDB',notes)
        return Promise.resolve(newNote)
    }
    notes.unshift(newNote)
    storageService.saveToStorage('notesDB',notes)
    return Promise.resolve(newNote)
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
    storageService.saveToStorage('notesDB',notes)
    return Promise.resolve()
}

function _createNote(type='note-txt', info) {
    return {
        id: utilService.makeId(3),
        type,
        isPinned: false,
        info
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
        }
    },
    {
        id: 102,
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: 103,
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: 104,
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: 105,
        type: "note-img",
        info: {
            url: "https://picsum.photos/seed/picsum/200/300",
            title: "Bobi and Messsssss sssssssss"
        },
        style: {
            backgroundColor: "lightseagreen"
        }
    },
    {
        id: 106,
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
    }
];