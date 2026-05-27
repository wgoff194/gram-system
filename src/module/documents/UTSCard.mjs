/**
 * A simple extension that adds a hook at the end of data prep.
 */
export default class GRAMCard extends foundry.documents.Card {
  /** @inheritdoc */
  prepareDerivedData() {
    super.prepareDerivedData();

    /**
     * Flexible hook for modules to alter derived document data.
     * @param {GRAMCard} card      The card preparing derived data.
     */
    Hooks.callAll("GRAM.prepareCardData", this);
  }
}
