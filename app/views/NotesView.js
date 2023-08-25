export const NotesView = /*html*/`

<div class="offcanvas offcanvas-start bg-primary" tabindex="-1" id="offcanvas" aria-controls="offcanvas">
<div class="offcanvas-header">
  <h3 class="offcanvas-title">Jots: <span id="notesNumber">0</span></h3>
  <button type="btn btn-close col-2" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
</div>
<div class="offcanvas-body row">
  <div class="col-12 justify-content-between  height100">
    <section class="row" id="notesList">
    </section>

    <form class="row justify-content-evenly pt-3" onsubmit="app.NotesController.createNote()">
      <label for="title">NEW NOTE</label>
      <input class="col-2" type="color" name="color">
      <input class="col-7" type="text" placeholder="Note Title" required minlength="3" maxlength="15" name="title">
      <button class="col-3" type="submit">Add</button>
    </form>
  </div>
</div>
</div>





`