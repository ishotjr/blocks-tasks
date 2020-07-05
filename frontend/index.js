import {
	initializeBlock,
	useBase,
	useRecords,
} from '@airtable/blocks/ui';
import React from 'react';

function TasksBlock() {
	const base = useBase();
	const table = base.getTableByName('Tasks');

	const records = useRecords(table);

    return <div>Tasks: {records.length}</div>;
}

initializeBlock(() => <TasksBlock />);
