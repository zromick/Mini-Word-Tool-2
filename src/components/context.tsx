import React from 'react';
import { Typography } from '@material-ui/core';
import _ from 'lodash';
import { Input } from '@material-ui/core';

export interface ContextProps {
  wordCleaned: string,
  replacementWord: string | null,
  contextIndeces: number[],
  allWordsRaw: string[],
  updateReplacementWord: (key: string, oldReplacement: string, newReplacement: string) => any,
}

const CONTEXT_BOUNDS_LENGTH = 3; // Grab this many words from the left and right

// Create a context string for each appearance of the word in the text
const Context = (props: ContextProps) => {
  const {
    wordCleaned,
    replacementWord,
    contextIndeces,
    allWordsRaw,
    updateReplacementWord,
  } = props;
  let contextList: any[] = [];
  let contextBuildingArrayFirstHalf: string[] = [];
  let contextBuildingArraySecondHalf: string[] = [];
  if (contextIndeces.length > 0) {
    contextIndeces.map((indexThatWordAppears: number, mappingIndex: number) => {
      for (let i = 1; i <= CONTEXT_BOUNDS_LENGTH; i++) {
        if (typeof (allWordsRaw[indexThatWordAppears - i]) !== "undefined") {
          contextBuildingArrayFirstHalf.unshift(allWordsRaw[indexThatWordAppears - i]);
        }
        if (typeof (allWordsRaw[indexThatWordAppears + i]) !== "undefined") {
          contextBuildingArraySecondHalf.push(allWordsRaw[indexThatWordAppears + i]);
        }
      }
      contextList.push(
        <Typography key={'key' + indexThatWordAppears} style={{ wordBreak: 'break-all' }}>
          {`${mappingIndex + 1}. `}{_.join(contextBuildingArrayFirstHalf, ' ')}
          {replacementWord === null
            ? <b>{` ${allWordsRaw[indexThatWordAppears]} `}</b>
            : <div><b>{`${allWordsRaw[indexThatWordAppears]} -> `}</b>
              <Input
                color="primary"
                defaultValue={replacementWord}
                onChange={(event) => updateReplacementWord(wordCleaned, replacementWord, event.target.value)}
              />
            </div>
          }
          {_.join(contextBuildingArraySecondHalf, ' ')}
        </Typography>
      );
      contextBuildingArrayFirstHalf = [];
      contextBuildingArraySecondHalf = [];
      return null;
    });
  }
  return (
    <div>
      {contextList}
    </div>
  );
}

export default Context;