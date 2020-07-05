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
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				fontSize: 18,
				padding: 12,
				borderBottom: '1px solid #ddd',
			}}
		>
			{record.name || 'Unnamed record'}
			<TextButton
				icon="expand"
				aria-label="Expand record"
				variant="dark"
				onClick={() => {
					expandRecord(record);
				}}
			/>
		</div>
	);	
}

initializeBlock(() => <TasksBlock />);
