import express from "express";
import { put } from "@vercel/blob";

export const UploadFoto = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "Image not found" });
    }

    const blob = await put(file.originalname, file.buffer, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
      contentType: file.mimetype,
      allowOverwrite: true,
    });

    res.json({
      url: blob.url,
      size: blob.size,
      pathname: blob.pathname,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed upload" });
  }
};
