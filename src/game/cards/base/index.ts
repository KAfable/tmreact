// import Card from '../Card';
import Player from '../../Player';
// import { BasicResource } from '../Resource';
import CardBuilder from '../../cardBuilder';
import { CardNames } from '../CardNames';
import { Tags } from 'src/game/card/Tags';
import Game, { GlobalParameter } from '../..';
import { BasicResource } from 'src/game/Resource';

// 001 Colonizer Training Camp
const colonizerTrainingCamp = new CardBuilder(CardNames.COLONIZER_TRAINING_CAMP)
  .setID('001')
  .isProject(8)
  .addTags([Tags.JOVIAN, Tags.BUILDING])
  .addGlobalRequirement({ min: true, amount: 5, type: GlobalParameter.OXYGEN })
  .addVictoryPoints(2)
  .build();

// 003 Deep Well Heating
const deepWellHeating = new CardBuilder(CardNames.DEEP_WELL_HEATING)
  .setID('003')
  .isProject(13)
  .addTags([Tags.ENERGY, Tags.BUILDING])
  .addProduction({ production: BasicResource.ENERGY, steps: 1 })
  .increaseGlobalParameter({ param: GlobalParameter.TEMP, steps: 1 })
  .build();

// 004 Cloud Seeding
const cloudSeeding = new CardBuilder(CardNames.CLOUD_SEEDING)
  .setID('004')
  .isProject(11)
  .addGlobalRequirement({
    min: true,
    amount: 3,
    type: GlobalParameter.OCEAN_COUNT,
  })
  .addProduction({ type: BasicResource.PLANTS, amount: 2 })
  .decreaseProduction([{ type: BasicResource.MEGACREDITS, amount: 1 }])
  .decreaseAnyProduction({ type: BasicResource.HEAT, amount: 1 })
  .build();

// 005 Seach For Life
const seachForLife = new CardBuilder(CardNames.SEARCH_FOR_LIFE)
  .setID('005')
  .isProject(3)
  .addTags(Tags.SCIENCE)
  .addGlobalRequirement({ min: true, type: GlobalParameter.OXYGEN, amount: 6 })
  .addDynamicVP()
  .build();

// 007 Martian Rails
const martianRails = new CardBuilder(CardNames.MARTIAN_RAILS)
  .setID('007')
  .isProject(13)
  .addTags(Tags.BUILDING)
  .hasActivatedAbility((game: Game, player: Player) => {
    player.receive();
  })
  .build();

module.exports = { deepWellHeating, colonizerTrainingCamp, cloudSeeding };
