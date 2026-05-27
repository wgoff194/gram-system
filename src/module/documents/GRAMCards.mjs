/**
 * A simple extension that adds a hook at the end of data prep.
 */
export default class GRAMCards extends foundry.documents.Cards {
  /** @inheritdoc */
  prepareDerivedData() {
    super.prepareDerivedData();

    /**
     * Flexible hook for modules to alter derived document data.
     * @param {GRAMCards} cards      The cards preparing derived data.
     */
    Hooks.callAll("GRAM.prepareCardsData", this);
  }
}
