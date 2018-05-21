const dev =  {
    STRIPE_KEY: "pk_test_VX41RDk3zBHgC8216IfgRiB8",
    s3: {
      REGION: "ap-southeast-1",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-4gjozwdi9v2v"
    },
    apiGateway: {
      REGION: "ap-southeast-1",
      URL: "https://tuj16nq3wg.execute-api.ap-southeast-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "ap-southeast-1",
      USER_POOL_ID: "ap-southeast-1_4gpubMqq5",
      APP_CLIENT_ID: "3aj70ir6sm7jbvkvqh5f0lkaqn",
      IDENTITY_POOL_ID: "ap-southeast-1:fc18311d-17c2-49a9-8f5a-10751f500d60"
    }
  };

  const prod =  {
    STRIPE_KEY: "pk_test_VX41RDk3zBHgC8216IfgRiB8",
    s3: {
      REGION: "ap-southeast-1",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-6aufmpgftypm"
    },
    apiGateway: {
      REGION: "ap-southeast-1",
      URL: "https://d4ygenf2ml.execute-api.ap-southeast-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-southeast-1",
      USER_POOL_ID: "ap-southeast-1_wkx4v6vVd",
      APP_CLIENT_ID: "7jrho5si5rbthr7812vaoo86pf",
      IDENTITY_POOL_ID: "ap-southeast-1:34f51fa6-95ff-41a7-9657-b02612adb7bd"
    }
  };

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default{
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  }