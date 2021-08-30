import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDownRounded';
import styles from '../styles.module.scss';
import WordsWithContext from './wordsWithContext';
import { Word } from '../models';

export interface ManageWordsBodyProps {
  toggleHideSection: (id: string) => void,
  handleIncludeWord: (word: Word) => void,
  handleExcludeWord: (word: Word) => void,
  addReplacementWord: (key: string, replacementWord: string, wordIndeces: number[]) => void,
  updateReplacementWord: (key: string, oldReplacement: string, newReplacement: string) => void,
  excludedWords: Word[],
  includedWords: Word[],
  allWordsRaw: string[],
}

const ManageWordsBody = (props: ManageWordsBodyProps) => {
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
          <Grid container item xs={12}>
            <Typography variant="h5" onClick={() => toggleHideSection('ManageWordsBody')}>
              Step 2: Manage Your Words
            </Typography>
            <ArrowDropDown onClick={() => toggleHideSection('ManageWordsBody')} />
          </Grid>
        </div>
      </Grid>
      {allWordsRaw.length > 0
        ? <Grid item container justify="center" xs={12}>
          <div id='ManageWordsBody' className={styles.manageWords}>
            <Typography
              variant="body1"
              id='wordCountTitle'
            >
              Word Count - {allWordsRaw.length} total word(s). {excludedWords.length + includedWords.length} unique word(s).
            </Typography>
            <Grid container item xs={12}>
              <Typography
                style={{ fontWeight: 600 }}
                onClick={() => toggleHideSection('excludedWordsBody')}
              >
                {`Ignoring...`}
              </Typography>
              <Typography
                variant="body1"
                onClick={() => toggleHideSection('excludedWordsBody')}
              >
                {`\t ${excludedWords.length} unique word(s)`}
              </Typography>
              <ArrowDropDown onClick={() => toggleHideSection('excludedWordsBody')} />
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
                onClick={() => toggleHideSection('includedWordsBody')}
              >
                {`Replacing...`}
              </Typography>
              <Typography
                variant="body1"
                onClick={() => toggleHideSection('includedWordsBody')}
              >
                {includedWords.length} unique word(s)
              </Typography>
              <ArrowDropDown onClick={() => toggleHideSection('includedWordsBody')} />
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
        : <></>
      }
    </Grid>
  );
}

export default ManageWordsBody;

