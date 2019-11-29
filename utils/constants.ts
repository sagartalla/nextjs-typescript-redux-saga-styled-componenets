import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const { appEnv } = publicRuntimeConfig;

const SERVICE_ORIGINS: { [dev: string]: { TEMP_SERVICE: string } } = {
  dev: {
    TEMP_SERVICE: "http://172.31.58.234:9001/storefront/api/v1"
  }
};

export default SERVICE_ORIGINS[appEnv || "dev"];
