import {
	initializeBlock,
	useBase,
	useRecords,
	expandRecord,
	TablePicker,
	TextButton,
} from '@airtable/blocks/ui';
import React, {useState} from 'react';

function TasksBlock() {
	const base = useBase();

	const [tableId, setTableId] = useState(null);

	const table = base.getTableByIdIfExists(tableId);

	const records = useRecords(table);

	const tasks = records ? records.map(record => {
		return <Task key={record.id} record={record} />;
	}) : null;

    return (
		<div>
			<TablePicker
				table={table}
				onChange={newTable => {
					setTableId(newTable.id);
				}}
			/>
			{tasks}
		</div>
	);
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
