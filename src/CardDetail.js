import React from "react";
import Link from 'next/link'
import { Button, Container, Typography, Card, CardMedia, CardActions } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    detail: {
      marginTop: theme.spacing(4),
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
  }));

export default function CardDetail({ data }) {
    const classes = useStyles();
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {data.attraction.name}
        </Typography>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={data.attraction.coverimage}
            title={data.attraction.name}
          />
        </Card>
        <div className={classes.detail}>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {data.attraction.detail}
          </Typography>
        </div>
        <CardActions>
          <Link href={`/`}>
              <Button size="small">Go Back</Button>
          </Link>
        </CardActions>
      </Container>
    </div>
  );
}
