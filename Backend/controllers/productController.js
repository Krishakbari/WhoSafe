import slugify from "slugify"
import fs from 'fs';
import path from 'path';
import productModel from "../models/productModel.js"
import ImageModel from "../models/imageModel.js"
import cartModel from "../models/cartModel.js";

// create product
export const createProductController = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            rating,
            reviews
        } = req.body;

        const products = new productModel({
            name,
            description,
            price,
            rating,
            reviews,
            slug: slugify(name),
        });

        await products.save();

        // ✅ If photos were uploaded
        if (req.files?.length > 0) {
            const images = await Promise.all(
                req.files.map((f, idx) =>
                    ImageModel.create({
                        product: products._id,
                        url: `/img/${f.filename}`,
                        alt: `${name} photo ${idx + 1}`,
                        order: idx,
                    })
                )
            );

            products.images = images.map((img) => img._id);
            await products.save(); // save again with image refs
        }

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            products,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error creating product",
            error: error.stack, // show full error
        });

    }
};

// get all product
export const getProductController = async (req, res) => {
    try {
        const products = await productModel.find({}).populate({
            path: "images",
            select: "url alt order -_id",
            options: { sort: { order: 1 } },
        }).lean();
        res.json({ products });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in product getting",
            error,
        })
    }
}


export const getSingleProductController = async (req, res) => {
    try {
        const { slug } = req.params;

        const product = await productModel
            .findOne({ slug })  // Match by slug
            .populate({
                path: "images",
                select: "url alt order -_id",
                options: { sort: { order: 1 } },
            })
            .lean();

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching product",
            error,
        });
    }
};


export const deleteProductBySlugController = async (req, res) => {
  try {
    const { slug } = req.params;

    // 1. Find the product with images
    const product = await productModel.findOne({ slug }).populate('images');
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const productId = product._id; // needed for cart cleanup
    console.log("Deleting product ID:", productId);

    // ✅ 2. Remove product from all user carts
    await cartModel.updateMany(
      { "items.product": productId },
      { $pull: { items: { product: productId } } }
    );

    // ✅ 3. Delete physical image files
    if (product.images?.length > 0) {
      for (const image of product.images) {
        const imagePath = path.join(process.cwd(), 'public', image.url);
        if (fs.existsSync(imagePath)) {
          try {
            fs.unlinkSync(imagePath);
            console.log(`Deleted file: ${imagePath}`);
          } catch (fileError) {
            console.error(`Error deleting file ${imagePath}:`, fileError);
          }
        }
      }

      // ✅ 4. Delete image records from DB
      await ImageModel.deleteMany({ product: productId });
    }

    // ✅ 5. Delete the product itself
    await productModel.deleteOne({ _id: productId });

    res.status(200).json({
      success: true,
      message: "Product, images, and related cart items deleted successfully",
    });

  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({
      success: false,
      message: "Error deleting product",
      error: error.message,
    });
  }
};



export const updateProductController = async (req, res) => {
    try {
        const { slug } = req.params;
        const {
            name,
            description,
            price,
            rating,
            reviews,
        } = req.body;

        const product = await productModel.findOne({ slug });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        // Update fields
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.rating = rating || product.rating;
        product.reviews = reviews || product.reviews;
        product.slug = slugify(product.name);

        // If new images uploaded, remove old images and save new ones
        if (req.files?.length > 0) {
            // Delete old images from filesystem
            const oldImages = await ImageModel.find({ product: product._id });
            for (const image of oldImages) {
                const imagePath = path.join(process.cwd(), 'public', image.url);
                if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
            }

            // Remove old image records
            await ImageModel.deleteMany({ product: product._id });

            // Save new images
            const newImages = await Promise.all(
                req.files.map((f, idx) =>
                    ImageModel.create({
                        product: product._id,
                        url: `/img/${f.filename}`,
                        alt: `${product.name} photo ${idx + 1}`,
                        order: idx,
                    })
                )
            );

            product.images = newImages.map(img => img._id);
        }

        await product.save();

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product,
        });

    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({
            success: false,
            message: "Error updating product",
            error: error.message,
        });
    }
};
