import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Requests from './components/Requests.component'
import Pagination from './components/Pagination.component'

function App() {
  const [count, setCount] = useState(0)

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage, setRequestPerPage] = useState(20);

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/');
      setRequests(res.data);
      setLoading(false);
    }

    fetchRequests();

  }, []);
  
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequest = requests.slice(indexOfFirstRequest, indexOfLastRequest);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const itemsPerPage = (itemsPerPage: number) => {
    setRequestPerPage(itemsPerPage);
  }

  return (
    <div className="App">
      <h1 className="text-primary mb-3">My requests</h1>
      <Requests requests={currentRequest} loading={loading} />
      <Pagination requestsPerPage={requestsPerPage} totalRequests={requests.length} paginate={paginate} itemsPerPage={itemsPerPage}/>
    </div>
  )
}

export default App
