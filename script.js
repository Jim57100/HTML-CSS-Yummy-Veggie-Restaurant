window.addEventListener('load', () => {
  console.log('program ready !')
  window.comments = new Comments();
});

/* Hours & Location - comments section */
class Comments {

  constructor() {

    this.firstName = document.querySelector('#firstName')
    this.sendCommentBtn = document.querySelector('#send');
    this.inputComments = document.querySelector('#inputComments');
    this.comments = document.querySelector('#comments');
    
    this.sendCommentBtn.addEventListener('click', () => {
      this.addComments();
    })

  }

  addComments(){
    
    let nameText = document.createTextNode(this.firstName.value);
    let liName = document.createElement('LI');
    liName.appendChild(nameText);
    liName.className = "font-weight-bold"
    this.comments.appendChild(liName);

    let commentsText = document.createTextNode(this.inputComments.value);
    let liComments = document.createElement('LI');
    liComments.appendChild(commentsText);
    this.comments.appendChild(liComments);
    
    let hr = document.createElement('HR');
    this.comments.appendChild(hr);
    this.firstName.value = "";
    this.inputComments.value = "";
  }

}


/* Activities - Form section */

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()