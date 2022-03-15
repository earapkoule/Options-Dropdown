export interface DropdownOption {
  id: string;
  name: string;
  icons?: string[];
  testId?: string;
  goTo?: string | string[];
  disabled?: boolean;
  hidden?: boolean;
  borderBottom?: boolean;
  options?: DropdownOption[];
}