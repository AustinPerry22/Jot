export class Note {
    constructor(data) {
        this.name = data.name
    }

    get template() {
        return `
    my name is ${this.name}
    `
    }
}