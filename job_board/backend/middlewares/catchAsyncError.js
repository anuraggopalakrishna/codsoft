export const catchAsyncErrors = (theFunction) => {
  return (req, res, next) => {
    Promise.resolve(theFunction(req, res, next)).catch(next); //always returns a promise. this allows consistent handling of such asynch code
  };
};
