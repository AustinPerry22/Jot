export const NotesView = /*html*/`

<section class="row p-5">
      <div class="col-6">
        <h1><i class="mdi mdi-alpha-j-circle-outline"></i><i class="mdi mdi-alpha-o-circle-outline"></i><i class="mdi mdi-alpha-t-circle-outline"></i></h1>
      </div>
      <div class="col-6 text-end">
        <button class="btn btn-primary rounded-5" data-bs-toggle="offcanvas" href="#offcanvas" role="button"
          aria-controls="offcanvas"><i class="mdi mdi-notebook"></i></button>
      </div>
    </section>

    <section class="row justify-content-center" id="activeNote">
    </section>

    <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvas" aria-controls="offcanvas">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">Jots: <span id="notesNumber">0</span></h3>
      <button type="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" class="btn btn-danger rounded-5">X</button>
    </div>
    <div class="offcanvas-body row">
      <div class="col-12 justify-content-between  height100">
        <section class="row" id="notesList">
        </section>
    
        <form class="row justify-content-evenly pt-3" onsubmit="app.NotesController.createNote()">
          <label for="title" class="fw-bold">NEW JOT</label>
          <div class="col-2">
            <input class="h-100" type="color" name="color" value="#ffffff">
          </div>
          <input class="col-7" type="text" placeholder="Note Title" required minlength="3" maxlength="15" name="title">
          <button class="col-3 btn btn-success" type="submit" data-bs-dismiss="offcanvas">Add</button>
        </form>
      </div>
    </div>
  </div>





`