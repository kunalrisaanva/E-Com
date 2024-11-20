const errorResponse = (message, statusCode ,errors = []  ) => {
    return {
      success: false,
      message,
      errors,
    };
  };
  

  export {errorResponse}