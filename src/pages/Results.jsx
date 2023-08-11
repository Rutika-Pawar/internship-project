import React from 'react';
import { ResultHeader } from '../components/results/ResultHeader';
import { BulkActions } from '../components/results/BulkActions';

export const Results = () => {
    
   const onPublish = () => {
        console.log("Publish")
   }

   const onSchedulePublish = () => {
        console.log("Schedule");
   }

   const resultFormQuery = (data) => {
        console.log("parent data received");
        console.log(data);
   }

    return (<>
                <ResultHeader resultFormValues={resultFormQuery} />
                <BulkActions selected="7" onPublished={onPublish} onScheduledPublish={onSchedulePublish} />              
                
        </>);
};
