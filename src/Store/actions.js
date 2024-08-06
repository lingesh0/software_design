// src/store/actions.js
export const setSelectedAdmin = (admin) => ({
  type: 'SET_SELECTED_ADMIN',
  payload: admin,
});

export const setSelectedWorkspace = (workspace) => ({
  type: 'SET_SELECTED_WORKSPACE',
  payload: workspace,
});
