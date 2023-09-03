import * as Icons from '@/common/ui/icons';

type IconOptions = Record<keyof typeof Icons, any>;
export const ICON_OPTIONS = Object.entries(Icons).reduce<IconOptions>(
  (acc, [iconName, IconComponent]) => {
    acc[iconName.replace(/icon$/i, '') as keyof typeof Icons] = IconComponent({});
    return acc;
  },
  {} as IconOptions,
);
