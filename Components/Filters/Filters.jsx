import React, { useState } from 'react';
import './filters.css';

const Filters = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    time: '',
    rating: '',
    activities: [],
    accommodation: '',
    transportation: '',
  });

  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => {
      const activities = new Set(prevFilters.activities);
      checked ? activities.add(name) : activities.delete(name);
      return { ...prevFilters, activities: Array.from(activities) };
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <div className="filters">
      <h3>Filter Your Search</h3>

      {/* More Filters Toggle */}
      <button
        className="moreFiltersToggle"
        onClick={() => setShowMoreFilters(!showMoreFilters)}
      >
        {showMoreFilters ? 'Hide More Filters' : 'Show More Filters'}
      </button>

      {showMoreFilters && (
        <div className="moreFilters">
          {/* Time of Travel */}
          <div className="filterGroup">
            <label>Time of Travel:</label>
            <select name="time" value={filters.time} onChange={handleInputChange}>
              <option value="">Any</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div className="filterGroup">
            <label>Rating:</label>
            <select name="rating" value={filters.rating} onChange={handleInputChange}>
              <option value="">Any</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>

          {/* Activities Filter */}
          <div className="filterGroup">
            <label>Activities:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="hiking"
                  onChange={handleCheckboxChange}
                  checked={filters.activities.includes('hiking')}
                />
                Hiking
              </label>
              <label>
                <input
                  type="checkbox"
                  name="snorkeling"
                  onChange={handleCheckboxChange}
                  checked={filters.activities.includes('snorkeling')}
                />
                Snorkeling
              </label>
              <label>
                <input
                  type="checkbox"
                  name="sightseeing"
                  onChange={handleCheckboxChange}
                  checked={filters.activities.includes('sightseeing')}
                />
                Sightseeing
              </label>
            </div>
          </div>

          {/* Accommodation Filter */}
          <div className="filterGroup">
            <label>Accommodation:</label>
            <select
              name="accommodation"
              value={filters.accommodation}
              onChange={handleInputChange}
            >
              <option value="">Any</option>
              <option value="hotel">Hotel</option>
              <option value="hostel">Hostel</option>
              <option value="villa">Villa</option>
              <option value="camping">Camping</option>
            </select>
          </div>

          {/* Transportation Filter */}
          <div className="filterGroup">
            <label>Transportation:</label>
            <select
              name="transportation"
              value={filters.transportation}
              onChange={handleInputChange}
            >
              <option value="">Any</option>
              <option value="flight">Flight</option>
              <option value="train">Train</option>
              <option value="bus">Bus</option>
              <option value="car">Car Rental</option>
            </select>
          </div>
        </div>
      )}

      {/* Apply Filters Button */}
      <button className="applyFiltersBtn" onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
