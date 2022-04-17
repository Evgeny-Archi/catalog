import React, { FC } from 'react';
import Fallback from '../../components/Fallback/Fallback';
import wrapAsPage from '../../hoc/wrap-as-page';

type Props = {
    data?: string[];
};

const Model: FC<Props> = () => {
    return <div>Model</div>;
};

export default wrapAsPage(Model, Fallback);
