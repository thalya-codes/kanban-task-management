import { IHandleMultipleModalsVisibilityParams } from '@/generalTypings';

export const handleMultipleModalsVisibility = ({
  setShowPrimary,
  setShowSecondary,
  openSecondary = false,
}: IHandleMultipleModalsVisibilityParams) => {
  if (!setShowPrimary || !setShowSecondary) return;
  setShowSecondary(openSecondary);
  setShowPrimary(false);
};
