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

	const tasks = records.map(record => {
		return <Task key={record.id} record={record} />;
	})

    return <div>{tasks}</div>;
}

function Task({record}) {
	return (
		<div>
			{record.name || 'Unnamed record'}
		</div>
	);	
}

initializeBlock(() => <TasksBlock />);
