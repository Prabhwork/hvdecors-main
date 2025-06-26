import React, { useState } from "react";
import axios from "axios";
import "./imageuploader.css";

const formStyle = {
  maxWidth: "500px",
  margin: "40px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "16px",
};

const previewStyle = {
  width: "100%",
  maxHeight: "300px",
  objectFit: "contain",
  marginTop: "10px",
  borderRadius: "6px",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  marginTop: "10px",
};

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be less than 5MB.");
      return;
    }

    setError(null);
    setSelectedFile(file);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "hvdecros-main"); // Your upload preset

    setUploading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/dknid1fma/image/upload", formData);
      setImageURL(res.data.secure_url);
      setSuccess("Image uploaded successfully!");
    } catch (err) {
      console.error("Upload error:", err);
      setError("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleUpload} style={formStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Upload Image</h2>

      <input type="file" accept="image/*" onChange={handleImageChange} style={inputStyle} required />
      {uploading && <p>Uploading image...</p>}
      {imageURL && <img src={imageURL} alt="Uploaded Preview" style={previewStyle} />}

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <button type="submit" style={buttonStyle} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
    </form>
  );
};

export default ImageUpload;
