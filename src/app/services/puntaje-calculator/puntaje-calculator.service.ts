import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PuntajeCalculatorService {

    constructor() { }

    calcularPuntaje(segundosMeditados, sesionesFinalizadas) {
        var puntosPorSegundoMeditado = 1;
        var puntosPorSesionFinalizada = 10;

        return puntosPorSegundoMeditado * segundosMeditados + puntosPorSesionFinalizada * sesionesFinalizadas;
    }



    calcularNivel(puntaje) {
        const nivel1 = 1500;
        const nivel2 = 3000;
        const nivel3 = 4000;

        if (puntaje <= nivel1) {
            return 1;
        } else if (puntaje > nivel1 && puntaje <= nivel2) {
            return 2;
        } else {
            return 3;
        }
    }

}
