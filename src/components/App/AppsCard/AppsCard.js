import React, { Fragment, useState } from "react";
import { Switch, Route, Link,NavLink, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width: 250,
  },
  paper: {
    height: 250,
    width: 250,
  },
});

const AppsCard = () => {
  const classes = useStyles();
  let { url } = useRouteMatch();
  
  return (
    <Fragment>
      <Grid item xl={12}>
        <Grid container justify="center" spacing={2}>
          <Grid
            style={{ color: "inherit", textDecoration: "inherit" }}
            item
            component={Link}
            to={`${url}/blog`}
          >
            <Card className={(classes.root, classes.paper)}>
              <CardActionArea className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="https://imsolutions.co.za/wp-content/uploads/2019/06/How-blogs-changed-the-world-1024x585.jpg"
                  title="Blog"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Blog
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Demo blog deploying python App to heroku
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            style={{ color: "inherit", textDecoration: "inherit" }}
            item
            component={Link}
            to={`${url}/toggle`}
          >
            <Card className={(classes.root, classes.paper)}>
              <CardActionArea className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="https://images.ctfassets.net/9lml4v34yheh/1HWJ3sea75tmjY5VjbhYdJ/faa9e7714db53ac4f054e2474d8c8158/material_react_logo.jpg?w=1024&h=576&q=50&fm=webp"
                  title="Toggle Person"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Toggle Person
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Small react POC demonstrating two ways binding in react
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            style={{ color: "inherit", textDecoration: "inherit" }}
            item
            component={Link}
            to={`${url}/burger`}
          >
            <Card className={(classes.root, classes.paper)}>
              <CardActionArea className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="https://www.creativefabrica.com/wp-content/uploads/2020/12/24/vector-cartoon-burger-logo-design-Graphics-7339722-1-1-580x387.jpg"
                  title="Burger App"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Burger App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Demo Burger App for ordering burger with login register
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default AppsCard;
