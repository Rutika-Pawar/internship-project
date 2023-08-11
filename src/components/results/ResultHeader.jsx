import React, { useState } from 'react';
import '../../styles/results.scss';

export const ResultHeader = ({ resultFormValues }) => {
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const exams = ['Midterm Exam', 'Unit Test Exam', 'Semester Exam', 'Scholarship Exam'];
  const classes = ['Class I', 'Class II', 'Class III', 'Class IV'];
  const years = ['2023-2024', '2024-2025', '2025-2026'];

  const handleSubmit = () => {
    const formObj = {
      selectedExam: selectedExam,
      selectedClass: selectedClass,
      selectedYear: selectedYear
    };

    resultFormValues(formObj);
  };

  const handleReset = () => {
    setSelectedExam('');
    setSelectedClass('');
    setSelectedYear('');
  };

  const isSubmitDisabled = !(selectedExam && selectedClass && selectedYear);

  return (
    <div className="result-header-container">
      <div className="result-header-title-container">
        <h1 className="result-header-title">Results</h1>
        <div className="select-container">
          <CustomDropdown
            options={years}
            value={selectedYear}
            onChange={setSelectedYear}
            placeholder="Select Year"
            className="custom-dropdown"
          />
        </div>
      </div>

      <div className="result-header-button-container">
        <CustomDropdown
          options={exams}
          value={selectedExam}
          onChange={setSelectedExam}
          placeholder="Select Exam"
          className="custom-dropdown"
        />

        <CustomDropdown
          options={classes}
          value={selectedClass}
          onChange={setSelectedClass}
          placeholder="Select Class"
          className="custom-dropdown"
        />

        

        <button
          className="result-header-button"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          SUBMIT
        </button>
        
        
        <span 
          className="reset-text"
          onClick={handleReset}
        >
          Reset
        </span>
      </div>
    </div>
  );
};

const CustomDropdown = ({ options, value, onChange, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`custom-dropdown-container ${className}`}>
      <div className={`custom-dropdown-header ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <span>{value || placeholder}</span>
        <i className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <ul className="custom-dropdown-options">
          {options.map((option) => (
            <li
              key={option}
              className={`custom-dropdown-option ${value === option ? 'selected' : ''}`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
