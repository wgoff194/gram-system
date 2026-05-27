/**
 * A simple extension that adds a hook at the end of data prep.
 */
export default class GRAMChatMessage extends foundry.documents.ChatMessage {
  /** @inheritdoc */
  prepareDerivedData() {
    super.prepareDerivedData();

    /**
     * Flexible hook for modules to alter derived document data.
     * @param {GRAMChatMessage} message      The chat message preparing derived data.
     */
    Hooks.callAll("GRAM.prepareChatMessageData", this);
  }
}
