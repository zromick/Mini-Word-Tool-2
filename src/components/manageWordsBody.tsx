import React, { Dispatch, SetStateAction } from 'react';
import { Grid, Typography, IconButton, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import styles from '../styles.module.scss';
import WordsWithContext from './wordsWithContext';
import { Add } from '@material-ui/icons';
import { Word } from '../models';

export interface ManageWordsBodyProps {
  handleIncludeWord: (word: Word) => void,
  handleExcludeWord: (word: Word) => void,
  addReplacementWord: (key: string, replacementWord: string, wordIndeces: number[]) => void,
  updateReplacementWord: (key: string, oldReplacement: string, newReplacement: string) => void,
  setTransferToReplacing: Dispatch<SetStateAction<boolean>>,
  setTransferToIgnoring: Dispatch<SetStateAction<boolean>>,
  excludedWords: Word[],
  includedWords: Word[],
  allWordsRaw: string[],
  transferToReplacing: boolean,
  transferToIgnoring: boolean,
}

const ManageWordsBody = (props: ManageWordsBodyProps) => {
  const {
    handleExcludeWord,
    handleIncludeWord,
    addReplacementWord,
    updateReplacementWord,
    setTransferToReplacing,
    setTransferToIgnoring,
    excludedWords,
    includedWords,
    allWordsRaw,
    transferToReplacing,
    transferToIgnoring,
  } = props;
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <div className={styles.basicMargin}>
          <Grid container item xs={12}>
            <Typography variant="h5">
              Manage Words
            </Typography>
          </Grid>
        </div>
      </Grid>
      {allWordsRaw.length > 0
        ? <Grid item container justify="center" xs={12}>
          <Grid item xs={12}>
            <div className={styles.introSpacing}>
              <Typography variant="body1" >
                {`Below, you can choose which words within your text to replace.`}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.introSpacing}>
              <Typography variant="body1" >
                {`If a word is in the "Replacing" list, a blue plus sign`}
                {<IconButton color="primary"><Add /></IconButton>}
                {`will appear next to it.`}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.introSpacing}>
              <Typography variant="body1" >
                {`Click the blue plus sign to add a replacement for all instances of that word. The default is "replacement".`}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.introSpacing}>
              <Typography variant="body1" >
                The "Ignoring" list will not replace any words in the final step.
              </Typography>
            </div>
          </Grid>
          <div id='ManageWordsBody' className={styles.manageWords}>
            <Grid container item xs={12}>
              <Typography
                style={{ fontWeight: 600 }}
              >
                {`Ignoring`}
              </Typography>
              {/* <Typography
                variant="body1"
                onClick={() => toggleHideSection('excludedWordsBody')}
              >
                {`\t ${excludedWords.length} unique word(s)`}
              </Typography> */}
            </Grid>
            <div id='excludedWordsBody'>
              <WordsWithContext
                words={excludedWords}
                wordsAreExcluded={true}
                allWordsRaw={allWordsRaw}
                handleWordListChange={handleIncludeWord}
                addReplacementWord={addReplacementWord}
                updateReplacementWord={updateReplacementWord}
              />
            </div>
            <Grid container item xs={12}>
              <Typography
                style={{ fontWeight: 600 }}
              >
                {`Replacing`}
              </Typography>
              {/* <Typography
                variant="body1"
                onClick={() => toggleHideSection('includedWordsBody')}
              >
                {includedWords.length} unique word(s)
              </Typography> */}
            </Grid>
            <div id='includedWordsBody'>
              <WordsWithContext
                words={includedWords}
                wordsAreExcluded={false}
                allWordsRaw={allWordsRaw}
                handleWordListChange={handleExcludeWord}
                addReplacementWord={addReplacementWord}
                updateReplacementWord={updateReplacementWord}
              />
            </div>
          </div>
        </Grid>
        : <Typography>No words to manage. Please return to the previous screen and add input text.</Typography>
      }
      <Snackbar
        open={transferToReplacing}
        autoHideDuration={10000}
        onClose={() => setTransferToReplacing(false)}
      >
        <Alert severity="success">
          That word is now in the "Replacing" list.
        </Alert>
      </Snackbar>
      <Snackbar
        open={transferToIgnoring}
        autoHideDuration={10000}
        onClose={() => setTransferToIgnoring(false)}
        message={`The word is now in the "Ignoring" list.`}
      >
        <Alert severity="success">
          That word is now in the "Ignoring" list.
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default ManageWordsBody;

