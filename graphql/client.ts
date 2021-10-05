import { createClient, defaultExchanges, subscriptionExchange } from "urql";
import { createClient as createWsClient } from "graphql-ws";

export function initializeGqClient() {
  const wsClient = createWsClient({
    url: `ws://${process.env.NEXT_PUBLIC_HASURA_HOST}/v1/graphql`,
  });
  const forwardSubscription = operation => ({
    subscribe(sink) {
      const unsubscribe = wsClient.subscribe(operation, sink);
      return { unsubscribe };
    },
  });
  return createClient({
    url: `http://${process.env.NEXT_PUBLIC_HASURA_HOST}/v1/graphql`,
    exchanges: [
      ...defaultExchanges,
      subscriptionExchange({ forwardSubscription }),
    ],
  });
}
