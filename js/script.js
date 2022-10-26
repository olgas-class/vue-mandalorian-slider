/* 
+ MILESTONE 1
Creiamo un oggetto Movie, con le seguenti proprieta: 
- images che conterra una lista di immagini
- title che conterra il titolo del film
- category che conterra la categoria del film
- length che conterra la lunghezza del film in minuti


+ MILESTONE 2
Creare il markup ed utilizzare le direttive vue per stampare a schermo il film in una card. Mostrando la prima immagine, il titolo, la categoria e la lunghezza

MILESTONE 3
Aggiungiamo due frecce al markup e utilizziamole per rendere dimanico lo slider. 
Al click sulla freccia di destra scorriamo all'immagine successiva
Al click sulla freccia di sinistra scorriamo all'immagine precedente


MILESTONE 4
Aggiungiamo le miniature delle altre immagini presenti per il film. Evidenziamo l'immagine selezionata, magari con un border. Quando clicchiamo sulle frecce la miniatura evidenziata cambia.
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      movie: {
        images: [
          "https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg",
          "https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg",
          "https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg",
          "https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg",
          "https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg",
        ],
        title: "The Mandalorian",
        category: "Action",
        length: "120",
      },
      currentSlide: 0
    };
  },
  methods: {
    showNext: function() {
        if (this.currentSlide < this.movie.images.length - 1) {
            this.currentSlide++;
        } else {
            this.currentSlide = 0;
        }
    },
    showPrev: function() {
        if ( this.currentSlide > 0) {
            this.currentSlide--;
        } else {
            this.currentSlide = this.movie.images.length - 1;
        }
    },
    showSlide(clickedSlide) {
        this.currentSlide = clickedSlide;
    } 
  },
  created: function() {
    console.log("ciao, sono stato creato");
    console.log(this.movie);
  }
}).mount("#app");

