/**
 * A simple extension that adds a hook at the end of data prep.
 */
export default class GRAMItem extends foundry.documents.Item {
  /** @inheritdoc */
  prepareDerivedData() {
    super.prepareDerivedData();

    /**
     * Flexible hook for modules to alter derived document data.
     * @param {GRAMItem} item      The item preparing derived data.
     */
    Hooks.callAll("GRAM.prepareItemData", this);
  }
}
