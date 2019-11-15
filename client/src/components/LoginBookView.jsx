/* Renders the books to be shown on login page */

import React from 'react';
import axios from 'axios';
import { Typography, CircularProgress, Grid } from '@material-ui/core';
import LoginBookItem from './LoginBookItem.jsx';

class LoginBookView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [
        {
          author: "Daisy Meadows",
          availability: "borrow_available",
          buyLink: null,
          coverURL: "http://books.google.com/books/content?id=JYLrnQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
          createdAt: "2019-11-14T18:26:32.900Z",
          description: "The Fashion Fairies use their magic accessories to make sure that fashion everywhere is fun and fresh.But when jealous Jack Frost steals their magic away, it could lead to a fashion flop! Luckily, Rachel and Kirsty are ready to dive into another fairy adventure ...The girls have to find Brooke the Photographer Fairy's magic camera. Without it, every photo taken at the local fashion show will be one big blur!",
          genre: "fantasy",
          id: 2,
          isbn: "148060318X",
          title: "Brooke the Photographer Fairy",
          updatedAt: "2019-11-14T18:26:32.900Z",
          urlSnippet: "brookephotograph0000mead",
        },
        {
          author: "Eve Isherwood",
          availability: "error",
          buyLink: "https://play.google.com/store/books/details?id=f1NcCwAAQBAJ&rdid=book-f1NcCwAAQBAJ&rdot=1&source=gbs_api",
          coverURL: "http://books.google.com/books/content?id=f1NcCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          createdAt: "2019-11-14T18:26:37.099Z",
          description: "Helen Powers was once a scene of crimes officer for the West Midlands Police. It's four years since the case, involving the death of a young teenage girl, shattered her career. In an attempt to rebuild her life, she now works as a portrait photographer. But the past is not so easily left behind... After a series of inexplicable and vicious attacks on her, Helen fears that someone is out to take revenge. For Helen, however, it's only the start of something more personal and sinister. Desperate to confront her demons and redeem herself in the face of a formidable adversary, Helen swiftly finds that neither time nor the elements are on her side...",
          genre: "thriller",
          id: 3,
          isbn: "9781681467238",
          title: "Absent Light",
          updatedAt: "2019-11-14T18:26:37.099Z",
          urlSnippet: "absentlight00ishe",
        },
        {
          author: "Robert Graves",
          availability: "borrow_available",
          buyLink: null,
          coverURL: "http://books.google.com/books/content?id=O3Z5swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
          createdAt: "2019-11-14T18:26:41.090Z",
          description: "FANS OF MAURICE SENDAK’S CALDECOTT MEDAL-WINNING WHERE THE WILD THINGS ARE WILL LOVE THE BIG GREEN BOOK—NOW BACK IN PRINT! A little boy named Jack discovers a big green book of magic in the attic and learns all sorts of spells—spells to change the look of things, spells to make him old and gray or disappear entirely! Jack makes the most of his new magic powers, and his poor old aunt and uncle are quite bewildered. This enchanting tale by noted British author Robert Graves is masterfully illustrated by Maurice Sendak, seven-time Caldecott Honor recipient, National Book Award winner, and the Caldecott Medal-winning creator of Where the Wild Things Are.",
          genre: "fantasy",
          id: 4,
          isbn: "0062644831",
          title: "The Big Green Book",
          updatedAt: "2019-11-14T18:26:41.090Z",
          urlSnippet: "biggreenbook00grav",
        },
        {
          author: "Jane Yolen",
          availability: "error",
          buyLink: "https://play.google.com/store/books/details?id=xdiVCwAAQBAJ&rdid=book-xdiVCwAAQBAJ&rdot=1&source=gbs_api",
          coverURL: "http://books.google.com/books/content?id=xdiVCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          createdAt: "2019-11-14T18:26:43.860Z",
          description: "Internal jealousy, obstinacy, and treachery threaten the royal house of a great queen and the future of her matriarchal land in the concluding volume of the acclaimed Great Alta high fantasy series Decades have passed since White Jenna fulfilled the ancient prophecy, becoming queen of the Dales after defeating the king of Garun and driving the cruel occupiers back to their homeland. Since then, a fragile peace has been maintained through an exchange of royal hostages. Jenna’s eldest son, Jemson, travels across the ocean to live with the enemy while the queen, in the way of the Dales, prepares her adopted daughter, Scillia, to eventually rule. A frail, one-armed child discovered abandoned on the battlefield, Scillia is thirteen now. She is confused and conflicted, resentful of her mother’s teachings and the pressures of ascendance. But even more troubling is her brother’s resentment. Jemson was corrupted in his thinking by his time among the patriarchal Garunians and is now determined to rule. The dangerous storms brewing in the royal house of Queen Jenna and the dying King Carum could have devastating consequences for all the people of the Dales: A powerful enemy over the waters is watching for any sign of weakness and instability, eager to reignite the terrible fires of the Gender Wars. Multiple award-winning fantasist Jane Yolen brings her acclaimed saga to a breathtaking conclusion with The One-Armed Queen, ingeniously blending story, myth, poetry, and song to create a truly unforgettable culture and fantasy world.",
          genre: "fantasy",
          id: 5,
          isbn: "9781504034531",
          title: "The One-Armed Queen",
          updatedAt: "2019-11-14T18:26:43.860Z",
          urlSnippet: "onearmedqueen00yole",
        },
      ],
    };
    // this.handleReadNow = this.handleReadNow.bind(this);
  }

  // handleReadNow(urlSnippet) {
  //   const { updateUrlSnippet } = this.props;
  //   updateUrlSnippet(urlSnippet);
  //   // recieves urlSnippet from item clicked on
  //   // can pass it to another parent function handler
  // }

  render() {
    const { bookList } = this.state;
    return (
      // map over the userbooklist and render each an bookListItem
      <div>
        {bookList === null ? (
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '40%',
              transform: 'translate(-50%, -40%)',
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <div>
            <Typography variant="button">What's trending among users</Typography>
            <Grid container spacing={2}>
              {Object.keys(bookList).map((book, i) => (
                <Grid key={i} item xs={12} sm={12} md={6}>
                  <LoginBookItem
                    book={bookList[book]}
                    key={book.isbn}
                    handleRemoveClick={this.handleRemoveClick}
                    handleReadNow={this.handleReadNow}
                    toggleChecked={this.toggleChecked}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

export default LoginBookView;