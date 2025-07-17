import mongoose, { Schema } from "mongoose";

const guideSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Post slug is required"],
      unique: true,
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Post content is required"],
      trim: true,
    },
    excerpt: {
      type: String,
      trim: true,
    },
    metaDescription: {
      type: String,
      trim: true,
    },
    author: {
      name: {
        type: String,
        trim: true,
      },
      slug: {
        type: String,
        trim: true,
      },
      bio: {
        type: String,
        trim: true,
      }
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    publishedAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
    tags: [{
      type: String,
      trim: true,
    }],
    categories: [{
      type: String,
      trim: true,
    }],
    keywords: [{
      type: String,
      trim: true,
    }],
    featuredImage: {
      url: {
        type: String,
        trim: true,
      },
      alt: {
        type: String,
        trim: true,
      },
      caption: {
        type: String,
        trim: true,
      }
    },
    active: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

// Create indexes for frequently queried fields
{/*postSchema.index({ slug: 1 });
postSchema.index({ status: 1 });
postSchema.index({ publishedAt: 1 });
postSchema.index({ "author.slug": 1 });
postSchema.index({ tags: 1 });
postSchema.index({ categories: 1 });*/}

const Guide = mongoose.models.Guide || mongoose.model("Guide", guideSchema);

export default Guide;