export const handleFormData = (e: any) => {
    e.preventDefault();
  
    const data = new FormData(e.target); // e.
  
    const value = Object.fromEntries(data.entries());
  
    return value;
  };