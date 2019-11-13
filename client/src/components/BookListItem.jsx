/* A single book component from the BookListView.
* Renders a thumbnail image, the title, author, genre, short description, date added.
* buttons to remove from list, move to another list, and read now
*/
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
=======
import Button from '@material-ui/core/Button';
>>>>>>> ad95e759d2e623e25a5e5215b790831a83effc38
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function BookListItem(props) {
  const classes = useStyles();
  const { book, handleRemoveClick, handleReadNow } = props;
  const availabilityCheck = (book) => {
    switch (book.availability) {
      case "open": return <Link to="/readnow">Read Now</Link>;
      case "borrow_available": return <Link to="/readnow">Preview</Link>;
      default: return <p>Sorry, no preview available</p>;
    }
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <img className={classes.img} alt="complex" src={book.coverURL} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {book.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {book.author}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {book.genre}
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="primary" variant="body2" style={{ cursor: 'pointer' }} onClick={() => handleRemoveClick(book.isbn, false)}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </Typography>
                <Typography color="primary" variant="body2" style={{ cursor: 'pointer' }} onClick={() => handleReadNow(book.urlSnippet)}>
                  {/* {book.availability === "open" ? <Link to="/readnow">Read Now</Link> : null} */}
                  {availabilityCheck(book)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default BookListItem;
