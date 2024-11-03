import React, { useState } from "react";

function NewHogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    "highest medal achieved": "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog(formData);
    setFormData({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      "highest medal achieved": "",
      image: ""
    });
  };

  return (
    <div className="container mt-4">
  <div className="card">
    <div className="card-header">
      <h5>Add New Hog</h5>
    </div>
    <div className="card-body">
      <form className="new-hog-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            id="name"
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Name" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="specialty" className="form-label">Specialty</label>
          <input 
            id="specialty"
            name="specialty" 
            value={formData.specialty} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Specialty" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label">Weight</label>
          <input 
            id="weight"
            name="weight" 
            type="number" 
            value={formData.weight} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Weight" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="highestMedal" className="form-label">Highest Medal Achieved</label>
          <input 
            id="highestMedal"
            name="highest medal achieved" 
            value={formData["highest medal achieved"]} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Highest Medal" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input 
            id="image"
            name="image" 
            value={formData.image} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Image URL" 
            required 
          />
        </div>
        <div className="form-check mb-3">
          <input 
            id="greased"
            name="greased" 
            type="checkbox" 
            checked={formData.greased} 
            onChange={handleChange} 
            className="form-check-input" 
          />
          <label htmlFor="greased" className="form-check-label">Greased</label>
        </div>
        <button type="submit" className="btn btn-primary">Add Hog</button>
      </form>
    </div>
  </div>
</div>

  );
}

export default NewHogForm;
