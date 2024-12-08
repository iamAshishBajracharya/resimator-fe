export const fetchMockData = async <T>(url: string): Promise<T> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching mock data:", error);
      throw error;
    }
  };
  