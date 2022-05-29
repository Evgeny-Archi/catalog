/* eslint-disable react/display-name */
import React, { ComponentType } from 'react';

type Props = {
    data?: string[];
};

const wrapAsPage = (Component: ComponentType<Props>): ComponentType<Props> => {
    return (props: Props) => {
        return <Component {...props} />;
    };
};

export default wrapAsPage;
