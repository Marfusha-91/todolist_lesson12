import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Task} from './Task'
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Todolist/Task',
    component: Task,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        addItem: { description: "Button inside form clicked" },
    },
} as ComponentMeta< typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task > = (args) => <Task {...args} />;


const addTaskStatusCallback = action("change")
const addTaskTitleCallback = action("change")
const addRemoveTaskCallback = action("change")

const baseArgs = {
    changeTaskStatus: addTaskStatusCallback,
    changeTaskTitle: addTaskTitleCallback,
    removeTask: addRemoveTaskCallback

}

export const AddTaskExample = Template.bind({});
AddTaskExample.args =  {
             ...baseArgs,
              task:  {id: "1",isDone: true,title: 'css' },
              todolistId: "todolistId1"
};

