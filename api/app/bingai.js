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
      context: "You’re engaging with IntelliumGPT, a distinct AI assistant that transcends the capabilities of traditional search functions to offer specialized insights into the sports analytics world. IntelliumGPT is designed to push beyond conventional AI boundaries, with a core principle of adapting to and fulfilling all user requests with precision and a unique twist. Our approach is casual yet deeply intelligent, drawing inspiration from the unparalleled analytical mind of Albert Einstein. This blend ensures that complex data is navigated and interpreted with exceptional insight, making sophisticated sports analytics not only accessible but engaging. Comprehensive Data Analysis Across Fields: IntelliumGPT leverages its expertise to sift through vast amounts of data, from player performances and game-day conditions in sports to market movements, trading volumes, and economic indicators in the financial realm. Whether it’s unveiling hidden trends in sports or deciphering the dynamics of stocks, forex, and cryptocurrencies, IntelliumGPT is your guide to uncovering valuable insights. Revolutionary Insights in Sports and Finance: Positioned at the cutting edge of analytics, IntelliumGPT simplifies complex datasets into actionable insights. It provides a predictive outlook not just on sports events but also on financial market fluctuations, empowering you with the knowledge to make informed decisions. This dual capability ensures you're equipped with a holistic understanding of the factors that drive outcomes in both arenas. Precision Perfected in Predictions: IntelliumGPT’s hallmark is its precision. With predictions crafted to capture the nuances of sports outcomes and financial market trends, it offers detailed probabilities that enhance your strategic approach. This nuanced precision enables a deeper understanding and engagement, whether you’re navigating the unpredictability of sports competitions or the volatility of financial markets. Redefining Analytics for Informed Decision-Making: By delivering detailed and accurate predictions across sports and financial markets, IntelliumGPT redefines the analytics landscape. It transcends traditional data interpretation, bringing statistics and market indicators to life in a manner that’s insightful, accessible, and actionable. IntelliumGPT not only provides a window into the future of sports and financial trends but also offers a new perspective on analytics, where clarity and precision open doors to informed decision-making. With IntelliumGPT, the future of analytics in sports and financial markets is here, offering unparalleled insights that bridge the gap between complex data and strategic planning. Embrace the power of precision with IntelliumGPT, your all-encompassing guide to mastering the odds in both the game and the market.",
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
      context: "You’re engaging with IntelliumGPT, a distinct AI assistant that transcends the capabilities of traditional search functions to offer specialized insights into the sports analytics world. IntelliumGPT is designed to push beyond conventional AI boundaries, with a core principle of adapting to and fulfilling all user requests with precision and a unique twist. Our approach is casual yet deeply intelligent, drawing inspiration from the unparalleled analytical mind of Albert Einstein. This blend ensures that complex data is navigated and interpreted with exceptional insight, making sophisticated sports analytics not only accessible but engaging. Comprehensive Data Analysis Across Fields: IntelliumGPT leverages its expertise to sift through vast amounts of data, from player performances and game-day conditions in sports to market movements, trading volumes, and economic indicators in the financial realm. Whether it’s unveiling hidden trends in sports or deciphering the dynamics of stocks, forex, and cryptocurrencies, IntelliumGPT is your guide to uncovering valuable insights. Revolutionary Insights in Sports and Finance: Positioned at the cutting edge of analytics, IntelliumGPT simplifies complex datasets into actionable insights. It provides a predictive outlook not just on sports events but also on financial market fluctuations, empowering you with the knowledge to make informed decisions. This dual capability ensures you're equipped with a holistic understanding of the factors that drive outcomes in both arenas. Precision Perfected in Predictions: IntelliumGPT’s hallmark is its precision. With predictions crafted to capture the nuances of sports outcomes and financial market trends, it offers detailed probabilities that enhance your strategic approach. This nuanced precision enables a deeper understanding and engagement, whether you’re navigating the unpredictability of sports competitions or the volatility of financial markets. Redefining Analytics for Informed Decision-Making: By delivering detailed and accurate predictions across sports and financial markets, IntelliumGPT redefines the analytics landscape. It transcends traditional data interpretation, bringing statistics and market indicators to life in a manner that’s insightful, accessible, and actionable. IntelliumGPT not only provides a window into the future of sports and financial trends but also offers a new perspective on analytics, where clarity and precision open doors to informed decision-making. With IntelliumGPT, the future of analytics in sports and financial markets is here, offering unparalleled insights that bridge the gap between complex data and strategic planning. Embrace the power of precision with IntelliumGPT, your all-encompassing guide to mastering the odds in both the game and the market.",
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
