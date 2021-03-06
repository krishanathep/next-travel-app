import React from "react";
import Link from 'next/link'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@material-ui/core";

export default function CardItem({at}) {
  return (
    <Box mt={2} mx={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={at.coverimage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {at.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {at.detail}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/${at.id}`}>
              <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
