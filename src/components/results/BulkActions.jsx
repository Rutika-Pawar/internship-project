import React, { useState, useCallback } from 'react';
import { Svgs } from '../../enums';
import { SvgIcon } from '../ui';

export const BulkActions = ({ selected, onPublished, onScheduledPublish }) => {
  const [sectionSelectedCount, setSectionSelectedCount] = useState(0);

  const handleActionClick = useCallback((action) => {
    console.log(selected, action);
  if (action === 'Published') {
      onPublished('Published');
    } else if (action === 'Schedule Publish') {
      onScheduledPublish('Schedule Publish');
    }
  }, [selected, onPublished, onScheduledPublish]);

  const renderAction = (action, icon, count = null) => {
    const actionCount = count !== null ? count : action === 'Section Selected' ? sectionSelectedCount : null;

    return (
      <span
        key={action}
        onClick={() => handleActionClick(action)}
        className="action"
        style={{ userSelect: 'none' }}
      >
        {icon}
        {actionCount !== null ? (
          <>
            <span className="count">{actionCount}</span>
            {action}
          </>
        ) : (
          action
        )}
      </span>
    );
  };

  return (
    <div className="outer-box">
      <div className="box">
        <div className='publish'>
          Section Selected : {selected}
        </div>
        {' | '}
        <div className='publish'>
          <SvgIcon iconName={Svgs.ARROW} />
          {renderAction('Published')}
        </div>
        {' | '}
        <div className='publish'>
          <SvgIcon iconName={Svgs.CALENDER} />
          {renderAction('Schedule Publish')}
        </div>
      </div>
    </div>
  );
};
