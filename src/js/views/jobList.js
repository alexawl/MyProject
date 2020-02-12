import React, { useState, useEffect } from "react";
import JobCard from "../component/jobCard";
import { ContainerFilter, ContainerList } from "../component/styles";

export const JobList = () => {
	const [search, setSearch] = useState();

	return (
		<div className="container">
			<div className="input-group mb-3">
				<input
					onChange={e => setSearch(e.target.value)}
					type="text"
					className="form-control"
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
				/>
				<div className="input-group-append">
					<button className="btn btn-outline-secondary" type="button" id="button-addon2">
						Button
					</button>
				</div>
			</div>
		</div>
	);
};
