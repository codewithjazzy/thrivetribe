import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js"


export const configurePassport = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: "email" },
            async (email, password, done) => {
                try {
                    const user = await User.findOne({ email: email.toLowerCase() });
                
                    if (!user) {
                        return done(null, false, { message: `Email ${email} not found.` });
                    }
                
                    if (!user.password) {
                        return done(null, false, {
                        message: "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
                        });
                    }
                
                    const isMatch = await user.comparePassword(password);
                    
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: "Invalid email or password." });
                    }           
                } catch (err) {
                    return done(err);
                }
            }
        )
    );


    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            scope: ['profile', 'email'],
            state: true, 
        },
        async (accessToken, refreshToken, profile, done) => {
            // console.log(profile);
            try {
              const existingUser = await User.findOne({ email: profile.emails[0].value });
        
              if (existingUser) {
                if (!existingUser.googleId){
                  existingUser.googleId = profile.id;
                  await existingUser.save();
                }
                return done(null, existingUser);
              }
            } catch (err) {
              console.log(err);
            }
        
            try {
              const newUser = await new User({
                googleId: profile.id,
                email: profile.email,
              }).save();
              done(null, newUser);
            } catch (err) {
              console.log(err);
            }
          },
        )
    )

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser(async (id, done) => {
        try {
          const user = await User.findById(id);
          done(null, user);
        } catch (err) {
          done(err);
        }
    });
}