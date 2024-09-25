type APIResponse =
  | {
      data: {
        id: string;
      };
    }
  | {
      error: string;
    };

export const handleResponse = (response: APIResponse): string => {
  if ("data" in response) {  // Type guard to check if 'data' is in the response
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};
