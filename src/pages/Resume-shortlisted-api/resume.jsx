import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import "./resume.css";
function PDFUploader() {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [datas, setData] = useState([]);
  const [loading1, setLoading1] = useState(false);
  useEffect(()=>{
    async function apicalling(){
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
    <div className='mainDiv'>
      <h1>PDF Data Extractor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          accept="application/pdf"
          onChange={(e) => setFiles(e.target.files)}
        />
        <input
          type="text"
          placeholder="Enter your Skills"
          name="enter"
          />
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Upload PDFs'}
        </button>

      </form>

      {results.length > 0 && (
        <div>
          <h2>Extracted Content:</h2>
          {results.map((result, index) => (
            <div key={index}>
              <h3>{result.fileName}</h3>
              {/* <pre>{result.content}</pre> */}
            </div>
          ))}
        </div>
      )}
      {datas.length > 0 && (
        <div>
          <h2>Content</h2>
          {datas.map((result, index) => (
            <div key={index}>
              <h3>{result}</h3>
              {/* <pre>{result.content}</pre> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PDFUploader;