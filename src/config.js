const dev = {
  STRIPE_KEY: "pk_test_ihzI6WykZJJNmtDvIpHwavjQ00wcmZ3J7C",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-19vs0tw0ydcnv"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://a8xzf0lep1.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_aiEPudup1",
    APP_CLIENT_ID: "41ms3t0opoev13ubkvb4j88ulc",
    IDENTITY_POOL_ID: "us-east-1:71732372-8988-4a20-a521-a1babaad9e91"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_ihzI6WykZJJNmtDvIpHwavjQ00wcmZ3J7C",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1cjfynjh1alpt"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://9eto8qqv8f.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_bkra7kT9m",
    APP_CLIENT_ID: "1030b6m78f1216jkhh7rml3muq",
    IDENTITY_POOL_ID: "us-east-1:10f31433-893f-4b15-bf21-e80777b34f58"
  }
};

const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
