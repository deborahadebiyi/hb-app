"use client";
import { useState } from "react";

interface Policy {
  name: string;
  category: string;
  text: string;
  agreed: boolean;
  extraInput: string;
}

export default function BookingPage() {
  const policyCategories: string[] = [
    "Preparation",
    "Prerequisites",
    "Fees",
    "Miscellaneous",
  ];
  const predefinedPolicies: Policy[] = [
    {
      name: "Cancellation Policy",
      category: "Fees",
      text: "Lorem ipsum dolor sit amet...",
      agreed: false,
      extraInput: "",
    },
    {
      name: "Late Arrival Policy",
      category: "Preparation",
      text: "Lorem ipsum dolor sit amet...",
      agreed: false,
      extraInput: "",
    },
  ];

  const [policies, setPolicies] = useState<Policy[]>(predefinedPolicies);
  const [newPolicy, setNewPolicy] = useState<Policy>({
    name: "",
    category: "Preparation",
    text: "",
    agreed: false,
    extraInput: "",
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [preview, setPreview] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setNewPolicy((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddPolicy = () => {
    if (!newPolicy.name || !newPolicy.text) return;
    if (editIndex !== null) {
      setPolicies((prev) =>
        prev.map((policy, i) => (i === editIndex ? newPolicy : policy))
      );
      setEditIndex(null);
    } else {
      setPolicies((prev) => [...prev, newPolicy]);
    }
    setNewPolicy({
      name: "",
      category: "Preparation",
      text: "",
      agreed: false,
      extraInput: "",
    });
  };

  const handleEditPolicy = (index: number) => {
    setNewPolicy(policies[index]);
    setEditIndex(index);
  };

  const handleDeletePolicy = (index: number) => {
    setPolicies((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Manage Policies</h2>
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
            placeholder="Policy Name"
            value={newPolicy.name}
            onChange={handleChange}
            className="mb-2 p-2 border w-full"
          />
          <select
            name="category"
            value={newPolicy.category}
            onChange={handleChange}
            className="mb-2 p-2 border w-full"
          >
            {policyCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <textarea
            name="text"
            placeholder="Policy Description"
            value={newPolicy.text}
            onChange={handleChange}
            className="mb-2 p-2 border w-full"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreed"
              checked={newPolicy.agreed}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Select policy</span>
          </div>
          <input
            name="extraInput"
            placeholder="Additional Notes"
            value={newPolicy.extraInput}
            onChange={handleChange}
            className="mt-2 p-2 border w-full"
          />
          <button
            onClick={handleAddPolicy}
            className="mt-2 px-4 py-2 bg-black text-white rounded"
          >
            {editIndex !== null ? "Update Policy" : "Add Policy"}
          </button>
        </div>
      )}

      <div className="space-y-4">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="p-4 border rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">
                {policy.name} ({policy.category})
              </h3>
              <p>{policy.text}</p>
              <p className="text-sm text-gray-600">
                Custom value: {policy.extraInput}
              </p>
            </div>
            {!preview && (
              <div className="space-x-2">
                <button
                  onClick={() => handleEditPolicy(index)}
                  className="px-4 py-2 border rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePolicy(index)}
                  className="px-4 py-2 bg-black text-white rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {!preview && policies.length > 0 && (
        <button className="mt-4 w-full px-4 py-2 bg-goldy text-white rounded">
          Save Changes
        </button>
      )}
    </div>
  );
}
