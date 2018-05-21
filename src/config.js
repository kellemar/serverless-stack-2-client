const dev =  {
    s3: {
      REGION: "ap-southeast-1",
      BUCKET: "notes-app-uploads-amg"
    },
    apiGateway: {
      REGION: "ap-southeast-1",
      URL: "https://d4ygenf2ml.execute-api.ap-southeast-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-southeast-1",
      USER_POOL_ID: "ap-southeast-1_lRPPfJTy5",
      APP_CLIENT_ID: "cd321b0bpm674jvj0agtc4jif",
      IDENTITY_POOL_ID: "ap-southeast-1:bf7afc5e-f5e6-4bcd-8676-770d755aef7b"
    }
  };

  const prod =  {
    s3: {
      REGION: "ap-southeast-1",
      BUCKET: "notes-app-uploads-amg"
    },
    apiGateway: {
      REGION: "ap-southeast-1",
      URL: "https://d4ygenf2ml.execute-api.ap-southeast-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-southeast-1",
      USER_POOL_ID: "ap-southeast-1_lRPPfJTy5",
      APP_CLIENT_ID: "cd321b0bpm674jvj0agtc4jif",
      IDENTITY_POOL_ID: "ap-southeast-1:bf7afc5e-f5e6-4bcd-8676-770d755aef7b"
    }
  };

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default{
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  }