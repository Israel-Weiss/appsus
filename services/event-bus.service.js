function createEventEmitter() {
    const listenersMap = {}
    // Trick for DEBUG
    window.mapmap = listenersMap
    return {
        on(evName, listener) {
            listenersMap[evName] = (listenersMap[evName]) ? [...listenersMap[evName], listener] : [listener]
            return () => {
                listenersMap[evName] = listenersMap[evName].filter(func => func !== listener)
            }
        },
        emit(evName, data) {
            if (!listenersMap[evName]) return
            listenersMap[evName].forEach(listener => listener(data))
        }
    }
}

export const eventBusService = createEventEmitter()

export function showUserMsg(msg) {
    eventBusService.emit('show-user-msg', msg)
}

export function showSuccessMsg(txt) {
    showUserMsg({ txt, type: 'success' })
}
export function showErrorMsg(txt) {
    showUserMsg({ txt, type: 'error' })
}


// Service Testing:
// eventBus.on('muk', (data)=>{
//     console.log('Got Muk with data:', data)
// })
// eventBus.on('muk', console.log)
// eventBus.on('puk', (level)=>{
//     console.log('Got puk with level:', level)
// })
// const unsubscribe = eventBus.on('puk', data=>{
//     console.log('Mee too:', data)
// })

// setTimeout(()=>{
//     unsubscribe()
// }, 2000)


// eventBus.emit('puk', 100)

// setTimeout(()=>{
//     eventBus.emit('muk', 'Buuuu!')
//     eventBus.emit('puk', 3)
// }, 3000)
