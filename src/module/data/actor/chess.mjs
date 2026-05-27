/**
 * Simple data model for chess pieces as a type of actor.
 */
export default class ChessModel extends foundry.abstract.TypeDataModel {
  /** @inheritdoc */
  static LOCALIZATION_PREFIXES = ["GRAM.Chess"];

  /* -------------------------------------------------- */

  /** @inheritdoc */
  static defineSchema() {
    return {
      piece: new foundry.data.fields.StringField({
        required: true,
        choices: CONFIG.GRAM.chess.pieces,
        initial: "pawn",
      }),
    };
  }
}
