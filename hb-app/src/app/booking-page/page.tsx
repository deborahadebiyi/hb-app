"use client";
import { useState } from "react";
import ProfileCard from "../../components/profile-card/ProfileCard";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function BookingPage() {
  const [services, setServices] = useState<
    { name: string; description: string; duration: number; price: number }[]
  >([]);
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    duration: "",
    price: "",
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [preview, setPreview] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewService((prev) => ({
      ...prev,
      [name]:
        name === "duration" || name === "price"
          ? Math.max(0, Number(value))
          : value,
    }));
  };

  const handleAddService = () => {
    if (
      !newService.name ||
      !newService.description ||
      newService.duration === "" ||
      newService.price === ""
    )
      return;
    if (editIndex !== null) {
      setServices((prev) =>
        prev.map((service, i) =>
          i === editIndex
            ? {
                ...newService,
                duration: Number(newService.duration),
                price: Number(newService.price),
              }
            : service
        )
      );
      setEditIndex(null);
    } else {
      setServices((prev) => [
        ...prev,
        {
          ...newService,
          duration: Number(newService.duration),
          price: Number(newService.price),
        },
      ]);
    }
    setNewService({ name: "", description: "", duration: "", price: "" });
  };

  const handleEditService = (index: number) => {
    setNewService({
      ...services[index],
      duration: services[index].duration.toString(),
      price: services[index].price.toString(),
    });
    setEditIndex(index);
  };

  const handleDeleteService = (index: number) => {
    setServices((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <ProfileCard />
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">My Services</h2>
        <div className="flex items-center gap-2">
          <span>Click to toggle preview</span>
          {/* <input
            type="checkbox"
            checked={preview}
            onChange={(e) => setPreview(e.target.checked)}
          /> */}
          <button
            onClick={() => setPreview((prev) => !prev)}
            className={`px-4 py-2 rounded-lg ${
              preview ? "bg-gray-600 text-white" : "bg-black text-white"
            }`}
          >
            <SparklesIcon className="w-4" />
            {/* {preview ? "Disable Preview" : "Enable Preview"} */}
          </button>
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
            min="0"
            className="mb-2 p-2 border w-full"
          />
          <input
            name="price"
            type="number"
            placeholder="Price (£)"
            value={newService.price}
            onChange={handleChange}
            min="0"
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
                {service.duration} mins - £{service.price}
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
