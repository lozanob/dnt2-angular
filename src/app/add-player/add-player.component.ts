import { Component, OnInit, Input, Output } from '@angular/core';
import { Player} from '../player/player';

@Component({
  selector: 'add-player',
  templateUrl: './add-player.component.html'
})
export class AddPlayerComponent implements OnInit {

  @Input() example:string;

  newPlayer:Player = new Player('','',0);

  savePlayer() {
    let p:Player = new Player(
      this.newPlayer.firstname,
      this.newPlayer.lastname,
      this.newPlayer.num
    );
    // ToDo: modifier le parent depuis l'enfant
    // émettre un événement, en notifier le parent
    //this.players.push(p);
    //this.clearPlayerForm();

  }

  ngOnInit() {
  }

}
