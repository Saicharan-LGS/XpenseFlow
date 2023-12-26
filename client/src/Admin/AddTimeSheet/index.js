import React, { useState } from 'react';

const TimeSheetForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    project: '',
    notes: '',
    hours: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: '',
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleHoursChange = (event, day) => {
    const { value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      hours: {
        ...prevData.hours,
        [day]: value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/vi/employee/addTimeSheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Time sheet added successfully!', data);
        // Reset the form after successful submission
        setFormData({
          date: '',
          project: '',
          notes: '',
          hours: {
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            saturday: '',
            sunday: '',
          },
        });
      } else {
        console.error('Failed to add time sheet', data);
        // Handle error states or display error messages
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors or other issues
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>

      <label>
        Project Name:
        <input
          type="text"
          name="project"
          value={formData.project}
          onChange={handleChange}
          placeholder="Enter project name"
          required
        />
      </label>

      <label>
        Additional Notes:
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Enter any additional notes"
        ></textarea>
      </label>

      <label>
        Hours Worked:
        <div>
          {Object.keys(formData.hours).map((day) => (
            <div key={day}>
              <label>
                {day.charAt(0).toUpperCase() + day.slice(1)}:
                <input
                  type="number"
                  name={day}
                  value={formData.hours[day]}
                  onChange={(e) => handleHoursChange(e, day)}
                  placeholder={`Enter hours for ${day}`}
                  required
                />
              </label>
            </div>
          ))}
        </div>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default TimeSheetForm;
