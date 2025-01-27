import { ComponentProps } from 'react';
import { BottomSheet as BottomSheetBase } from 'react-spring-bottom-sheet-updated';
import 'react-spring-bottom-sheet-updated/dist/style.css';

export const BottomSheet = ({
  children,
  ...props
}: ComponentProps<typeof BottomSheetBase>) => {
  return <BottomSheetBase {...props}>{children}</BottomSheetBase>;
};
