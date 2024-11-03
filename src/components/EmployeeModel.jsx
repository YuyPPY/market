import { useState, useEffect } from 'react';

const EmployeeModel = () => {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.100.70:3000/api/owners');
        const data = await response.json();
        setImageData(data[0]);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="content" className="app-content">
      {error ? (
        <div>Error fetching image: {error.message}</div>
      ) : imageData ? (
        <img src={`http://192.168.100.70:3000/${imageData.document_path}`} alt="Owner Document" />
      ) : (
        <div>No image available</div>
      )}
    </div>
  );
}

export default EmployeeModel;