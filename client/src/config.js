const config = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "portfoliopostings",
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: " https://xkxsbngsvi.execute-api.us-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_yFvymXPiy",
    APP_CLIENT_ID: "93f1bubfdt3gifhv0ep9pe752",
    IDENTITY_POOL_ID: "us-west-2:beab6ac7-fb75-4ee0-b88f-75461c36a4f8",
  },
  colors: {
    blue: '#00acfc',
    purple: '#695ca8',
    white: '#fff',
    black: '#000'
  }
};

export default config;