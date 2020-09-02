import CardBuilder from '../../cardBuilder';
import { CardNames } from '../CardNames';
import { Tags } from 'src/game/card/Tags';
import { GlobalParameter } from 'src/game/board';
var colonizerTrainingcamp = new CardBuilder(CardNames.COLONIZER_TRAINING_CAMP)
    .setID('001')
    .isProject(8)
    .addTags([Tags.JOVIAN, Tags.BUILDING])
    .addGlobalRequirement({ min: true, amount: 5, type: GlobalParameter.OXYGEN })
    .addVictoryPoints(2)
    .build();
module.exports = { colonizerTrainingcamp: colonizerTrainingcamp };
//# sourceMappingURL=index.js.map