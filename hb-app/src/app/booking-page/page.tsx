"use client";
import { useState } from "react";

export default function BookingPage() {
  const [services, setServices] = useState<
    { name: string; description: string; duration: number; price: number }[]
  >([]);
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    duration: 0,
    price: 0,
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [preview, setPreview] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewService((prev) => ({
      ...prev,
      [name]: name === "duration" || name === "price" ? Number(value) : value,
    }));
  };

  const handleAddService = () => {
    if (
      !newService.name ||
      !newService.description ||
      newService.duration <= 0 ||
      newService.price <= 0
    )
      return;
    if (editIndex !== null) {
      setServices((prev) =>
        prev.map((service, i) => (i === editIndex ? newService : service))
      );
      setEditIndex(null);
    } else {
      setServices((prev) => [...prev, newService]);
    }
    setNewService({ name: "", description: "", duration: 0, price: 0 });
  };

  const handleEditService = (index: number) => {
    setNewService(services[index]);
    setEditIndex(index);
  };

  const handleDeleteService = (index: number) => {
    setServices((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Manage Services</h2>
        <div className="flex items-center gap-2">
          <span>Preview</span>
          <input
            type="checkbox"
            checked={preview}
            onChange={(e) => setPreview(e.target.checked)}
          />
        </div>
      </div>

      {!preview && (
        <div className="mb-4 p-4 border rounded">
          <input
            name="name"
            placeholder="Service Name"
            value={newService.name}
            onChange={handleChange}
            className="mb-2 p-2 border w-full"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newService.description}
            onChange={handleChange}
            className="mb-2 p-2 border w-full"
          />
          <input
            name="duration"
            type="number"
            placeholder="Duration (mins)"
            value={newService.duration}
            onChange={handleChange}
            className="mb-2 p-2 border w-full"
          />
          <input
            name="price"
            type="number"
            placeholder="Price ($)"
            value={newService.price}
            onChange={handleChange}
            className="mb-2 p-2 border w-full"
          />
          <button
            onClick={handleAddService}
            className="px-4 py-2 bg-black text-white rounded"
          >
            {editIndex !== null ? "Update Service" : "Add Service"}
          </button>
        </div>
      )}

      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 border rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{service.name}</h3>
              <p>{service.description}</p>
              <p className="text-sm text-gray-600">
                {service.duration} mins - ${service.price}
              </p>
            </div>
            {!preview && (
              <div className="space-x-2">
                <button
                  onClick={() => handleEditService(index)}
                  className="px-4 py-2 border rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteService(index)}
                  className="px-4 py-2 bg-black text-white rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {!preview && services.length > 0 && (
        <button className="mt-4 w-full px-4 py-2 bg-goldy text-white rounded">
          Save Changes
        </button>
      )}
    </div>
  );
}
