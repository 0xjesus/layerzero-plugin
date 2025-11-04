import { createPluginRuntime, type PluginBinding } from "every-plugin";

import type DataProviderTemplatePlugin from "@layerzero/data-provider";

type AppBindings = {
  "@layerzero/data-provider": PluginBinding<typeof DataProviderTemplatePlugin>;
};

const runtime = createPluginRuntime<AppBindings>({
  registry: {
    "@layerzero/data-provider": {
      remoteUrl: "http://localhost:3014/remoteEntry.js",
    },
  },
  secrets: {
    DATA_PROVIDER_API_KEY: process.env.DATA_PROVIDER_API_KEY!,
  },
});

export const { router: dataProviderRouter } = await runtime.usePlugin("@layerzero/data-provider", {
  variables: {
    baseUrl: process.env.DATA_PROVIDER_BASE_URL || "https://stargate.finance/api/v1",
    defillamaBaseUrl: process.env.DEFILLAMA_BASE_URL || "https://api.llama.fi",
    timeout: Number(process.env.DATA_PROVIDER_TIMEOUT) || 15000,
    maxRequestsPerSecond: Number(process.env.MAX_REQUESTS_PER_SECOND) || 10,
  },
  secrets: { apiKey: "{{DATA_PROVIDER_API_KEY}}" },
});
