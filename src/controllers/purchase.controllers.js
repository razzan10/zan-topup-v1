import { prisma } from "../config/db.js";

export const getAllProductById = async (req, res) => {
  try {
    const { gameId } = req.params;

    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
      include: {
        variants: {
          include: {
            variant: true,
          },
        },
      },
    });

    if (!game) {
      return res.status(404).json({ message: "game not found" });
    }

    res.json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "failed fetching data." });
  }
};
