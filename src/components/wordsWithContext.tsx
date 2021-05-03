import React from 'react';
import { Grid, Tooltip, Button, IconButton, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Word } from '../models';
import Context from './context';
import styles from '../styles.module.scss';

export interface WordsWithContextProps {
  words: Word[],
  wordsAreExcluded: boolean,
  allWordsRaw: string[],
  handleWordListChange: (word: Word) => any,
  addReplacementWord: (key: string, replacementWord: string, wordIndeces: number[]) => any,
  updateReplacementWord: (key: string, oldReplacement: string, newReplacement: string) => any,
}

const WordsWithContext = (props: WordsWithContextProps) => {
  const {
    words,
    wordsAreExcluded,
    handleWordListChange,
    addReplacementWord,
    updateReplacementWord,
    allWordsRaw,
  } = props;
  let wordList: any[] = [];

  words.map((word, wordIndex) => {
    let maxWordLength = 12;
    let maxButtonWordLength = 7;
    let wordCleaned: string = Object.keys(word)[0];
    let wordCount: number = 0;

    // Get wordCount
    Object.values(word[wordCleaned]).map(contextIndeces => wordCount += contextIndeces.length);

    // Replace the word with its appropriate replacement
    Object.values(word[wordCleaned])
      .map((contextIndeces, replacementIndex) => {
        if (contextIndeces.length > 0) {
          wordList.push(
            <Grid container key={`Key${word}${wordIndex}`} className={styles.wordMargin}>
              {/* THE WORD AND ITS COUNT */}
              <Grid item xs={3}>
                {wordCleaned.length > maxWordLength
                  ? <Tooltip title={wordCleaned}>
                    <Typography>
                      {`${wordCleaned.substr(0, maxWordLength)}...(${wordCount})`}
                    </Typography>
                  </Tooltip>
                  : <Typography>{`${wordCleaned}...(${wordCount})`}</Typography>
                }
                {wordsAreExcluded
                  ? <></>
                  : <Tooltip title="Add a replacement word">
                    <IconButton
                      onClick={() => addReplacementWord(wordCleaned, 'replacement', Object.values(word[wordCleaned])[replacementIndex])}
                      color="primary">
                      <Add />
                    </IconButton>
                  </Tooltip>
                }
              </Grid>
              {/* CONTEXT STRINGS */}
              <Grid item xs={5}>
                <Context
                  wordCleaned={wordCleaned}
                  replacementWord={replacementIndex === 0 ? null : Object.keys(word[wordCleaned])[replacementIndex]}
                  contextIndeces={contextIndeces}
                  allWordsRaw={allWordsRaw}
                  updateReplacementWord={updateReplacementWord}
                />
              </Grid>
              <Grid item xs={1}></Grid>
              {/* INCLUDE/EXCLUDE BUTTON */}
              <Grid item xs={3}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleWordListChange(word)}
                >
                  {wordsAreExcluded
                    ? `Include '${wordCleaned.length > maxButtonWordLength
                      ? wordCleaned.substr(0, maxButtonWordLength) + '...'
                      : wordCleaned}'`
                    : `Exclude '${wordCleaned.length > maxButtonWordLength
                      ? wordCleaned.substr(0, maxButtonWordLength) + '...'
                      : wordCleaned}'`
                  }
                </Button>
              </Grid>
            </Grid >
          )
        }
        return null;
      });

    return null;
  });

  return (
    <div>
      {wordList}
    </div>
  )
}

export default WordsWithContext;