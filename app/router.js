import { NotesController } from "./controllers/NotesController.js";


export const router = [
  {
    path: '',
    controller: NotesController,
    // view: /*html*/`
    // <div class="card">
    //   <div class="card-body">
    //     <p id="notes"></p>
    //   </div>
    // </div>
    // `
  }
]