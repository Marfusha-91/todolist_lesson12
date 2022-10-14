import React from 'react';


import {ComponentStory, ComponentMeta} from '@storybook/react';

import {EditableSpan} from './EditableSpan'
import {action} from "@storybook/addon-actions";

export default {
    title: 'Todolist/EditableSpan',
    component: EditableSpan,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        onChange: {description: "Value aditableSpan"},
    value: {
        defaultValue: "HTML",
        description: "Start Value editableSpan"
    } }
} as ComponentMeta<typeof EditableSpan>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;

export const AddEditableSpan = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AddEditableSpan.args = {
    onChange: action("Button inside form")
};

