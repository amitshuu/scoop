export const registerInputValidator = (
  userName: string,
  firstName: string,
  email: string,
  password: string
) => {
  let errors: Record<string, string> = {};

  const checkUsername = () => {
    if (!userName) {
      errors.userName = 'Username field is required!';
    } else if (userName.length < 6) {
      errors.userName = 'Username must be at least 6 characters long';
    }
  };

  const checkEmail = () => {
    if (!email) {
      errors.email = 'Email field is required!';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errors.email = 'Invalid email address.';
    }
  };

  const checkPassword = () => {
    if (!password) {
      errors.password = 'Password field is required!';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  };

  const checkFirstName = () => {
    if (!firstName) {
      errors.firstName = 'First name field is required';
    }
  };

  checkUsername();
  checkEmail();
  checkPassword();
  checkFirstName();

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export const loginInputValidator = (userName: string, password: string) => {
  let errors: Record<string, string> = {};

  const checkUsername = () => {
    if (!userName) {
      errors.userName = 'Username field is required!';
    } else if (userName.length < 6) {
      errors.userName = 'Username must be at least 6 characters long';
    }
  };

  const checkPassword = () => {
    if (!password) {
      errors.password = 'Password field is required!';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  };

  checkUsername();
  checkPassword();

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
