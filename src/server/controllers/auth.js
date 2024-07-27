import passport from 'passport';
import validator from 'validator';
import User from '../models/User.js';


/*
 * Google Strategy  
*/
export const googleAuth = passport.authenticate('google', {
    scope: ['profile', 'email']
});


export const googleAuthCallback = (req, res, next) => {
    passport.authenticate('google', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect('/login'); // Redirect to login if authentication fails
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        if (user.needsProfileCompletion) {
          return res.redirect('/register'); // Redirect to register if profile completion is needed
        }
        return res.redirect('/member'); // Redirect to member on success
      });
    })(req, res, next);
  };
  


/*
 * Local Strategy  
*/
const validateInput = (email, password, confirmPassword, type) => {
    const errors = [];
    if (!validator.isEmail(email)) {
      errors.push({ message: "Please enter a valid email address." });
    }
    if (type === 'signup') {
      if (!validator.isLength(password, { min: 8 })) {
        errors.push({ message: "Password must be at least 8 characters long." });
      }
      if (password !== confirmPassword) {
        errors.push({ message: "Passwords do not match." });
      }
    }
    if (type === 'login') {
      if (validator.isEmpty(password)) {
        errors.push({ message: "Password cannot be blank." });
      }
    }
    return errors;
};


export const login = async (req, res, next) => {
    const validationErrors = validateInput(req.body.email, req.body.password, null, 'login');
  
    if (validationErrors.length) {
      return res.status(400).json({ message: validationErrors[0].message });
    }
  
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });
  
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.status(200).json({ message: "Success! You are logged in." });
      });
    })(req, res, next);
  };


export const signup = async (req, res, next) => {
    const validationErrors = validateInput(req.body.email, req.body.password, req.body.confirmPassword, 'signup');
  
    if (validationErrors.length) {
      return res.status(400).json({ message: validationErrors[0].message });
    }
  
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });
  
    try {
      const existingUser = await User.findOne({ email: req.body.email });
  
      if (existingUser) {
       return res.status(409).json({ message: "Account with that email address already exists."});
      }
  
      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        needsProfileCompletion: true, // Ensure profile completion flag is set
      });
  
      await user.save();
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.status(201).json({ message: "User registered successfully."});
      });
    } catch (err) {
      return next(err);
    }
};


export const logout = (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: 'An error occurred during logout.' });
      }
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).json({ message: 'An error occurred while destroying the session.' });
        }
        req.user = null;
        res.status(200).json({ message: 'Successfully logged out.' });
      });
    });
};