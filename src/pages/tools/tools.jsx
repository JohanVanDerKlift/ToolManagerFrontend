import './tools.scss';
import {useEffect, useState} from "react";
import axios from "axios";

function Tools(props) {
  const [tools, setTools] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const url = 'http://localhost:8080';
  const endpoint = '/tool';

  useEffect(() => {
    async function handleFetch() {
      setLoading(true);
      try {
        setError(false);
        const response = await axios.get(url + endpoint);
        setTools(response.data);
        console.log(response.data);
      } catch (e) {
        console.error(e);
        setError(true);
      }
      setLoading(false);
    }

    void handleFetch();
  }, []);

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the data</span>}

      <div className="tools">
        <span>Tools</span>
        <table>
          <thead>
          <tr>
            <th>Apparaat nummer</th>
            <th>Omschrijving</th>
            <th>Merk</th>
            <th>Type</th>
            <th>Serienummer</th>
          </tr>
          </thead>
          {tools &&
            <tbody>
            {tools.map((tool) => (
              <tr key={tool.id}>
                <td>{tool.toolCode}</td>
                <td>{tool.description}</td>
                <td>{tool.brand}</td>
                <td>{tool.type}</td>
                <td>{tool.serialNumber}</td>
              </tr>
            ))}
            </tbody>
          }
        </table>
      </div>
    </>
  )
}

export default Tools;