import axios from 'axios';
import { axiosConfig } from '../helperFunctions';

const API_URL = '/api/goals/';

// Create new goal
const createGoal = async (goalData, token) => {
  const response = await axios.post(API_URL, goalData, axiosConfig(token));

  return response.data;
};

// Get user goals
const getAllGoals = async (token) => {
  const response = await axios.get(API_URL, axiosConfig(token));

  return response.data;
};

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const response = await axios.delete(API_URL + goalId, axiosConfig(token));

  return response.data;
};

const goalsService = {
  createGoal,
  getAllGoals,
  deleteGoal,
};

export default goalsService;
