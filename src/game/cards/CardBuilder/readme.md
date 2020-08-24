# CardBuilder API

This is documentation for the CardBuilder API.

## Activation Methods

---

These methods alter the card's activation method, which is a one time event upon activating the card.

## `isCorp` / `isProject` / `isPrelude`

`isProject` takes a project type, which is either `event`, `automated`, or `activated`, as well as a megacredit cost.

`isCorp` takes an integer that sets the price of the card. `isPrelude` does not take any input. It is mandatory that a card have only one of these types.

## `detract` / `grant`

The following would grant 7 plant resources to the player upon activation. It can either take in an array of resources and their amounts, or a single resource.

```ts
const mineralDeposit = CardBuilder("Mineral Deposit");
mineralDeposit.isProject( PROJECT.event, 5 );
mineralDeposit.grant({ RESOURCES.steel: 5 });

const supplyDrop = CardBuilder("Supply Drop")
supplyDrop.isPrelude();
supplyDrop.grant([{ RESOURCES.titanium : 3 }, { RESOURCES.steel : 8 }]);
supplyDrop.grant({ RESOURCES.plant, 3 });

const mine

```

## `requireProduction / grantProduction`

The following would require 2 energy production and provide 2 steel production to the player.

```ts
const undergroundCity = CardBuilder("Underground City");
undergroundCity.isProject(18);
undergroundCity.requireProduction({PRODUCTION.energy: 2})
undergroundCity.grantProduction({PRODUCTION.steel: 2})
```

## Automation Methods

---

These methods add and modify the automated activation methods on a card. Ingame, these are cards that can be triggered one or more times per generation to generate and consume resources, or increase TR.

```ts
WIP;
```

## Trigger Methods

---

These methods will put out an event listener to listen for available events, such as activation of a card with a Jovian tag to grant a megacredit, eg. Saturn Systems.

## `addTagListener`

`addTagListener` accepts a tag, and a callback function that executes.

```ts
const saturnSystems = CardBuilder('Saturn Systems');
saturnSystems.addTagListener(TAG.jovian, () => saturnSystems.grantProduction({PRODUCTION.megaCredit: 1}));
```
