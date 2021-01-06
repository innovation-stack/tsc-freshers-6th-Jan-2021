// indexable properties
interface AuthFormFields {
  // mandatory properties
  username: string;
  password: string;
  // dynamic properties
  [key: string]: any;
}

// login form -> username, password
// registration form -> username, password, rememberMe, secondaryEmail

const loginFormFields: AuthFormFields = {
  username: 'anupvasudeva',
  password: 'pass@123',
};

const registerFormFields: AuthFormFields = {
  username: 'anupvasudeva',
  password: 'pass@123',
  rememberMe: true,
  email: 'anup.vasudeva@email.com',
};

console.log(loginFormFields);
console.log(registerFormFields);

export default null;
