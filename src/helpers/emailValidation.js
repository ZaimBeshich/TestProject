export const emailValidation = (email) => {
  const regex = new RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})$/iu
  );
  const isEmailValid = regex.test(email);
  const isEmailLength =
    emailStr(email).length < 30 && emailStr(email).length > 9;
  return isEmailLength && isEmailValid;
};

const emailStr = (email) => {
  return email.includes('@') ? email.substring(0, email.indexOf('@')) : false;
};
