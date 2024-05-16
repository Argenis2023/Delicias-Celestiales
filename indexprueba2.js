var error = document.getElementById('error');
var modalErrorContent = document.getElementById('modalErrorContent');
let mensajesError = [];

 function obtenerDatosdeUsuarioContacto(){
   
   let mensajesError = [];
    let name = document.getElementById('nombre');
    let surname= document.getElementById('apellido');
    let phone= document.getElementById('telefono');
    let mail= document.getElementById('correo');  
    let msg = document.getElementById('mensaje'); 


      
    console.log(name);
    console.log(surname);
    console.log(phone);
    console.log(mail);
    console.log(msg);
    

    if(name.value === null || name.value === ''){
      mensajesError.push('Ingresa Nombre');
    }
    if(surname.value === null || surname.value === ''){
      mensajesError.push('Ingresa Apellido');
    }
    if(phone.value === null || phone.value === ''){
      mensajesError.push('Ingresa Teléfono');
    }
    if(mail.value === null || mail.value === ''){
      mensajesError.push('Ingresa Email');
    } else if (!mail.value.includes('@')){
      mensajesError.push('Ingresa un Email valido')
    }
    
    if(msg.value === null || msg.value === ''){
      mensajesError.push('Ingrese Texto')
   }
   

    if (mensajesError.length > 0) {
      showModal(mensajesError.join(', '));
  } else {
    showModal('Éxito');
}

  
   

  return false;
}

function showModal(message) {
  var modalHtml = `
  <div class="modal fade" id="dynamicModal" tabindex="-1" aria-labelledby="dynamicModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="dynamicModalLabel">Mensaje</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  ${message}
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
          </div>
      </div>
  </div>`;

  var modalContainer = document.getElementById('dynamicModalContainer');
  modalContainer.innerHTML = modalHtml;

  var dynamicModal = new bootstrap.Modal(document.getElementById('dynamicModal'));
  dynamicModal.show();
}

function obtenerdatosCreaUsuario() {
  let name = document.getElementById('nombre');
  let surname = document.getElementById('apellido');
  let phone = document.getElementById('telefono');
  let mail = document.getElementById('correo');
  let password = document.getElementById('password');
  let repeatpassword = document.getElementById('repetirpassword');

  function validarPassword(password) {
      const mayuscula = /[A-Z]/;
      const simbolo = /[!@#$%^&*()_\-+=<>?/{}~|]/;

      if (!mayuscula.test(password)) {
          return 'La contraseña debe tener al menos una letra mayúscula';
      }
      if (password.length < 12) {
          return 'La contraseña debe tener al menos 12 caracteres';
      }
      if (!simbolo.test(password)) {
          return 'La contraseña debe tener al menos un símbolo';
      }
      return '';
  }

  let mensajesError = [];

  if (name.value === null || name.value === '') {
      mensajesError.push('Ingresa Nombre');
  }
  if (surname.value === null || surname.value === '') {
      mensajesError.push('Ingresa Apellido');
  }
  if (phone.value === null || phone.value === '') {
      mensajesError.push('Ingresa Teléfono');
  }
  if (mail.value === null || mail.value === '') {
      mensajesError.push('Ingresa Email');
  } else if (!mail.value.includes('@')) {
      mensajesError.push('Ingresa un Email válido');
  }

  if (password.value === null || password.value === '' || repeatpassword.value === null || repeatpassword.value === '') {
      if (password.value === null || password.value === '') {
          mensajesError.push('Ingresa Contraseña');
      }
      if (repeatpassword.value === null || repeatpassword.value === '') {
          mensajesError.push('Ingresa la confirmación de la contraseña');
      }
  } else {
      const mensajePassword = validarPassword(password.value);
      if (mensajePassword) {
          mensajesError.push(mensajePassword);
      } else if (password.value !== repeatpassword.value) {
          mensajesError.push('Las contraseñas no coinciden');
      }
  }

  

  if (mensajesError.length > 0) {
      showModal(mensajesError.join(', '));
  } else {
    showModal('Éxito');
}

  return false;
}

function obtenerDatosLogin(){

   let mensajesError = [];
   let mail = document.getElementById('email');
   let password = document.getElementById('password');

   if(mail.value === null || mail.value === ''){
    mensajesError.push('Ingresa Email');
  } else if (!mail.value.includes('@')){
    mensajesError.push('Ingresa un Email valido')
  }
   
   if(password.value === null || password.value === ''){
      mensajesError.push('Ingresa Contraseña');
    }

    if (mensajesError.length > 0) {
      showModal(mensajesError.join(', '));
  } else {
    showModal('Éxito');
}

  

    return false;

}
 