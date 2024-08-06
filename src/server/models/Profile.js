import validator from 'validator';
import mongoose from "mongoose"; // connects to and communicates with database to use schemas

// Profile Schema
const profileSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  bio: {
    type: String,
  },
  journey: {
    type: String,
  },
  heritage: {
    type: String,
  },
  email: {
    type: String,
    validate: {
      validator: function(v) {
        return !v || validator.isEmail(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return !v || validator.isMobilePhone(v, 'en-US');
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  website: {
    type: String,
    validate: {
      validator: function(v) {
        return !v || validator.isURL(v);
      },
      message: props => `${props.value} is not a valid URL!`
    }
  },
  expertise: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Expertise",
  }],
  treatments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Treatment",
  }],
  languages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
  }],
  dialects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dialect",
  }],
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile