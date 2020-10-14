# CardBuilder API

This is documentation for the CardBuilder API. Cardbuilder creates a `card object given the following scripts.

## Play Methods

These methods alter the result of card's play method, which is a one time occurence upon playing the card.

## setID

`setID` takes a string and sets that as the card ID. Since we follow the game creator's ID system, we do not generate our own. Although this does allow a card's ID to be mutatable after creation, it does not yet pose a material concern.

Note that we do not use TypeScript's setters because we still want CardBuilder methods to be chainable, and setters do not return anything, thus making it uncallabe.

## `isCorp` / `isProject` / `isPrelude`

`isProject` takes a project type, which is either `event`, `automated`, or `activated`, as well as a megacredit cost.

`isCorp` and `isPrelude` do not take any inputs. It is mandatory that a card have only one of these types.

## `detract` / `grant`

The following would grant 7 plant resources to the player upon activation. It can either take in an array of resources and their amounts, or a single resource.

```ts
const mineralDeposit = CardBuilder("Mineral Deposit");
mineralDeposit.isProject({type: PROJECT.event, cost: 5 });
mineralDeposit.grant({ RESOURCES.steel: 5 });
mineralDeposit.build();

const supplyDrop = CardBuilder("Supply Drop")
supplyDrop.isPrelude()
  .grant([{ RESOURCES.titanium : 3 }, { RESOURCES.steel : 8 }])
  .grant({ RESOURCES.plant, 3 })
  .build();
```

## `requireProduction / grantProduction`

The following would require 2 energy production and provide 2 steel production to the player.

```ts
const undergroundCity = CardBuilder("Underground City");
  .isProject(18);
  .requireProduction({PRODUCTION.energy: 2})
  .grantProduction({PRODUCTION.steel: 2})
  .build();

```

## Generic Methods

## `addTags`

Takes in an array of `TAGS` and adds them to the card. Note that event tags do not need to be added as they are already part of the event activation method.

## `addTagRequirements`

These take in an array of `TAGS` or an array of `GLOBALS` that represent ingames tags on cards, as well as global parameters.

## `addGlobalRequirements`

These global requirement methods check if the card being played is still within range of the appropriate global parameter, inclusive.

Instead of designing one complex function that takes in a type of global parameter, and a number, each global parameter will have its own method associated with it.

This is due to the fact that all card global requirements in the game are one dimensional in nature, in that they only have one type of requirement rather than 2.

There is no error checking for conflicting global requirements at present time.

## `addVictoryPoints`

```ts
const advancedEcosystems = CardBuilder('Advanced Ecosystems');
advancedEcosystems.addTags([TAGS.microbe, TAGS.animal, TAGS.plant]);
advancedEcosystems.addTagRequirements([TAGS.microbe, TAGS.animal, TAGS.plant]);
advanceEcosystems.addVictoryPoints(3);
```

## Automation Methods

These methods add and modify the automated activation methods on a card. Ingame, these are cards that can be triggered one or more times per generation to generate and consume resources, or increase TR.

### `addActivation` / `hasResourceStorage`

`activate` adds an activated ability that runs a callback upon each activation, it takes an optional 2nd boolean parameter, defaults to `true`, that limits it to once activation per generation.

The callback must rely on `Game` and `Player` methods however, please see the documentation for the `Game` and `Player` classes for the implementation of these activations.

```ts
const livestock = CardBuilder('Livestock');
livestock.isProject({ PROJECT.automated : 9 })
livestock.addActivation((game: Game, player: Player) => player.grant)
livestock.hasResourceStorage(RESOURCES.animal);
```

## Trigger Methods

These methods will put out an event listener to listen for available events, such as activation of a card with a Jovian tag to grant a megacredit, eg. Saturn Systems. The callback in this method will end up altering the `trigger` method on a card instead of the `activate` method.

## `addTagListener`

`addTagListener` accepts a tag, and a callback function that executes. Currently working on how to trace this to the user, or maybe it'll be automatically bound to the user instead, or it might just require that methods used are instead tied to the direct player classes.

```ts
const saturnSystems = CardBuilder('Saturn Systems');
saturnSystems.isCorp();
saturnSystems.addTagListener(TAG.jovian, () => saturnSystems.grantProduction({PRODUCTION.megaCredit: 1}));
```

## `addResourceListener`

`addResourceListener` accepts a resource enum, and a callback function that executes whenever resources are added to a card storage.
