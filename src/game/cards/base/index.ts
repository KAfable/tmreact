// import Card from '../Card';
// import Game from '../Game';
// import Player from '../Player';
// import { BasicResource } from '../Resource';
import CardBuilder from '../../cardBuilder';
import { CardNames } from '../CardNames';
import { Tags } from 'src/game/card/Tags';
import { GlobalParameter } from '../../Game';

// 001 Colonizer Training Camp
export const colonizerTrainingCamp = new CardBuilder(
  CardNames.COLONIZER_TRAINING_CAMP
)
  .setID('001')
  .isProject(8)
  .addTags([Tags.JOVIAN, Tags.BUILDING])
  .addGlobalRequirement({ min: true, amount: 5, type: GlobalParameter.OXYGEN })
  .addVictoryPoints(2)
  .build();
