const handleFormData = (e: any) => {
    e.preventDefault();
  
    const data = new FormData(e.terget); // e.terget! Whoops!
  
    const value = Object.fromEntries(data.entries());
  
    return value;
  };