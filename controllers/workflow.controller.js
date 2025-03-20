import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');

export const sendReminders = serve(async () => {
  const { subscriptionId } = requestPayload;
  const subscription = await fetchSubscription(subscriptionId);
});


