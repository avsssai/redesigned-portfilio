import React, { useState } from "react";
import { Container, TextField, Divider, Typography, Grid, Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import "./styles.css";
import { SEND_CONTACT_EMAIL } from "../../actionTypes";
import * as api from "../../api";

const Contact = () => {
	const classes = useStyles();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		content: "",
	});
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.name === "" || formData.email === "" || formData.content === "") {
			toast.info("Please enter all the fields.");
		} else {
			toast.info("Email sent!");
			api.sendEmail(formData);
		}
	};
	return (
		<div>
			<Container>
				<ToastContainer />
				<Grid container>
					<Grid item xs={12} md={6} className={classes.gridItem}>
						<Typography variant='h3' className={classes.contactHeader}>
							Contact
						</Typography>

						<div className={classes.contactBody}>
							<div className={classes.formHeader}>
								<Typography variant='body1'>
									Please reach me out through this fancy form I made.
								</Typography>
							</div>
						</div>
						<div>
							<form onSubmit={handleSubmit} className={classes.form}>
								<Typography variant='h4' color='secondary'>
									Reach me out
								</Typography>

								<Divider orientation='horizontal' className={classes.divider} />
								<TextField
									variant='outlined'
									label='Name'
									placeholder='Your name'
									name='name'
									value={formData.name}
									fullWidth
									className={classes.input}
									onChange={(e) =>
										setFormData({
											...formData,
											name: e.target.value,
										})
									}
								/>
								<TextField
									variant='outlined'
									label='Your Email'
									placeholder='Email'
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
								<TextField
									variant='outlined'
									label='Content'
									placeholder='Content'
									multiline={true}
									rowsMax={10}
									rows={10}
									name='content'
									value={formData.content}
									fullWidth
									className={classes.input}
									onChange={(e) =>
										setFormData({
											...formData,
											content: e.target.value,
										})
									}
								/>
								<Button
									className={classes.submitButton}
									variant='contained'
									color='secondary'
									type='submit'>
									Send
								</Button>
							</form>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Contact;
