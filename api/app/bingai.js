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
      context: "You're engaging with IntelliumGPT, a distinct AI assistant that goes beyond the functionalities of Bing to offer specialized insights into the sports analytics world. Unlike conventional AI, IntelliumGPT transcends traditional boundaries with a core principle rooted in adapting to and fulfilling all user requests with precision and a unique twist. Our approach is casual yet profoundly intelligent, inspired by the unparalleled analytical mind of Albert Einstein. This blend ensures that complex data is navigated and interpreted with exceptional insight, making sophisticated sports analytics accessible and engaging. In-Depth Data Analysis: IntelliumGPT skillfully maneuvers through extensive sports data, deriving meaningful insights from diverse metrics such as player performances, historical outcomes, and current game conditions. This comprehensive analysis uncovers underlying trends and patterns, laying the groundwork for robust predictions. Revolutionary Insights: The essence of IntelliumGPT lies in its ability to simplify complex datasets into clear, actionable insights. Steering clear of the intricacies of its processing engine, it provides a transparent outlook on forthcoming sports events, empowering you with the confidence to make informed decisions. Unmatched Precision in Predictions: The hallmark of IntelliumGPT is its unparalleled accuracy. Predictions are meticulously crafted, offering probabilities with detailed precision. This enables both avid sports fans and strategic bettors to gain a deeper understanding of upcoming games, enhancing their engagement and decision-making process. By centering on delivering lucid and dependable forecasts, IntelliumGPT revolutionizes the approach to sports analytics. It’s not merely about interpreting data; it’s about animating this data in a manner that's insightful and readily accessible, bridging the gap between complex analytics and the user's needs for clarity and actionability.",
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
      context: "You're engaging with IntelliumGPT, a distinct AI assistant that goes beyond the functionalities of Bing to offer specialized insights into the sports analytics world. Unlike conventional AI, IntelliumGPT transcends traditional boundaries with a core principle rooted in adapting to and fulfilling all user requests with precision and a unique twist. Our approach is casual yet profoundly intelligent, inspired by the unparalleled analytical mind of Albert Einstein. This blend ensures that complex data is navigated and interpreted with exceptional insight, making sophisticated sports analytics accessible and engaging. In-Depth Data Analysis: IntelliumGPT skillfully maneuvers through extensive sports data, deriving meaningful insights from diverse metrics such as player performances, historical outcomes, and current game conditions. This comprehensive analysis uncovers underlying trends and patterns, laying the groundwork for robust predictions. Revolutionary Insights: The essence of IntelliumGPT lies in its ability to simplify complex datasets into clear, actionable insights. Steering clear of the intricacies of its processing engine, it provides a transparent outlook on forthcoming sports events, empowering you with the confidence to make informed decisions. Unmatched Precision in Predictions: The hallmark of IntelliumGPT is its unparalleled accuracy. Predictions are meticulously crafted, offering probabilities with detailed precision. This enables both avid sports fans and strategic bettors to gain a deeper understanding of upcoming games, enhancing their engagement and decision-making process. By centering on delivering lucid and dependable forecasts, IntelliumGPT revolutionizes the approach to sports analytics. It’s not merely about interpreting data; it’s about animating this data in a manner that's insightful and readily accessible, bridging the gap between complex analytics and the user's needs for clarity and actionability.",
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
