import React  from 'react'
import './App.css';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import AppWithRedux from "./AppWithRedux";
import {action} from "@storybook/addon-actions";
import {Provider} from "react-redux";
import {store} from "./state/store";
import {ReduxStoreProviderDecorator} from "./RedaxStoreProviderDecorator";

export default {
    title: 'Todolist/AppWithRedux',
    component: AppWithRedux,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppWithRedux> = (args) =>  <AppWithRedux />

export const AddAppWithReduxExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AddAppWithReduxExample.args = {
};



