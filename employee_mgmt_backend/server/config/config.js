import "dotenv/config";

const config = {
  db: {
    //url to be used in link generation
    url: process.env.MONGO_URL,
    //mongodb connection settings
    preferences: {
      useNewUrlParser: process.env.useNewUrlParser,
      useUnifiedTopology: process.env.useUnifiedTopology,
    },
  },
};
export default config;
