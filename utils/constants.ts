import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const { appEnv } = publicRuntimeConfig;

const SERVICE_ORIGINS: { [dev: string]: { TEMP_SERVICE: string } } = {
  dev: {
    TEMP_SERVICE: "https://jsonplaceholder.typicode.com"
  }
};

export default SERVICE_ORIGINS[appEnv || "dev"];
