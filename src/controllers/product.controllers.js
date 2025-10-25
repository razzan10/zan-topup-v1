import { prisma } from "../config/db.js";

export const getAllProducts = async (req, res) => {
  try {
    const games = await prisma.game.findMany({
      include: {
        variants: {
          include: {
            variant: true,
          },
        },
      },
    });
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "failed fetching data" });
  }
};

export const createProducts = async (req, res) => {
  try {
    const { name, image, variants } = req.body;

    if (!image || !name) {
      return res.status(400).json({
        message: "Image or name must be provided",
      });
    }

    if (!variants || !Array.isArray(variants) || variants.length === 0) {
      return res.status(400).json({
        message: "Variants must be provided",
      });
    }

    const newProducts = await prisma.game.create({
      data: {
        name,
        image,
        variants: {
          create: variants.map((v) => ({
            variant: {
              create: {
                variantAmount: v.variantAmount,
                price: v.price,
              },
            },
          })),
        },
      },
      include: {
        variants: {
          include: {
            variant: true,
          },
        },
      },
    });

    res.status(201).json({
      message: "Data created",
      data: newProducts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
      error: error.message,
    });
  }
};

export const editProductsById = async (req, res) => {
  const { id } = req.params;
  const { name, image, variantsAdd, variantsDelete } = req.body;

  try {
    const updatedGame = await prisma.game.update({
      where: { id },
      data: {
        name,
        image,
      },
    });

    if (variantsAdd && variantsAdd.length > 0) {
      for (const variant of variantsAdd) {
        const newVariant = await prisma.variants.create({
          data: {
            variantAmount: variant.variantAmount,
            price: variant.price,
          },
        });

        await prisma.gamevariants.create({
          data: {
            gameId: id,
            variantId: newVariant.id,
          },
        });
      }
    }

    if (variantsDelete && variantsDelete.length > 0) {
      for (const variantId of variantsDelete) {
        await prisma.gamevariants.deleteMany({
          where: {
            gameId: id,
            variantId,
          },
        });
      }
    }

    const finalData = await prisma.game.findUnique({
      where: { id },
      include: {
        variants: {
          include: {
            variant: true,
          },
        },
      },
    });

    res.status(201).json({
      message: "updated data success",
      data: finalData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
      error: error.message,
    });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const gameId = req.params.id;

    await prisma.game.delete({
      where: {
        id: gameId,
      },
    });
    res.status(201).json("product deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
      error: error.message,
    });
  }
};
