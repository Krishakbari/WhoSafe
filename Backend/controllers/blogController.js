import blogModel from "../models/blogModel.js";

// POST /api/blogs
export const createBlog = async (req, res) => {
  try {
    const { title, summary, content, author, readTime } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const blog = new blogModel({
      title,
      summary,
      content,
      image: `/img/${req.file.filename}`, // use multer upload filename
      author: author || "ResQ Team",
      readTime: readTime || "5 Min Read",
    });

    await blog.save();
    res.status(201).json({ success: true, blog });
  } catch (err) {
    console.error("Blog create error:", err);
    res.status(500).json({ error: "Failed to create blog" });
  }
};

// GET all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

// GET single blog
export const getSingleBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
};


// PUT /api/blogs/:id
export const updateBlog = async (req, res) => {
  try {
    const { title, summary, content, author, readTime } = req.body;
    const blogId = req.params.id;

    const existingBlog = await blogModel.findById(blogId);
    if (!existingBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    // Update fields
    existingBlog.title = title || existingBlog.title;
    existingBlog.summary = summary || existingBlog.summary;
    existingBlog.content = content || existingBlog.content;
    existingBlog.author = author || existingBlog.author;
    existingBlog.readTime = readTime || existingBlog.readTime;

    // If new image is uploaded
    if (req.file) {
      existingBlog.image = `/img/${req.file.filename}`;
    }

    await existingBlog.save();

    res.status(200).json({ success: true, blog: existingBlog });
  } catch (err) {
    console.error("Blog update error:", err);
    res.status(500).json({ error: "Failed to update blog" });
  }
};

// DELETE /api/blogs/:id
export const deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    console.error("Delete blog error:", err);
    res.status(500).json({ error: "Failed to delete blog" });
  }
};
