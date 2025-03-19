"use client";
import { useState } from "react";
import { format, isWeekend } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function AvailabilityCalendar() {
  const [selectedDays, setSelectedDays] = useState<
    Record<string, { start: string; end: string }>
  >({});
  const [activeDate, setActiveDate] = useState<Date | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);

  // Handle day selection
  const handleDayClick = (day: Date | undefined) => {
    if (!day) return;
    setActiveDate(day);
    setShowModal(true);
  };

  // Handle input changes for start and end time
  const handleTimeChange = (field: "start" | "end", value: string) => {
    if (!activeDate) return;
    const dateStr = format(activeDate, "yyyy-MM-dd");

    setSelectedDays((prev) => ({
      ...prev,
      [dateStr]: { ...prev[dateStr], [field]: value },
    }));
  };

  // Remove selected date
  const removeDate = () => {
    if (!activeDate) return;
    const dateStr = format(activeDate, "yyyy-MM-dd");

    setSelectedDays((prev) => {
      const newDays = { ...prev };
      delete newDays[dateStr];
      return newDays;
    });

    setShowModal(false);
    setActiveDate(undefined);
  };

  // Save availability
  const saveAvailability = () => {
    setShowModal(false);
    console.log("Saved Availability:", selectedDays);
  };

  // Format date as "15th March 2025"
  const formatDate = (date: Date) => {
    const day = format(date, "d");
    const dayNum = parseInt(day);
    const suffix = ["th", "st", "nd", "rd"][
      dayNum % 10 > 3 || [11, 12, 13].includes(Number(day)) ? 0 : dayNum % 10
    ];
    return `${day}${suffix} ${format(date, "MMMM yyyy")}`;
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Select Your Availability</h2>

      {/* Calendar with highlighted selected days */}
      <DayPicker
        mode="single"
        selected={activeDate}
        onSelect={handleDayClick}
        className="border rounded-md p-4"
        modifiers={{
          weekend: (date) => isWeekend(date),
          selected: (date) =>
            selectedDays.hasOwnProperty(format(date, "yyyy-MM-dd")),
        }}
        modifiersStyles={{
          weekend: { backgroundColor: "#ffdd57" },
          selected: { backgroundColor: "#007bff", color: "white" },
        }}
      />

      {/* Modal for Availability */}
      {showModal && activeDate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-2">
              Availability for {formatDate(activeDate)}
            </h3>

            {/* Start Time */}
            <label className="block mb-2">
              <span className="font-medium">Start Time:</span>
              <input
                type="time"
                value={
                  selectedDays[format(activeDate, "yyyy-MM-dd")]?.start || ""
                }
                onChange={(e) => handleTimeChange("start", e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </label>

            {/* End Time */}
            <label className="block mb-2">
              <span className="font-medium">End Time:</span>
              <input
                type="time"
                value={
                  selectedDays[format(activeDate, "yyyy-MM-dd")]?.end || ""
                }
                onChange={(e) => handleTimeChange("end", e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </label>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={removeDate}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
              <button
                onClick={saveAvailability}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
