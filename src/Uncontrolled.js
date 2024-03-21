import React, { useRef } from "react";

function UncontrolledComponent() {
  const fileInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const uploadFile = fileInputRef.current.files[0];
    console.log(uploadFile);
    if (uploadFile) {
      alert("file uploaded successfully.");
    } else {
      alert("please select a file");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        upload Document:
        <input type="file" ref={fileInputRef} />
      </label>
      <input type="submit" />
    </form>
  );
}
export default UncontrolledComponent;
