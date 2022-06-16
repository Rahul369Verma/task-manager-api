import mongoose from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;

var tasksSchema = new Schema(
  {
    userID: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: "users",
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true,
      enum: ["todo", "inprogress", "done", "archive"],
      default: "todo"
    },
    archive: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);
// the schema is useless so far
export const Tasks = model("Tasks", tasksSchema);
