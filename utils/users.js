// utils/users.js
import { ObjectId } from 'mongodb';
import dbClient from './db';

// Function to get user ID and key from request headers
export const getIdAndKey = async (request) => {
  try {
    // Implement this based on your authentication mechanism
    // Extract user ID and key/token from request headers or cookies
    // For example, you can use the X-Token header for authentication

    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return { userId: null, key: null };
    }

    // Placeholder logic to extract user ID and key from the Authorization header
    const [userId, key] = authHeader.split(':');
    return { userId, key };
  } catch (error) {
    console.error('Error extracting user ID and key:', error);
    return { userId: null, key: null };
  }
};

// Function to check if the user is valid
export const isValidUser = async (userId) => {
  try {
    // Implement this based on your user validation logic
    // Check if the user with the given ID exists in the database
    const user = await dbClient.users.findOne({ _id: ObjectId(userId) });

    // Return true if the user is valid, otherwise false
    return !!user;
  } catch (error) {
    console.error('Error validating user:', error);
    return false;
  }
};
