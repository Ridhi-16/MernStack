import React, { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setInput("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label>Add Restrictions:</label>
      <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Type and press Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
        />
        <button onClick={addTag}>Add</button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{
              background: "#e0e0e0",
              padding: "6px 12px",
              borderRadius: "20px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {tag}
            <button
              onClick={() => removeTag(index)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
