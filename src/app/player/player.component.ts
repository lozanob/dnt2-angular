import { Component, OnInit } from '@angular/core';
import { Player} from './player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player1:Player = new Player('Michel', 'Platini', 10, 'Juventus', 'http://www.juventus.com/media/images/news-images/personaggi-storici/frosinone%20juventus%20del%20piero.jpg');
  player2:Player = new Player('Pavel', 'Nedved', 6, '', 'https://static.foba1.com/bilder/spieler/gross/2578.jpg');
  player3:Player = new Player('Thomas', 'Meunier', 4, 'PSG', 'http://www.letelegramme.fr/images/2015/08/19/jean-francois-pincemin-le-meunier-du-moulin-des-iles_2497490.jpg');
  players:Player[];

  defaultColor:string = "red";
  selectColor:string = "blue";
  t:string = "Simple texte";
  //t2:string = "";
  cb:boolean = false; // case décochée par défaut

  //EXO tableau de couleurs
  couleurs:string[] = [
    'red',
    'blue',
    'green',
    'yellow',
    'brown',
    '#9633FF',
    '#55CC3',
    '#000000',
    '#78CFD2',
    '#CCCCCC',
  ];

  // private clearPlayerForm() {
  //   // recree l'objet newPlayer
  //   this.newPlayer = new Player('','',0);
  // }

  // saisie(e) {
  //   this.t += e.key;
  // }

  ngOnInit() {
    this.players = [
      this.player1,
      this.player2,
      this.player3
    ];
  }
}
