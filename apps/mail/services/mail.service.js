import { storageService } from '../../../services/storage.service.js'

export const mailService = {
    query,
    getById,
    remove,
    save
}

const KEY = 'mailDB'
var gId = 110

const gMails = [
    {
        id: 'e101',
        title: 'Frontend Development',
        subject: 'Frontend developers work on the part',
        body: 'Frontend developers work on the part of the product with which the user interacts. They are primarily concerned with the user interface (UI). For example, they might create the layout, visual aspects, and interactive elements of a website or app. However, their role isn’t identical to that of a UI or user experience (UX) designer. They also fix bugs and make certain that the UI can run on different browsers.',
        isIn: true,
        isRead: false,
        isStared: false,
        isDraft: false,
        isSent: false,
        sentAt: 1551133930594,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        title: 'Backend Development',
        subject: 'In contrast, a backend developer works',
        body: 'In contrast, a backend developer works with the part of the product users can’t see — the back end. This professional builds the infrastructure that powers the website, app, or program, focusing on functionality, integration of systems, and core logic. They will also deal with the complex, underlying structure, ensuring strong performance, scalability, and security.',
        isIn: true,
        isRead: false,
        isStared: false,
        isDraft: false,
        isSent: false,
        sentAt: 1551133930594,
        from: 'popo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e103',
        title: 'Full-Stack Development',
        subject: 'A full-stack developer works on all',
        body: 'A full-stack developer works on all aspects of the product, including both the front and back ends. To be a successful full-stack developer, you must have strong programming skills, as well as a variety of soft skills that all tech professionals must have, such as problem-solving and critical thinking. At the end of the day, you — and perhaps your team — are responsible for creating a full, complete product.',
        isIn: true,
        isRead: false,
        isStared: false,
        isDraft: false,
        isSent: false,
        sentAt: 1551133930594,
        from: 'koko@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e104',
        title: 'Desktop Development',
        subject: 'Desktop developers exclusively create applications that',
        body: 'Desktop developers exclusively create applications that run on a desktop operating system, such as Windows, Mac, or Linux. This is opposed to developers that create applications that run on mobile, tablet, or other devices.',
        isIn: true,
        isRead: false,
        isStared: false,
        isDraft: false,
        isSent: false,
        sentAt: 1551133930594,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e105',
        title: 'Web Development',
        subject: 'Web development is the process of',
        body: 'Web development is the process of building web applications. People use these apps through an internet browser on a multitude of devices. This is different from a mobile app, which runs on a phone or tablet and doesn’t necessarily require an internet connection to run.',
        isIn: true,
        isRead: false,
        isStared: false,
        isDraft: false,
        isSent: false,
        sentAt: 1551133930594,
        from: 'popo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e106',
        title: 'Database Development',
        subject: 'Not to be confused with a',
        body: 'Not to be confused with a database administrator, who typically works with daily database upkeep and troubleshooting and implements the system, a database developer is responsible for building the database, modifying and designing existing or new programs, and ensuring that they satisfy the requirements of the users. Sometimes, the roles of database administrator and developer do overlap — this depends on the needs of the client or employer.',
        isIn: true,
        isRead: false,
        isStared: false,
        isDraft: false,
        isSent: false,
        sentAt: 1551133930594,
        from: 'koko@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e107',
        title: 'Mobile Development',
        subject: 'As is probably obvious from the',
        body: 'As is probably obvious from the name, a mobile developer builds applications that run natively on mobile devices, including smartphones, tablets, and some types of smartwatches. Usually, these professionals will specialize in either iOS or Android development but not both. ',
        isIn: true,
        isRead: false,
        isStared: false,
        isDraft: false,
        isSent: false,
        sentAt: 1551133930594,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e108',
        title: 'Cloud Computing',
        subject: 'Cloud computing encompasses services, programs, and',
        body: 'Cloud computing encompasses services, programs, and applications that run over the cloud. That means they can be accessed remotely from practically any location, provided the user has an internet connection and an appropriate login. They offer plenty of advantages, including scalability. ',
        isIn: true,
        isRead: false,
        isStared: false,
        isDraft: false,
        isSent: false,
        sentAt: 1551133930594,
        from: 'popo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e109',
        title: 'DevOps Engineering',
        subject: 'DevOps is a set of practices',
        body: 'DevOps is a set of practices and philosophies that are focused on the quick, efficient, and customer-centric delivery of software. Related to Agile, this style has been widely adopted by software developers and teams around the world.',
        isIn: true,
        isRead: false,
        isStared: false,
        isDraft: false,
        isSent: false,
        sentAt: 1551133930594,
        from: 'koko@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e110',
        title: 'Security Engineering',
        subject: 'Everyone knows how important security in',
        body: 'Everyone knows how important security in software is in this day and age. Security software professionals are dedicated to ensuring the security of various technological systems. They must have extensive knowledge of the methodology, practices, tools, and patterns cybercriminals employ to hack software so they can help prevent these attacks from taking place.',
        isIn: true,
        isRead: false,
        isStared: false,
        isDraft: false,
        isSent: false,
        sentAt: 1551133930594,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
]

function query() {
    let mails = _loadFromStorage()
    if (!mails || mails.length < 1) {
        mails = gMails
        _saveToStorage(mails)
    }
    return Promise.resolve(mails)
}

function getById(mailId) {
    if (!mailId) return Promise.resolve(null)
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mailId === mail.id)
    return Promise.resolve(mail)
}

function save(mail) {
    if(mail.id) return _update(mail)
    else return _add(mail)
}

function _add({ title, body, address }) {
    let mails = _loadFromStorage()
    const mail = _createMail(title, body, address)
    mails = [mail, ...mails]
    _saveToStorage(mails)
    return Promise.resolve(mail)
}

function _createMail(title, body, address) {
    gId++
    const subject = body.substring(0, 36)
    return {
        id: 'e' + gId,
        title,
        subject,
        body,
        isIn: false,
        isRead: false,
        isStared: false,
        isDraft: false,
        isSent: true,
        sentAt: Date.now,
        from: 'user@appsus.com',
        to: address
    }
}

function _update(mailToUpdate) {
    let mails = _loadFromStorage()
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
    _saveToStorage(mails)
    return Promise.resolve(mailToUpdate)
}

function remove(mailId) {
    let mails = _loadFromStorage()
    mails = mails.filter(mail => mail.id !== mailId)
    _saveToStorage(mails)
    return Promise.resolve()
}

function _saveToStorage(mails) {
    storageService.saveToStorage(KEY, mails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}
