import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createPublication } from '../actions/publications';

const NewPublication = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const disabledButton = name && description ? true : false;
  console.log(disabledButton);

  const error = useSelector((state) => state.error.create);
  const dispatch = useDispatch();

  return (
    <>
      <div className='form-card'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' className='form-control' id='name' required name='name'
            value={name} onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input type='text' className='form-control' id='description' required name='description'
            value={description} onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button className='btn btn-success' disabled={!disabledButton}
          onClick={() => {
            if (disabledButton) {
              dispatch(createPublication(name, description));
              setName(''); setDescription('');
            }
          }}>☑️</button>
      </div>
      {error !== '' && <label className='logs-error'>{error}</label>}
    </>
  );
};

export default NewPublication;
