import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";




const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.background.any
		}
	}
}))(TableRow);

const useStyles = makeStyles(theme => ({
	root: {
		width: "80%",
		marginTop: theme.spacing(3),
		overflowX: "auto"
	}
	
}));

class AllPhone extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	state = {
		items: [],

	};

	delete(item) {
		console.log("ici");
		console.log(item);

		axios.delete("http://localhost:8080/phone/deletePhone/" + item._id)
			.then(res => {
			console.log(res.data);
				this.componentDidMount();
			})
			.catch(error => {
				console.log(error);
			});
	}

	componentDidMount() {
		axios.get("http://localhost:8080/phone/allPhone")
		.then(res => {
			console.log(res);
			this.setState({ items: res.data });
		});
	}


	render() {
		const { classes } = this.props;


		return (
			<Paper className={classes.root}>
				
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Phone</StyledTableCell>
							<StyledTableCell>Type</StyledTableCell>
							<StyledTableCell>Price</StyledTableCell>
							<StyledTableCell>Rating</StyledTableCell>
							<StyledTableCell>Warranty</StyledTableCell>
							<StyledTableCell>Available</StyledTableCell>
							<StyledTableCell>Modifier</StyledTableCell>
							<StyledTableCell>Supprimer</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.items.map(item => (
							<StyledTableRow key={item.name}>
								<StyledTableCell component="th" scope="row">
									{item.name}
								</StyledTableCell>
								<StyledTableCell>{item.type}</StyledTableCell>
								<StyledTableCell>{item.price}</StyledTableCell>
								<StyledTableCell>{item.rating}</StyledTableCell>
								<StyledTableCell>{item.warranty_years}</StyledTableCell>
								<StyledTableCell>
									<Checkbox
										checked={item.available}
										color="Secondary"										
									/>
								</StyledTableCell>
								<StyledTableCell>
									<Button variant="contained" 
									//	key={item.id} onClick={this.props()}
									color="primary" className={classes.button}>
									Modifier
    									</Button>
								</StyledTableCell>
								<StyledTableCell>
									<Button
									 key={item.id} onClick={this.delete.bind(this, item)} 
									 variant="contained" color="secondary" className={classes.button}>
									 Delete
     									 </Button>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(useStyles)(AllPhone);