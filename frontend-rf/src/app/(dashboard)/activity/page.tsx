import { TopActivityComp, TopModalComp } from '@/components/dashboard/activity/ActivityComp';
import { BottomTable } from '@/components/dashboard/MainComp';
import React from 'react';

const ActivityPage: React.FC = () => {
    return (
        <div>
            <TopModalComp/>
            <TopActivityComp/>
        </div>
    );
};

export default ActivityPage;