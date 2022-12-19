fetch('https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees')
    .then((response) => response.json())
    .then(data => {

        let tbody = document.getElementById('tbody');

        for (let i = 0; i < data.length; i++) {
            let element = data[i];
            
            // creo los elementos dentro del tbody
            let trDatos = document.createElement('tr');
            let tdId = document.createElement('td');
            let tdName = document.createElement('td');
            let tdCity = document.createElement('td');
            let tdBirthday = document.createElement('td');
            let tdEmail = document.createElement('td');
            let tdBtnMostrarMas = document.createElement('td');
            let trOculto = document.createElement('tr');
            trOculto.className = 'trOculto stiloOculto';
            let tdIdOcul = document.createElement('td');
            tdIdOcul.className = 'tdIdOculEstilo;'
            let tdNombreOcul = document.createElement('td');
            tdNombreOcul.className = 'tdNombreOculEstilo';
            let tdCityOcul = document.createElement('td');
            tdCityOcul.className = 'tdCityOculEstilo';
            let tdBirthdayOcul = document.createElement('td');
            tdBirthdayOcul.className = 'tdBirthdayOculEstilo';
            let tdEmailOcul = document.createElement('td');
            tdEmailOcul.className = 'tdEmailOculEstilo';
            let tdBtnGuardarOcul = document.createElement('td');
            tdBtnGuardarOcul.className = 'tdBtnGuardarOculEstilo';
            let tdBtnEliminarOcul = document.createElement('td');
            tdBtnEliminarOcul.className = 'tdBtnEliminarOculEstilo';
            let labelId = document.createElement('label');
            labelId.innerText = element.id;
            let labelNombre = document.createElement('label');
            labelNombre.innerText = "Nombre";
            let labelCity = document.createElement('label');
            labelCity.innerText = "City";
            let labelBirthday = document.createElement('label');
            labelBirthday.innerText = "Birtdhay";
            let labelEmail = document.createElement('label');
            labelEmail.innerText = "Email";
            let inputNombre = document.createElement('input');
            inputNombre.value = element.name;
            let inputCity = document.createElement('input');
            inputCity.value = element.city;
            let inputBirthday = document.createElement('input');
            inputBirthday.value = element.birthday;
            let inputEmail = document.createElement('input');
            inputEmail.value = element.email;

            tdBtnGuardarOcul.innerHTML = `<button type="button" class="btnGuardar">Guardar Cambios</button>`;
            tdBtnEliminarOcul.innerHTML = `<button type="button" class="btnEliminar">Eliminar</button>`;
            tdBtnMostrarMas.innerHTML = `<button type="button" class="btn">Mostrar Mas</button>`;
            tdId.innerText = element.id;
            tdName.innerText = element.name;
            tdCity.innerText = element.city;
            tdBirthday.innerText = element.birthday;
            tdEmail.innerText = element.email;

            tbody.appendChild(trDatos);
            trDatos.appendChild(tdId);
            trDatos.appendChild(tdName);
            trDatos.appendChild(tdCity);
            trDatos.appendChild(tdBirthday);
            trDatos.appendChild(tdEmail);
            trDatos.appendChild(tdBtnMostrarMas);
            tbody.appendChild(trOculto);
            trOculto.appendChild(tdIdOcul);
            trOculto.appendChild(tdNombreOcul);
            trOculto.appendChild(tdNombreOcul);
            trOculto.appendChild(tdCityOcul);
            trOculto.appendChild(tdBirthdayOcul);
            trOculto.append(tdEmailOcul);
            trOculto.appendChild(tdBtnGuardarOcul);
            tdBtnGuardarOcul.appendChild(tdBtnEliminarOcul);
            tdIdOcul.appendChild(labelId);
            tdNombreOcul.appendChild(labelNombre);
            tdNombreOcul.appendChild(inputNombre);
            tdCityOcul.appendChild(labelCity);
            tdCityOcul.appendChild(inputCity);
            tdBirthdayOcul.appendChild(labelBirthday);
            tdBirthdayOcul.appendChild(inputBirthday);
            tdEmailOcul.appendChild(labelEmail);
            tdEmailOcul.appendChild(inputEmail);
        }

        let btns = document.querySelectorAll('.btn');
        let btnsGuardar = document.querySelectorAll('.btnGuardar');
        let btnsEliminar = document.querySelectorAll('.btnEliminar');

        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function (e) {
                let tdElemPadre = this.parentElement;
                let tdElemRaiz = tdElemPadre.parentElement;
                let proxHerm = tdElemRaiz.nextElementSibling;
                proxHerm.classList.toggle("trOculto");
            });
        }

        for (let i = 0; i < btnsGuardar.length; i++) {
            btnsGuardar[i].addEventListener('click', function (e) {

                //accede al inputName recorriendo Dom
                let tdPadreBtnGuardar = this.parentElement;
                let trPadreRaizBtnGuardar = tdPadreBtnGuardar.parentElement;
                let primHijoIdOculto = trPadreRaizBtnGuardar.firstElementChild;
                let segHijoOculto = primHijoIdOculto.nextElementSibling;
                let ultimoHijoInputName = segHijoOculto.lastElementChild;
                //accede al innerTextName reccorriendo Dom                 
                let trInnerText = trPadreRaizBtnGuardar.previousElementSibling;
                let primHijoTextId = trInnerText.firstElementChild;
                let segHijoTextName = primHijoTextId.nextElementSibling;
                //Hace el guardado del Nombre
                segHijoTextName.innerText = ultimoHijoInputName.value;
                //accede al inputCity
                let terHijoOculto = segHijoOculto.nextElementSibling;
                let ultimoHijoInputCity = terHijoOculto.lastElementChild;
                //accede al innerTextCity
                let terHijoTextCity = segHijoTextName.nextElementSibling;
                //Hace el guardado de City
                terHijoTextCity.innerText = ultimoHijoInputCity.value;
                //accede al input Birthday
                let cuartoHijoOculto = terHijoOculto.nextElementSibling;
                let ultimoHijoInputBirthday = cuartoHijoOculto.lastElementChild;
                //accerde al ininerTextBirthday
                let cuartoHijoTextBirthday = terHijoTextCity.nextElementSibling;
                //Hace el guardado de Birthday
                cuartoHijoTextBirthday.innerText = ultimoHijoInputBirthday.value;
                //acceder al input Email
                let quintoHijoOculto = cuartoHijoOculto.nextElementSibling;
                let ultimoHijoInputEmail = quintoHijoOculto.lastElementChild;
                //acceder al innerTextEmail
                let quintoHijoTextEmail = cuartoHijoTextBirthday.nextElementSibling;
                //Hacer el guardado de Email
                quintoHijoTextEmail.innerText = ultimoHijoInputEmail.value;
            })
        }

        for (let i = 0; i < btnsEliminar.length; i++) {
            btnsEliminar[i].addEventListener('click', function (e) {
                let tdPadreBtnGuardar = this.parentElement;
                let tdPadreRaizBtns = tdPadreBtnGuardar.parentElement;
                let trPadreRaizBtns = tdPadreRaizBtns.parentElement;
                let trInnerText = trPadreRaizBtns.previousElementSibling;
                trInnerText.remove();
                trPadreRaizBtns.remove();
            })
        }
    })