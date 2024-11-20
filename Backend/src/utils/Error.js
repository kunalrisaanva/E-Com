const errorResponse = (message, errors = []) => {
    return {
      success: false,
      message,
      errors,
    };
  };
  

  export {errorResponse}