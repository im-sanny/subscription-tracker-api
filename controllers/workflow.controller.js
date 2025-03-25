import dayjs from 'dayjs';
import { createRequire } from 'module';
import Subscription from '../models/subscription.model.js';
const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');

export const sendReminders = serve(async (c) => {
  const { subscriptionId } = c.requestPayload;
  const subscription = await fetchSubscription(c, subscriptionId);

  if (!subscription || subscription.status !== active) return;

  const renewalDate = dayjs(subscription.renewalDate);

  if (renewalDate.isBefore(dayjs())) {
    console.log(
      `Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`,
    );
  }
});

const fetchSubscription = async (c, subscriptionId) => {
  return await c.run('get subscription', () => {
    return Subscription.findById(subscriptionId).populate('user', 'name email');
  });
};
