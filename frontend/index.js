import {
	initializeBlock,
	useBase,
	useRecords,
	expandRecord,
	TextButton,
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
			<TextButton
				icon="expand"
				aria-label="Expand record"
				onClick={() => {
					expandRecord(record);
				}}
			/>
		</div>
	);	
}

initializeBlock(() => <TasksBlock />);
