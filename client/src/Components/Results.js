import * as React from "react";
import "../Form.css";

export default function Results({ data, header, onDelete }) {
	return (
		<>
			<div>
				<table class="table" header={header} data={data} />
			</div>
			<table id="users">
				<tr>
					{header.map((elem, i) => {
						return <th key={i}>{elem}</th>;
					})}
				</tr>{" "}
				{data.map((elem, i) => {
					return (
						<tr key={i}>
							<td className="id" id="row">
								{elem.id}
							</td>

							<td className="name" id="row">
								{elem.name}
							</td>

							<td className="hobby" id="row">
								{elem.hobby}
							</td>
							<button className="btn" onClick={() => onDelete(elem)}>
								Delete
							</button>
						</tr>
					);
				})}
			</table>
		</>
	);
}
