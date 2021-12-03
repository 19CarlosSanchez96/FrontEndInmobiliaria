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
        
          }else{
              RegistrarUsuario();
              event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function RegistrarUsuario(){
      let nombres = document.querySelector("#txtNombres").value;
      let apellidos = document.querySelector("#txtApellidos").value;
      let correo = document.querySelector("#txtCorreo").value;
      let genero = document.querySelector("#txtGenero").value;

      let url = `http://localhost:3000/clientes`;
      let datos = {
          nombres: nombres,
          apellidos: apellidos,
          email: correo,
          genero: genero

      };
      alert("Registro exitoso");
      fetch(url, {
        method: 'POST',
        body: datos,
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
      .then(mensaje => {
          console.log(mensaje)
      })

  }

  