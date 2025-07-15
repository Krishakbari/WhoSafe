    import mongoose from "mongoose";

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        reviews: {
            type: Number,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        images: [{ type: mongoose.Schema.Types.ObjectId, ref: "ProductImage" }], 
        // images: [
        //     {
        //         url: { type: String, required: true },
        //         public_id: { type: String, required: true },
        //         alt: { type: String },
        //         order: { type: Number },
        //     },
        // ],
    }, { timestamps: true })


    export default mongoose.model("Products", productSchema)