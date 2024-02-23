import { useRecoilValue } from 'recoil';
import { SelectDropDown, SelectDropDownPop, Tabs, TabsList, TabsTrigger } from '~/components/ui';
import { cn, cardStyle } from '~/utils/';
import type { TModelSelectProps } from '~/common';
import store from '~/store';

export default function BingAI({
  conversation,
  setOption,
  models,
  showAbove,
  popover = false,
}: TModelSelectProps) {
  // Use Recoil to manage global state
  const showBingToneSetting = useRecoilValue(store.showBingToneSetting);
  
  // Return null if no conversation is provided
  if (!conversation) {
    return null;
  }

  const { conversationId, toneStyle, jailbreak } = conversation;

  // Return null if conversationId is not 'new' and BingToneSetting should not be shown
  if (conversationId !== 'new' && !showBingToneSetting) {
    return null;
  }

  // Define default and selected CSS classes
  const defaultClasses = 'p-2 rounded-md min-w-[75px] font-normal bg-white/[.60] dark:bg-gray-700 text-black text-xs';
  const defaultSelected = cn(defaultClasses, 'font-medium data-[state=active]:text-white text-xs text-white');
  const selectedClass = (val: string) => `${val}-tab ${defaultSelected}`;

  // Choose between SelectDropDownPop and SelectDropDown based on popover prop
  const Menu = popover ? SelectDropDownPop : SelectDropDown;

  return (
    <>
      <Menu
        title="Mode"
        value={jailbreak ? 'IntGPT' : 'IntGPT Pro'}
        data-testid="bing-select-dropdown"
        setValue={(value) => setOption('jailbreak')(value === 'IntGPT')}
        availableValues={models}
        showAbove={showAbove}
        showLabel={false}
        className={cn(
          cardStyle,
          'z-50 flex h-[40px] w-36 flex-none items-center justify-center px-4 ring-0 hover:cursor-pointer hover:bg-slate-50 focus:ring-0 focus:ring-offset-0 data-[state=open]:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:data-[state=open]:bg-gray-600',
          showBingToneSetting ? 'hidden' : '',
        )}
      />
      <Tabs
        value={toneStyle ?? 'creative'}
        className={cn(
          cardStyle,
          'z-50 flex h-[40px] flex-none items-center justify-center px-0 hover:bg-slate-50 dark:hover:bg-gray-700',
        )}
        onValueChange={(value) => {
          // Map the visible label to the backend's expected value
          const backendValue = value === 'GPT-4' ? 'creative' : value.toLowerCase();
          setOption('toneStyle')(backendValue);
        }}
      >
        <TabsList className="bg-white/[.60] dark:bg-gray-700">
          <TabsTrigger
            value="GPT-4" // Ensure this matches the `value` in the Tabs component to be selectable
            className={`${toneStyle === 'creative' ? selectedClass('creative') : defaultClasses}`}
          >
            GPT-4
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
}
