
let tabla = [
    {
        traditional: "90-100",
        point_range: "12-14",
        letter: "A",
        sbg_rating: "5",
        level: "Exceeds proficiency"
    },
    {
        traditional: "80-89",
        point_range: "9-11",
        letter: "B",
        sbg_rating: "4",
        level: "Demonstrates proficiency"
    },
    {
        traditional: "70-79",
        point_range: "6-8",
        letter: "C",
        sbg_rating: "3",
        level: "Approaches proficiency"
    },
    {
        traditional: "60-69",
        point_range: "3-5",
        letter: "D",
        sbg_rating: "2",
        level: "Falls well bellow proficiency"
    }
    , {
        traditional: "<60",
        point_range: "1-2",
        letter: "E",
        sbg_rating: "1",
        level: "Lacks all proficiency"
    },
    {
        traditional: "0",
        point_range: "0",
        letter: "F",
        sbg_rating: "0",
        level: "No attempt made"
    }
]

console.table(tabla);

let opcion = prompt("Introduzca una opción: \nA. Ingreso por notas (0-100) \nB. Ingreso por puntos (0 - 14) \nC. Ingreso por letra (A-F)");


switch (opcion) {
    case 'a':
        let nota = prompt("Ingresa una nota de 0 a 100.");
        traditional(nota);
        break;
    case 'b':
        let point = prompt("Ingresa un puntaje de 0 a 14");
        point_range(point);
        break;

    case 'c':
        let letra = prompt("Ingresa una letra (A-F)")
        letter(letra);        
        break;

    default:
        console.log("Opcion incorrecta");
        break;
}


function traditional(nota) {
    if (nota >= 0 && nota <= 100) {
        if (nota == 100) {
            console.log("Ganador");
            i = 0;
            returnSBG(i);
        }
        if (nota >= 90 && nota < 100) {
            i = 0;
            returnSBG(i);
        }
        if (nota >= 80 && nota <= 89) {
            i = 1;
            returnSBG(i);
        }
        if (nota >= 70 && nota <= 79) {
            i = 2;
            returnSBG(i);
        }
        if (nota >= 60 && nota <= 69) {
            i = 3;
            returnSBG(i);
        }
        if (nota < 60) {
            i = 4;
            returnSBG(i);
        }
        if (nota == 0) {
            i = 5;
            returnSBG(i);
        }

    } if (nota < 0 || nota > 100) {
        console.log("Nota incorrecta.");
    }
}

function point_range(point) {
    if (point >= 0 && point <= 14) {
        if (point == 14) {
            console.log("Ganador");
            i = 0;
            returnSBG(i);
        }
        if (point >= 12 && point < 14) {
            i = 0;
            returnSBG(i);
        }
        if (point >= 9 && point <= 11) {
            i = 1;
            returnSBG(i);
        }
        if (point >= 6 && point <= 8) {
            i = 2;
            returnSBG(i);
        }
        if (point >= 3 && point <= 5) {
            i = 3;
            returnSBG(i);
        }
        if (point >= 1 && point <= 2) {
            i = 4;
            returnSBG(i);
        }
        if (point == 0) {
            i = 5;
            returnSBG(i);
        }

    } if (point < 0 || point > 14) {
        console.log("Puntaje incorrecto.");
    }

}

function letter(letra) {
    switch (letra) {
        case 'a':
            i = 0;
            returnSBG(i);

            break;
        case 'b':
            i = 1;
            returnSBG(i);

            break;
        case 'c':
            i = 2;
            returnSBG(i);

            break;
        case 'd':
            i = 3;
            returnSBG(i);

            break;
        case 'e':
            i = 4;
            returnSBG(i);

            break;
        case 'f':
            i = 5;
            returnSBG(i);
            break;
        default:
            console.log("Letra incorrecta.");
            break;
    }

}

function returnSBG(index) {
    console.log(`El rating SBG del evaluado es: ${tabla[index].sbg_rating}  \nRecomendacion: ${tabla[index].level}`);
}

