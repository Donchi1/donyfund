const emailData = {
  activation: (email, accessToken) => ({
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: 'Account Activation Link',
    html: `<h1>Please click on this to activate your account</h1>
                    <p>${process.env.CLIENT_URL}/user/activate/${accessToken}</p>
                    <br/>
                    <p>This email contains sensitive informations</p>
                    <p>${process.env.CLIENT_URL}</p>
             `,
  }),
  passwordResetLink: (user, accessToken) => ({
    from: process.env.EMAIL_SENDER,
    to: user.email,
    subject: 'Password Reset Link',
    html: `<h1>Click on the link to reset your password</h1>
                    <p>${
                      process.env.CLIENT_URL
                    }/user/passwordupdate/${accessToken}</p>
                    <br/>
                    <p>this email contains sensitive informations</p>
                     <small> © ${new Date().getFullYear()}
                  <a href="https://donyfund.info"> DonyFund</a> All Rights
                  Reserved</small>
             `,
  }),
  passwordResetSuccess: (email) => ({
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: 'Password Reset Success',
    html: `<h1>Wow! your password reset was successful</h1>
              
                    <br/>
                  <small> © ${new Date().getFullYear()}
                  <a href="https://donyfund.info"> DonyFund</a> All Rights
                  Reserved</small>
             `,
  }),

  welcome: (user) => ({
    from: process.env.EMAIL_SENDER,
    to: user.email,
    subject: 'Welcome',
    html: `<h1>Hi ${user.fullname} you are welcome to donyfund</h1>
                    <p>We are happy to see you</p>
                    <p>Make great wealth while you sit at home or do your usual works</p>
                    <br/>
                    <small> © ${new Date().getFullYear()}
                  <a href="https://donyfund.info"> DonyFund</a> All Rights
                  Reserved</small>
                  
             `,
  }),

  profileUpdate: (user) => ({
    from: process.env.EMAIL_SENDER,
    to: user.email,
    subject: 'profile Update',
    html: `<h1>${user.fullname} you have updated your profile</h1>
                    <p>if you did not do this, kindly contact our support team</p>
                     <p>Time ${new Date()}</p>
                    <br/>
                    <small> © ${new Date().getFullYear()}
                  <a href="https://donyfund.info"> DonyFund</a> All Rights
                  Reserved</small>
             `,
  }),
  withdrawals: (user) => ({
    from: process.env.EMAIL_SENDER,
    to: user.email,
    subject: 'Withdrawal Information',
    html: `<h1>${
      user.fullname
    } your withdrawal has been placed successfully</h1>
                    <p>We will get back to you in less than 24 hours</p>
                     <p>Time ${new Date()}</p>
                    <br/>
                    <small> © ${new Date().getFullYear()}
                  <a href="https://donyfund.info"> DonyFund</a> All Rights
                  Reserved</small>
             `,
  }),
  contacts: (user) => ({
    from: process.env.EMAIL_SENDER,
    to: user.email,
    subject: 'Contact Notification',
    html: `<h1>${user.name} thank you for contacting us</h1>
                    <p>We will get back to you soon</p>                   
                    <br/>
                    <small> © ${new Date().getFullYear()}
                  <a href="https://donyfund.info"> DonyFund</a> All Rights
                  Reserved</small>
             `,
  }),
  newsLetters: (user) => ({
    from: process.env.EMAIL_SENDER,
    to: user.email,
    subject: 'Newsletter',
    html: `<h1>Thank you for subscribing to our newsletter</h1>
                    <p>We will reach out to you if there is any information</p>                   
                    <br/>
                    <small> © ${new Date().getFullYear()}
                  <a href="https://donyfund.info"> DonyFund</a> All Rights
                  Reserved</small>
             `,
  }),
}

module.exports = emailData
