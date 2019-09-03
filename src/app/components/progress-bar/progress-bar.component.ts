import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {


    //Como se va llamar la variable en donde inyecte el componente y como se va a llamar dentro del mismo
    @Input('progress') progress;
    @Input('color') color;
    @Input('animationName') animationName;
    @Input('animationDuration') animationDuration;


    text: string;
    xStart: number;
    xMove: number;
    diferencia: number;

    constructor(private event: Events) {
        this.progress = 0;
    }

    touchstart(event) {
        this.xStart = event.changedTouches[0].clientX;
        this.event.publish("swipes" , true);
        this.event.publish("touchstart");

    }

    touchend(event) {
        let progressPercentage = this.progress / 100;
        this.event.publish("swipes" , false);
        this.event.publish("touchend" , {
          "progressPercentage":progressPercentage
        });
    }

    touchmove(event) {
        this.xMove = event.changedTouches[0].clientX;

        // El eje va de izq a derecha de menor a mayor
        // Si se mueve desde derecha a izq la dif es negativa
        // Si se mueve de izq a derecha la dif es positiva
        let difLocal = this.xMove - this.xStart

        if (Math.abs(difLocal) - Math.abs(this.diferencia) < 0) {
            this.xStart = this.xMove;
        }
        this.diferencia = this.xMove - this.xStart

        if (this.diferencia < 0) {
            // Bajo el progress
            this.difToPercentage("resta");

        } else {
            //Subo el progress
            this.difToPercentage("suma");
        }
    }

    difToPercentage(operacion) {
        if (operacion == "suma") {
            this.progress = this.progress + 0.5;
        } else {
            this.progress = this.progress - 0.5;
        }
    }

    ngOnInit() { }

}
