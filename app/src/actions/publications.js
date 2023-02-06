import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: { 'Content-type': 'application/json' },
});

export const createPublication = (name, description) => async (dispatch) => {
  try {
    const response = await http.post('/publication', { name, description });
    if (response.status === 200 || response.status === 201) {
      dispatch({ type: 'CREATE', payload: response.data });
    } else {
      dispatch({ type: 'CREATE_ERROR', payload: response.data });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: 'CREATE_ERROR', payload: { message: 'Could not create a new publication' }});
  }
};

export const listPublications = () => async (dispatch) => {
  try {
    const response = await http.get('/publications');
    if (response.status === 200) {
      dispatch({ type: 'LIST', payload: response.data });
    } else {
      dispatch({ type: 'LIST_ERROR', payload: response.data });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: 'LIST_ERROR', payload: { message: 'Could not load publications' }});
  }
}

export const deletePublication = (id) => async (dispatch) => {
  try {
    const response = await http.delete(`/publication/${id}`);
    if (response.status === 200) {
      dispatch({ type: 'DELETE', payload: { id } });
    } else {
      dispatch({ type: 'DELETE_ERROR', payload: response.data });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: 'LIST_ERROR', payload: { message: 'Could not delete selected publication' }});
  }
};