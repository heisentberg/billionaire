import React from 'react';
import { useGetStartupConfig } from 'librechat-data-provider';
import { useLocalize } from '~/hooks';

export default function Footer() {
  const { data: config } = useGetStartupConfig();
  const localize = useLocalize();

  return (
    <div className="hidden px-3 pb-1 pt-2 text-center text-xs text-black/50 dark:text-white/50 md:block md:px-4 md:pb-4 md:pt-3">
      {typeof config?.customFooter === 'string' ? (
        config.customFooter
      ) : (
        <>
          <a
            href="http://intellium.network"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {config?.appTitle || 'IntelliumGPT '} IntelliumGPT v2.0
          </a>
          {' - '}. {localize('com_ui_pay_per_call')}
        </>
      )}
    </div>
  );
}
