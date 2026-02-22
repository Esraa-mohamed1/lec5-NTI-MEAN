import { createClient } from "redis";

const redisClient = createClient({url:'redis://localhost:6379'});

redisClient.on("error", (err) => {
  if (err.code === "ECONNREFUSED") {
    console.error("Redis server is not running. Please start Redis to enable caching.");
  } else {
    console.error("Redis Client Error:", err);
  }
});

(
  async () => {
  try {
    await redisClient.connect();
    console.log("Connected to Redis server");
  } catch (err) {
    console.error("Failed to connect to Redis server:", err);
  }
})();

