const notaAlumnos = [];

const nombreAlumno = document.getElementById('name');
const notaMatematica = document.getElementById('matematica');
const notaLengua = document.getElementById('lengua');
const notaSociales = document.getElementById('sociales');
const notaNaturales = document.getElementById('naturales');
const boton = document.getElementById('buttonSubmit');

const notas = document.getElementById("notas_alunos");

let indiceEdicion = -1;

boton.addEventListener('click', (e) => {
    e.preventDefault();

    try {
        const nombre = nombreAlumno.value.trim();
        const matematica = parseFloat(notaMatematica.value) || 0;
        const lengua = parseFloat(notaLengua.value) || 0;
        const sociales = parseFloat(notaSociales.value) || 0;
        const naturales = parseFloat(notaNaturales.value) || 0;

        if (nombre === "") {
            alert("El nombre del alumno no puede estar vacío");
            return;
        }
        if (matematica < 0 || matematica > 10) {
            alert("La nota de matemática debe estar entre 0 y 10");
            return;
        }
        if (lengua < 0 || lengua > 10) {
            alert("La nota de lengua debe estar entre 0 y 10");
            return;
        }
        if (sociales < 0 || sociales > 10) {
            alert("La nota de sociales debe estar entre 0 y 10");
            return;
        }
        if (naturales < 0 || naturales > 10) {
            alert("La nota de naturales debe estar entre 0 y 10");
            return;
        }

        if (indiceEdicion === -1) {
            if (notaAlumnos.some(alumno => alumno.nombre === nombre)) {
                alert("El alumno ya fue ingresado");
                return;
            }
            notaAlumnos.push({ nombre, matematica, lengua, sociales, naturales });
        } else {
            notaAlumnos[indiceEdicion] = { nombre, matematica, lengua, sociales, naturales };
            indiceEdicion = -1;
        }

        actualizarListaNotas();

        nombreAlumno.value = "";
        notaMatematica.value = "";
        notaLengua.value = "";
        notaSociales.value = "";
        notaNaturales.value = "";
    } catch (error) {
        alert("Hubo un error");
    }
});

function actualizarListaNotas() {
    notas.innerHTML = "";

    notaAlumnos.forEach((alumno, index) => {
        const divAlumno = document.createElement("div");
        divAlumno.classList.add("alumnos_notas");
        divAlumno.innerHTML = `
            <p class="nickname">${alumno.nombre}</p>
            <article>
                <p>Matemática: ${alumno.matematica}</p> 
                <p>Lengua: ${alumno.lengua}</p>  
                <p>Sociales: ${alumno.sociales}</p>
                <p>Naturales: ${alumno.naturales}</p>
            </article>
            <button class="editar" data-index="${index}">Editar</button>
        `;
        notas.appendChild(divAlumno);
    });

    document.querySelectorAll(".editar").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            indiceEdicion = e.target.dataset.index;
            const alumno = notaAlumnos[indiceEdicion];

            nombreAlumno.value = alumno.nombre;
            notaMatematica.value = alumno.matematica;
            notaLengua.value = alumno.lengua;
            notaSociales.value = alumno.sociales;
            notaNaturales.value = alumno.naturales;

            boton.textContent = "Actualizar";
        });
    });
}
