import DialogContent from '@mui/material/DialogContent';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormDialogTextItem } from '@/components/ui/FormDialog';

import { FormDialog } from './FormDialog';

export default {
  title: 'models/FormDialog',
  component: FormDialog,
} as ComponentMeta<typeof FormDialog>;

const Template: ComponentStory<typeof FormDialog> = (props) => (
  <FormDialog {...props} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: 'storybook-form-dialog',
  defaultValues: {
    name: 'this is name',
  },
  children: (
    <DialogContent>
      <FormDialogTextItem label="name" name="name" />
    </DialogContent>
  ),
  open: true,
  handleSubmit: (data) => console.log('submitted', data),
};
