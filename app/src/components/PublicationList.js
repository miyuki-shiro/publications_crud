import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPublications, deletePublication } from '../actions/publications';

const PublicationList = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  let publications = useSelector(state => state.publications);
  const error = useSelector(state => state.error.list);
  
  useEffect(() => { dispatch(listPublications()) }, [dispatch]);

  if (query) publications = publications.filter(pub => pub.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <div className='form-card'>
        <div className='form-group'>
          <input type='text' className='form-control' id='query' placeholder='🔎 Write a name...' 
            required name='query' value={query} style={{ width: '200px' }}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <button className='btn btn-success' disabled={!query} onClick={() => setQuery('')}>❎</button>
      </div>

      <div className='logs-card'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {publications.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td><button className='btn btn-success'
                    onClick={() => dispatch(deletePublication(item.id))}>🗑</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {(publications.length === 0 && !error) && <h3 className='logs-error'>😰 Ups! Nothing found!.</h3>}
        {error && <h3 className='logs-error'>{error}</h3>}
      </div>
    </>
  );
}

export default PublicationList;