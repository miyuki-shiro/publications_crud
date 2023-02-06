import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  publications: [],
  error: { create: '', list: '', delete: '' }
};

const store = configureStore(
  {
    reducer: (state = initialState, action) => {
        const { type, payload } = action;
        switch (type) {
          case 'CREATE':
            return { 
              ...state, 
              publications: [ payload, ...state.publications ], 
              error: { ...state.error, create: ''  }
            };
          case 'CREATE_ERROR': 
            return { ...state, error: { ...state.error, create: `❌ ${payload.message} ❌` }}
          
          case 'LIST':
            return  { 
              ...state, 
              publications: payload, 
              error: { ...state.error, list: ''  }
            };
          case 'LIST_ERROR': 
            return { ...state, error: { ...state.error, list: `❌ ${payload.message} ❌` }}
          
          case 'DELETE':
            return {
              ...state,
              publications: state.publications.filter(pub => pub.id !== payload.id),
              error: { ...state.error, delete: ''  } }
          case 'DELETE_ERROR': 
            return { ...state, error: { ...state.error, delete: `❌ ${payload.message} ❌`}}

          default:
            return state;
        }
    },
  },
);

export default store;