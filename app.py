personas = []
iteracion = True

while iteracion:
    peticion = input("Por favor ingrese qué tipo de acción quiere realizar:\n"
                     "1. Ingresar nueva persona y notas\n"
                     "2. Mostrar todos los datos\n"
                     "3. Filtrar por nombre y editar\n"
                     "4. Salir del programa\n"
                     ": ")

    if peticion == "1":
        nombre = input("Ingrese el nombre de la persona: ")
        
        if(personas):
           if any(persona["nombre"] == nombre for persona in personas):
               
            print("-----------------------------------------")
            print("El nombre ya existe.")
            print("-----------------------------------------")
            continue  

        matematica = float(input("Ingrese la nota de matemática: "))
        lengua = float(input("Ingrese la nota de lengua: "))
        sociales = float(input("Ingrese la nota de sociales: "))
        naturales = float(input("Ingrese la nota de naturales: "))
        
        persona = {
            "nombre": nombre,
            "notas": [
                ["matematica", matematica],
                ["lengua", lengua],
                ["sociales", sociales],
                ["naturales", naturales]
            ]}

        personas.append(persona)
        print("-----------------------------------------")
        print(f"Persona agregada correctamente: {personas}")
        print("-----------------------------------------")


    elif peticion == "2":
        print("-------------------------------------------------")
        print(f"Lista de personas: {personas}" )
        print("-------------------------------------------------")

        

    elif peticion == "3":
        nombre_buscado = input("Ingrese el nombre de la persona que desea buscar: ")
        persona_encontrada = next((persona for persona in personas if persona["nombre"] == nombre_buscado), None)

        if persona_encontrada:
            print("Persona encontrada:", persona_encontrada)
            print("Notas actuales:")
            for materia, nota in persona_encontrada["notas"]:
                print(f"  {materia}: {nota}")

            materia = input("Ingrese la materia a modificar (matematicas, lengua, sociales, naturales): ")

            for i, (materia_actual, _) in enumerate(persona_encontrada["notas"]):
                if materia_actual.lower() == materia.lower():
                    nueva_nota = float(input(f"Nueva nota para {materia}: "))
                    persona_encontrada["notas"][i][1] = nueva_nota
                    print(f"Nota de {materia} actualizada con éxito.")
                    break
            else:
                print("Materia no válida.")
        else:
            print("No se encontró ninguna persona con ese nombre.")


    elif peticion == "4":
        iteracion = False
        print("Saliendo del programa...")

    else:
        print("Opción no válida.")

print(personas)
