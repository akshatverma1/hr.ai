"use client"

import { useState } from "react"
import "./ExcelAutomation.css"
import { useEffect } from "react"
import axios from "axios"

const ExcelAutomation = () => {
  // const [activeTab, setActiveTab] = useState("upload")
  // const [file, setFile] = useState(null)
  // const [processing, setProcessing] = useState(false)
  // const [result, setResult] = useState(null)

  // const handleFileChange = (e) => {
  //   if (e.target.files.length > 0) {
  //     setFile(e.target.files[0])
  //   }
  // }

  // const handleProcess = () => {
  //   if (!file) return

  //   setProcessing(true)

  //   // Simulate processing
  //   setTimeout(() => {
  //     setProcessing(false)
  //     setResult({
  //       fileName: file.name,
  //       rowsProcessed: Math.floor(Math.random() * 1000) + 100,
  //       columnsProcessed: Math.floor(Math.random() * 20) + 5,
  //       automationApplied: ["Data Cleaning", "Format Standardization", "Duplicate Removal"],
  //       completionTime: "00:00:45",
  //     })
  //     setActiveTab("result")
  //   }, 3000)
  // }

  // const handleReset = () => {
  //   setFile(null)
  //   setResult(null)
  //   setActiveTab("upload")
  // }


  const [files, setFiles] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [datas, setData] = useState([]);
  const [loading1, setLoading1] = useState(false);
  useEffect(() => {
    async function apicalling() {
      let url = "http://localhost:5000/getResult";
      let response = await fetch(url);
      let data = await response.json();
      // console.log(data);
      setData(data);
      setLoading1((prev) => !prev);
      console.log(datas);
    }
    apicalling();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files.length) return;

    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('pdfs', file);
    });

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      setResults(response.data);
    } catch (error) {
      alert('Error uploading files: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="excel-automation">
      <div className="page-header">
        <h1>Excel Automation</h1>
        <p>Automate your Excel workflows and data processing tasks</p>
      </div>

      <div className="automation-container">
        <div className="automation-sidebar">
          {/* <div className="automation-steps">
            <div className={`step ${activeTab === "upload" ? "active" : ""} ${result ? "completed" : ""}`}>
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">Upload File</div>
                <div className="step-description">Select your Excel file</div>
              </div>
            </div>

            <div className={`step ${activeTab === "configure" ? "active" : ""} ${result ? "completed" : ""}`}>
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">Configure</div>
                <div className="step-description">Set automation parameters</div>
              </div>
            </div>

            <div className={`step ${activeTab === "process" ? "active" : ""} ${result ? "completed" : ""}`}>
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">Process</div>
                <div className="step-description">Run the automation</div>
              </div>
            </div>

            <div className={`step ${activeTab === "result" ? "active" : ""}`}>
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-title">Results</div>
                <div className="step-description">View and download results</div>
              </div>
            </div>
          </div> */}

          {/* <div className="automation-features">
            <h3>Features</h3>
            <ul>
              <li>
                <span className="feature-icon">📊</span>
                <span>Data Cleaning</span>
              </li>
              <li>
                <span className="feature-icon">🔄</span>
                <span>Format Conversion</span>
              </li>
              <li>
                <span className="feature-icon">🔍</span>
                <span>Data Validation</span>
              </li>
              <li>
                <span className="feature-icon">📈</span>
                <span>Report Generation</span>
              </li>
              <li>
                <span className="feature-icon">⚙️</span>
                <span>Custom Formulas</span>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="automation-content">
          <form onSubmit={handleSubmit}>
            <div className="upload-area">
              <input
                type="file"
                accept="application/pdf"
                multiple
                onChange={(e) => setFiles(e.target.files)}

              />
              <label htmlFor="excel-file" className="file-label">
                <div className="upload-icon">📁</div>
                <div className="upload-text">
                  Drag & drop your Excel file here or click to browse
                </div>
                <div className="upload-formats">Supports .pdf</div>
              </label>
            </div>

            <div className="upload-actions">
              <button className="next-button" type="submit" disabled={loading}>
                {loading ? 'Processing...' : 'Upload PDFs'}
              </button>
            </div>
          </form>
          <div className="upload-section">

          </div>


          {/* { "configure" && (
            <div className="configure-section">
              <h2>Configure Automation</h2>

              <div className="config-options">
                <div className="config-group">
                  <h3>Data Cleaning</h3>
                  <div className="config-item">
                    <label className="config-label">
                      <input type="checkbox" checked />
                      <span>Remove Duplicates</span>
                    </label>
                  </div>
                  <div className="config-item">
                    <label className="config-label">
                      <input type="checkbox" checked />
                      <span>Trim Whitespace</span>
                    </label>
                  </div>
                  <div className="config-item">
                    <label className="config-label">
                      <input type="checkbox" checked />
                      <span>Fix Formatting</span>
                    </label>
                  </div>
                </div>

                <div className="config-group">
                  <h3>Data Processing</h3>
                  <div className="config-item">
                    <label className="config-label">
                      <input type="checkbox" checked />
                      <span>Standardize Date Formats</span>
                    </label>
                  </div>
                  <div className="config-item">
                    <label className="config-label">
                      <input type="checkbox" />
                      <span>Convert Text to Numbers</span>
                    </label>
                  </div>
                  <div className="config-item">
                    <label className="config-label">
                      <input type="checkbox" checked />
                      <span>Apply Formula to Columns</span>
                    </label>
                  </div>
                </div>

                <div className="config-group">
                  <h3>Output Options</h3>
                  <div className="config-item">
                    <label className="config-label">Output Format</label>
                    <select className="config-select">
                      <option>Excel (.xlsx)</option>
                      <option>CSV</option>
                      <option>PDF Report</option>
                    </select>
                  </div>
                  <div className="config-item">
                    <label className="config-label">Include Summary</label>
                    <label className="toggle-switch">
                      <input type="checkbox" checked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="configure-actions">
                <button className="back-button" onClick={() => setActiveTab("upload")}>
                  Back
                </button>
                <button className="next-button" onClick={() => setActiveTab("process")}>
                  Next: Process
                </button>
              </div>
            </div>
          )} */}

          {/* {  "process" && (
            <div className="process-section">
              <h2>Process File</h2>

              <div className="process-summary">
                <div className="summary-item">
                  <div className="summary-label">File Name</div>
                  <div className="summary-value"></div>
                </div>
                <div className="summary-item">
                  <div className="summary-label">File Size</div>
                  <div className="summary-value"></div>
                </div>
                <div className="summary-item">
                  <div className="summary-label">Selected Operations</div>
                  <div className="summary-value">Data Cleaning, Format Standardization, Duplicate Removal</div>
                </div>
              </div>

              
                <div className="process-actions">
                  <button className="back-button" onClick={() => setActiveTab("configure")}>
                    Back
                  </button>
                  <button className="process-button" >
                    Start Processing
                  </button>
                </div>
             
            </div>
          )} */}

          {/* { "result" && results && (
            <div className="result-section">
              <div className="result-header">
                <h2>Processing Complete</h2>
                <div className="result-badge">Success</div>
              </div>

              <div className="result-summary">
                <div className="result-item">
                  <div className="result-icon">📄</div>
                  <div className="result-content">
                    <div className="result-label">File Processed</div>
                    <div className="result-value">{results.fileName}</div>
                  </div>
                </div>

                <div className="result-item">
                  <div className="result-icon">🔢</div>
                  <div className="result-content">
                    <div className="result-label">Rows Processed</div>
                    <div className="result-value"></div>
                  </div>
                </div>

                <div className="result-item">
                  <div className="result-icon">📊</div>
                  <div className="result-content">
                    <div className="result-label">Columns Processed</div>
                    <div className="result-value"></div>
                  </div>
                </div>

                <div className="result-item">
                  <div className="result-icon">⚙️</div>
                  <div className="result-content">
                    <div className="result-label">Automation Applied</div>
                    <div className="result-value"></div>
                  </div>
                </div>

                <div className="result-item">
                  <div className="result-icon">⏱️</div>
                  <div className="result-content">
                    <div className="result-label">Completion Time</div>
                    <div className="result-value"></div>
                  </div>
                </div>
              </div>

              <div className="result-actions">
                <button className="download-button">Download Result</button>
                <button className="new-process-button" >
                  Process Another File
                </button>
              </div>
            </div>
          )} */}
        </div>
      </div>
      <div className="result-section">
        <div className="result-header">
          <h2>Processing Complete</h2>
          <div className="result-badge">Success</div>
        </div>

       

        <div className="result-summary">
          <div className="result-item">
            <div className="result-icon">📄</div>
            <div className="result-content">
              <div className="result-label">Here are the names of all the uploaded resumes</div>
              {results.length > 0 && (
          <div>
            {results.map((result, index) => (
              <div key={index}>
                {/* <h3>{result.fileName}</h3> */}
                <div className="result-value">{result.fileName}</div>
                {/* <pre>{result.content}</pre> */}
              </div>
            ))}
          </div>
        )}
             
            </div>
          </div>


        </div>
        <div className="result-summary">
          <div className="result-item">
            <div className="result-icon">📄</div>
            <div className="result-content">
              <div className="result-label">Result – The names of the shortlisted resumes are displayed below.</div>
              {datas.length > 0 && (
          <div>
            {datas.map((result, index) => (
              result !== "No skills are found in this Resume." && (
                <div key={index}>
                  <div className="result-value">{index} - {result}</div>
                </div>
            )))}
          </div>
        )}
             
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default ExcelAutomation

