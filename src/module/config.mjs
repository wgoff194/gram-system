const GRAM = {};

GRAM.chess = {
  pieces: {
    pawn: {
      label: "GRAM.Chess.Pieces.P",
      abbr: "P",
      value: 1,
    },
    knight: {
      label: "GRAM.Chess.Pieces.K",
      abbr: "N",
      value: 3,
    },
    bishop: {
      label: "GRAM.Chess.Pieces.B",
      abbr: "B",
      value: 3,
    },
    rook: {
      label: "GRAM.Chess.Pieces.R",
      abbr: "R",
      value: 5,
    },
    queen: {
      label: "GRAM.Chess.Pieces.Q",
      abbr: "Q",
      value: 9,
    },
    king: {
      label: "GRAM.Chess.Pieces.K",
      abbr: "K",
      value: Infinity,
    },
  },
};

export default GRAM;
