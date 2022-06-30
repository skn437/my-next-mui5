import { Box, Typography } from "@mui/material";
import StandardImageList from "@/components/ImageList";
import CustomizedAccordions from "@/components/Accordion";
import BasicModal from "@/components/Modal";

const Info = ({ doc }) => {
	return (
		<Box>
			<Typography 
        component="h2" 
        variant="h4"
      >
				{doc.name}
			</Typography>

			<StandardImageList></StandardImageList>

      <Box>
        <Typography 
          component="h4" 
          variant="h6"
        >
          About The Ticket
        </Typography>

        <Typography 
          component="p"
          variant="body1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis. Turpis nunc eget lorem dolor. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Arcu non odio euismod lacinia. Pharetra sit amet aliquam id diam maecenas ultricies. Et netus et malesuada fames ac turpis egestas integer eget. Congue quisque egestas diam in arcu cursus. Augue ut lectus arcu bibendum at varius vel pharetra vel. Turpis egestas pretium aenean pharetra magna. In dictum non consectetur a erat nam at. In egestas erat imperdiet sed euismod nisi. Sit amet justo donec enim diam vulputate ut pharetra. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Condimentum mattis pellentesque id nibh tortor id. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Ullamcorper a lacus vestibulum sed arcu non odio.
        </Typography>
      </Box>

      <Box>
        <Typography 
          component="h4" 
          variant="h6"
        >
          Frequently Asked Questions:
        </Typography>

        <CustomizedAccordions></CustomizedAccordions>
      </Box>

      <BasicModal></BasicModal>
		</Box>
	);
};

export default Info;
