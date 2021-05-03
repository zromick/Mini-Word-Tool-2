import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styles from '../styles.module.scss';
import WordsWithContext from './wordsWithContext';
import { Word } from '../models';

export interface WordManagerBodyProps {
  toggleHideSection: (id: string) => any,
  handleIncludeWord: (word: Word) => any,
  handleExcludeWord: (word: Word) => any,
  addReplacementWord: (key: string, replacementWord: string, wordIndeces: number[]) => any,
  updateReplacementWord: (key: string, oldReplacement: string, newReplacement: string) => any,
  excludedWords: Word[],
  includedWords: Word[],
  allWordsRaw: string[],
}

const WordManagerBody = (props: WordManagerBodyProps) => {
  const {
    toggleHideSection,
    handleExcludeWord,
    handleIncludeWord,
    addReplacementWord,
    updateReplacementWord,
    excludedWords,
    includedWords,
    allWordsRaw,
  } = props;
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <div className={styles.basicMargin}>
          <Typography variant="h5" onClick={() => toggleHideSection('wordManagerBody')}>
            Step 2: Manage Your Words
						</Typography>
        </div>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <div id='wordManagerBody' className={styles.wordManager}>
          <Typography variant="body1" id='wordCountTitle'>Word Count</Typography>
          <Typography variant="body1" id='excludedWordsTitle' onClick={() => toggleHideSection('excludedWordsBody')}>Words Excluded From Replacement</Typography>
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
          <Typography variant="body1" id='includedWordsTitle' onClick={() => toggleHideSection('includedWordsBody')}>
            Words Included in Replacement
					</Typography>
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
    </Grid>
  );
}

export default WordManagerBody;

