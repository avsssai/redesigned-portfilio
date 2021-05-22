import React, { useState } from "react";
import { Container, TextField, Divider, Typography, Grid, Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useStyles from "./styles";
import "./styles.css";
import * as api from "../../api";

const Subscribe = () => {
	const classes = useStyles();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.firstName === "" || formData.lastName === "" || formData.email === "") {
			toast.info("Please enter all the fields.");
		} else {
			toast.info("Added to the mail list!");
			api.subscribe(formData);
		}
	};
	return (
		<div>
			<Container>
				<ToastContainer />
				<Grid container>
					<Grid item xs={12} md={6} className={classes.gridItem}>
						<Typography variant='h3' className={classes.contactHeader}>
							Subscribe to my mail list!
						</Typography>

						<div className={classes.contactBody}>
							<div className={classes.formHeader}></div>
						</div>
						<div>
							<form onSubmit={handleSubmit} className={classes.form}>
								<Divider orientation='horizontal' className={classes.divider} />
								<TextField
									variant='outlined'
									label='First Name'
									placeholder='Your first name'
									name='name'
									value={formData.firstName}
									fullWidth
									className={classes.input}
									onChange={(e) =>
										setFormData({
											...formData,
											firstName: e.target.value,
										})
									}
								/>
								<TextField
									variant='outlined'
									label='Last Name'
									placeholder='Your last name'
									name='lastName'
									value={formData.lastName}
									fullWidth
									className={classes.input}
									onChange={(e) =>
										setFormData({
											...formData,
											lastName: e.target.value,
										})
									}
								/>
								<TextField
									variant='outlined'
									label='Your Email'
									placeholder='Your email address'
									name='email'
									value={formData.email}
									fullWidth
									className={classes.input}
									onChange={(e) =>
										setFormData({
											...formData,
											email: e.target.value,
										})
									}
								/>
								<Button
									className={classes.submitButton}
									variant='contained'
									color='secondary'
									type='submit'>
									Subscribe
								</Button>
							</form>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Subscribe;
