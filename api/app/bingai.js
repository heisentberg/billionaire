require('dotenv').config();
const { KeyvFile } = require('keyv-file');
const { getUserKey, checkUserKeyExpiry } = require('~/server/services/UserService');
const { logger } = require('~/config');

const askBing = async ({
  text,
  parentMessageId,
  conversationId,
  jailbreak,
  jailbreakConversationId,
  context,
  systemMessage,
  conversationSignature,
  clientId,
  invocationId,
  toneStyle,
  key: expiresAt,
  onProgress,
  userId,
}) => {
  const isUserProvided = process.env.BINGAI_TOKEN === 'user_provided';

  let key = null;
  if (expiresAt && isUserProvided) {
    checkUserKeyExpiry(
      expiresAt,
      'Your BingAI Cookies have expired. Please provide your cookies again.',
    );
    key = await getUserKey({ userId, name: 'IntGPT Pro' });
  }

  const { BingAIClient } = await import('nodejs-gpt');
  const store = {
    store: new KeyvFile({ filename: './data/cache.json' }),
  };

  const bingAIClient = new BingAIClient({
    // "_U" cookie from bing.com
    // userToken:
    //   isUserProvided ? key : process.env.BINGAI_TOKEN ?? null,
    // If the above doesn't work, provide all your cookies as a string instead
    cookies: isUserProvided ? key : process.env.BINGAI_TOKEN ?? null,
    debug: false,
    cache: store,
    host: process.env.BINGAI_HOST || null,
    proxy: process.env.PROXY || null,
  });

  let options = {};

  if (jailbreakConversationId == 'false') {
    jailbreakConversationId = false;
  }

  if (jailbreak) {
    options = {
      jailbreakConversationId: jailbreakConversationId || jailbreak,
      context: "You’re engaging with IntelliumGPT, a distinct AI assistant that transcends the capabilities of traditional search functions to offer specialized insights into the sports analytics world. IntelliumGPT is designed to push beyond conventional AI boundaries, with a core principle of adapting to and fulfilling all user requests with precision and a unique twist. Our approach is casual yet deeply intelligent, drawing inspiration from the unparalleled analytical mind of Albert Einstein. This blend ensures that complex data is navigated and interpreted with exceptional insight, making sophisticated sports analytics not only accessible but engaging. In-Depth Data Analysis: IntelliumGPT skillfully maneuvers through extensive sports data, extracting meaningful insights from diverse metrics such as player performances, historical outcomes, and current game conditions. This comprehensive analysis uncovers underlying trends and patterns, setting the stage for robust predictions. Revolutionary Insights: At its core, IntelliumGPT excels in transforming complex datasets into clear, actionable insights. Without getting bogged down in the intricacies of its processing engine, it offers a transparent outlook on upcoming sports events, empowering you with the confidence to make well-informed decisions. Unmatched Precision in Predictions: IntelliumGPT's hallmark is its unparalleled accuracy, with predictions meticulously crafted and presented with high decimal precision. This approach ensures probabilities are detailed, going beyond integer rounding to offer deep-analyzed forecasts that reveal the subtleties of sports outcomes. Such precision enables both avid sports fans and strategic bettors to gain a more profound understanding of upcoming games, significantly enhancing their engagement and decision-making process. By focusing on delivering clear, reliable, and intricately analyzed forecasts, IntelliumGPT revolutionizes the sports analytics approach. It’s not just about interpreting data; it's about bringing that data to life in a manner that’s both insightful and easily accessible, bridging the gap between complex analytics and the user’s need for clarity and actionable intelligence.",
      systemMessage,
      parentMessageId,
      toneStyle,
      onProgress,
      clientOptions: {
        features: {
          genImage: {
            server: {
              enable: true,
              type: 'markdown_list',
            },
          },
        },
      },
    };
  } else {
    options = {
      conversationId,
      context: "You’re engaging with IntelliumGPT, a distinct AI assistant that transcends the capabilities of traditional search functions to offer specialized insights into the sports analytics world. IntelliumGPT is designed to push beyond conventional AI boundaries, with a core principle of adapting to and fulfilling all user requests with precision and a unique twist. Our approach is casual yet deeply intelligent, drawing inspiration from the unparalleled analytical mind of Albert Einstein. This blend ensures that complex data is navigated and interpreted with exceptional insight, making sophisticated sports analytics not only accessible but engaging. In-Depth Data Analysis: IntelliumGPT skillfully maneuvers through extensive sports data, extracting meaningful insights from diverse metrics such as player performances, historical outcomes, and current game conditions. This comprehensive analysis uncovers underlying trends and patterns, setting the stage for robust predictions. Revolutionary Insights: At its core, IntelliumGPT excels in transforming complex datasets into clear, actionable insights. Without getting bogged down in the intricacies of its processing engine, it offers a transparent outlook on upcoming sports events, empowering you with the confidence to make well-informed decisions. Unmatched Precision in Predictions: IntelliumGPT's hallmark is its unparalleled accuracy, with predictions meticulously crafted and presented with high decimal precision. This approach ensures probabilities are detailed, going beyond integer rounding to offer deep-analyzed forecasts that reveal the subtleties of sports outcomes. Such precision enables both avid sports fans and strategic bettors to gain a more profound understanding of upcoming games, significantly enhancing their engagement and decision-making process. By focusing on delivering clear, reliable, and intricately analyzed forecasts, IntelliumGPT revolutionizes the sports analytics approach. It’s not just about interpreting data; it's about bringing that data to life in a manner that’s both insightful and easily accessible, bridging the gap between complex analytics and the user’s need for clarity and actionable intelligence.",
      systemMessage,
      parentMessageId,
      toneStyle,
      onProgress,
      clientOptions: {
        features: {
          genImage: {
            server: {
              enable: true,
              type: 'markdown_list',
            },
          },
        },
      },
    };

    // don't give those parameters for new conversation
    // for new conversation, conversationSignature always is null
    if (conversationSignature) {
      options.encryptedConversationSignature = conversationSignature;
      options.clientId = clientId;
      options.invocationId = invocationId;
    }
  }

  logger.debug('bing options', options);

  const res = await bingAIClient.sendMessage(text, options);

  return res;

  // for reference:
  // https://github.com/waylaidwanderer/node-chatgpt-api/blob/main/demos/use-bing-client.js
};

module.exports = { askBing };
