


import { useEffect, useState } from "react";
import axios from "axios";

interface Department {
  id: number;
  abbreviation: string;
  name: string;
  description: string;
  status: string;
}

export default function Dashboard() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [form, setForm] = useState({ abbreviation: "", name: "", description: "", status: "" });
  const [editingId, setEditingId] = useState<number | null>(null);
  const fullname = localStorage.getItem("fullname");

  const api = axios.create({
    baseURL: "https://finals-aranzado-backend-3.onrender.com",
    headers: { "Content-Type": "application/json" },
  });

  // Load all users
  const fetchDepartments = async () => {
    const res = await api.get("/departments");
    setDepartments(res.data);
  };

  //ni error kay wala pa database

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async () => {
      if (
    !form.abbreviation.trim() ||
    !form.name.trim() ||
    !form.description.trim() ||
    !form.status.trim()
  ) {
    alert("Please fill in all fields before submitting.");
    return;
  }
    if (editingId) {
      await api.put(`/departments/${editingId}`, form);
    } else {
      await api.post("/departments", form);
    }
    setForm({ abbreviation: "", name: "", description: "", status: "" });
    setEditingId(null);
    fetchDepartments();
  };


  const handleEdit = (department: Department) => {
    setForm({
      abbreviation: department.abbreviation,
      name: department.name,
      description: department.description,
      status: department.status,
    });
    setEditingId(department.id);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this department?")) {
      await api.delete(`/departments/${id}`);
      fetchDepartments();
    }
  };


  // Logout
  const handleLogout = () => {
    localStorage.removeItem("fullname");
    window.location.href = "/";
  };

  
  return (
  <div className="dashboard-wrapper">
    <div className="dashboard-header">
      <h1>Welcome, {fullname}</h1>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>

    <div className="dashboard-container">

      {/* Form Section */}
      <div className="dashboard-form">
        <h2>{editingId ? "Edit Goods" : "Add Goods"}</h2>
        <input
          name="abbreviation"
          placeholder="Code no."
          value={form.abbreviation}
          onChange={handleChange}
        />
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          name="status"
          placeholder="Quantity"
          value={form.status}
          onChange={handleChange}
        />
        <button className="submit-button" onClick={handleSubmit}>
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* Table Section */}
      <div className="dashboard-table">
        <h2>List of Goods</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Code no.</th>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.length > 0 ? (
              departments.map((d) => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.abbreviation}</td>
                  <td>{d.name}</td>
                  <td>{d.description}</td>
                  <td>{d.status}</td>
                  <td>
                    <button className="edit-button" onClick={() => handleEdit(d)}>Edit</button>
                    <button className="delete-button" onClick={() => handleDelete(d.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No goods found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

}




