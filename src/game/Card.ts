import Game from './Game';
import Player from './Player';

//Notes from Ray: Did not include Venus because I don't know what that is.

export default interface Card {
  name: string;
  cardNum: string;
  cost: number;
  type: string;  // choices: Corporation, Prelude, Automated, Active, Event
  deck: string;  // choices: Corporate, Prelude, Basic, Venus, Colonies

  reqTemp: number;
  reqOxy: number;
  reqOcean: number;
  reqMaxTemp: number;
  reqMaxOxy: number;
  reqMaxOcean: number;
  reqMaxVenus: number;
  reqCity: number;
  reqTagScience: number;
  reqTagBuilding: number;
  reqTagSpace: number;
  reqTagMicrobe: number;
  reqTagPlant: number;
  reqTagAnimal: number;
  reqTagCity: number;
  reqTagEarth: number;
  reqTagJovian: number;
  reqTagEnergy: number;
  reqTagEvent: number;
  reqOther: boolean;

  tagScience: number;
  tagBuilding: number;
  tagSpace: number;
  tagPlant: number;
  tagAnimal: number;
  tagCity: number;
  tagEarth: number;
  tagJovian: number;
  tagEnergy: number;
  tagVenus: number;
  tagEvent: number;
  tagWild: number;

  affectOpponent: boolean;

  text: string;

  play: (game: Game, player: Player) => Game | undefined;
}
