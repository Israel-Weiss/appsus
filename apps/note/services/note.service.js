import { storageService } from '../../../services/storage.service.js'
export const noteService = {
    queryNotes,
    addNote,
    updateNote,
    removeNote, 
}

function queryNotes() {
    let notes = storageService.loadFromStorage('notesDB')

    if (!notes || notes.length === 0) {
        notes = _createNotes()
        storageService.saveToStorage('notesDB', notes)
    }
    return Promise.resolve(notes)
}

function addNote(note) {
    let notes = storageService.loadFromStorage('notesDB')

    if(!notes) {
        notes = []
        notes.unshift(note)
        storageService.saveToStorage('notesDB',notes)
        return Promise.resolve(note)
    }
    notes.unshift(note)
    storageService.saveToStorage('notesDB',notes)
    return Promise.resolve(note)
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
    storageService.saveToStorage('notesDB','notes')
    return Promise.resolve()
}



function _createNotes() {
    const notes = []
    for (let i = 0; i < 5; i++) {
        notes.unshift(_createNote('note-txt', { txt: `Note ${i}` }))
    }
    return notes
}
function _createNote(type, info) {
    return {
        id: notes[notes.length - 1].id + 1,
        type,
        isPinned: false,
        info
    }
}
const notes = [
    {
        id: 101,
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: 102,
        type: "note-img",
        info: {
            url: "http://some-img/me",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: 103,
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