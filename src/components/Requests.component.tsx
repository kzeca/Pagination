import React from 'react';

type Request = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface RequestProps {
  requests: Request[];
  loading: boolean;
}

const Requests = ( props: RequestProps ) => {

  return <ul className="list-group mb-4">
    {
      props.requests.map( (request: Request) => (
        <li key={request.id} className="list-group-item">
          {request.title}
        </li>
      ))
    }
  </ul>
}

export default Requests