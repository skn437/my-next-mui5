import { Grid, Paper } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "@/components/TourCard.module.scss";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Rating from "@mui/material/Rating";

const TourCard = ({ tour }) => {
	return (
		<Grid item xs={4}>
			<Paper elevation={12} id={styles.paper}>
				<Image
					src={tour.image}
					width={400}
					height={130}
				></Image>
				<Box id={styles.card}>
					<Typography variant="subtitle1" component="h2">
						{tour.name}
					</Typography>
				</Box>

				<Box id={styles.card2}>
					<QueryBuilderIcon id={styles.qbi2}></QueryBuilderIcon>
					<Typography variant="body2" component="h2" id={styles.tpg2}>
						{tour.duration} hours
					</Typography>
				</Box>
				<Box id={styles.box2}>
					<Rating
						name="half-rating-read"
						defaultValue={3.5}
						precision={0.5}
						readOnly
						size="small"
						id={styles.rating}
					/>
					<Typography
						component="p"
						variant="caption"
						className={styles.caption_one}
					>
						{tour.rating}
					</Typography>
					<Typography
						component="p"
						variant="caption"
						className={styles.caption_two}
					>
						({tour.numberOfReviews} reviews)
					</Typography>
				</Box>
				<Typography component="p" variant="h6" className={styles.caption_three}>
					From C ${tour.price}
				</Typography>
			</Paper>
		</Grid>
	);
};

export default TourCard;
