const API_BASE_URL = 'http://localhost:8000/api';

export const authAPI = {
  register: async (userData: any) => {
    console.log('Sending data to backend:', userData);
    
    const response = await fetch(`${API_BASE_URL}/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log('Backend response:', data);
    
    if (!response.ok) {
      throw new Error(data.error || 'Registration failed');
    }
    
    return data;
  },
};