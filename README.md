# Terraforming Mars

Personal project to port the board game Terraforming Mars into a react webapp. Built using Typescript, React for the frontend and Node for the backend.

## Cards

Currently cards are designed with inheritance. Possibly looking into transistioning the cards to using a composition style.

### Card Composition

- every card should have an `activate` method
  Corporation cards will assign the corporate to the player and change and passive.
