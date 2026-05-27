/**
 * A simple extension that adds a hook at the end of data prep.
 */
export default class GRAMActor extends foundry.documents.Actor {
  /** @inheritdoc */
  prepareDerivedData() {
    super.prepareDerivedData();

    /**
     * Flexible hook for modules to alter derived document data.
     * @param {GRAMActor} actor      The actor preparing derived data.
     */
    Hooks.callAll("GRAM.prepareActorData", this);
  }
}
