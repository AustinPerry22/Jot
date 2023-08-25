export class Note {
    constructor(data) {
        this.name = data.name
        this.color = data.color
        this.title = data.title || 'Title'
        this.createdTime = new Date()
    }

    get template() {
        return `
    ${this.title} my name is ${this.name}, date = ${this.createdTime.toDateString()} ${this.createdTime.toLocaleTimeString([], { hour: "2-digit", minute: '2-digit' })} 
    `
    }
}