import React, { Dispatch, SetStateAction } from 'react';
import {
  Grid,
  TextareaAutosize,
  Typography,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDownRounded';
import styles from '../styles.module.scss';

export interface PasteTextBodyProps {
  toggleHideSection: (id: string) => void,
  sortWords: () => void,
  setAutoExcludeOSPD: Dispatch<SetStateAction<boolean>>,
  autoExcludeOSPD: boolean,
}

const PasteTextBody = (props: PasteTextBodyProps) => {
  const { toggleHideSection, sortWords, setAutoExcludeOSPD, autoExcludeOSPD } = props;
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <div className={styles.basicMargin}>
          <Grid container item xs={12}>
            <Typography variant="h5" onClick={() => toggleHideSection('pasteTextBody')}>
              Step 1: Begin Typing Here
            </Typography>
            <ArrowDropDown onClick={() => toggleHideSection('pasteTextBody')} />
          </Grid>
        </div>
      </Grid>
      <div id='pasteTextBody'>
        <Grid item container justify="center" xs={12}>
          <TextareaAutosize
            placeholder={`Paste or write a body of text here.\nClick the "+" icon under a word to create a replacement for it.\nLarger bodies of text may slow down the app.`}
            id="userTextArea"
            cols={80}
            rowsMin={8}
            onChange={() => sortWords()}
          />
        </Grid>
        <Grid item container justify="center" xs={12}>
          <div className={styles.basicMargin}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={autoExcludeOSPD}
                  onChange={(event) => setAutoExcludeOSPD(event.target.checked)}
                  color="primary"
                />
              }
              label="Automatically Ignore Words in the Official Scrabble Players Dictionary"
            />
          </div>
        </Grid>
      </div>
    </Grid>
  );
}

export default PasteTextBody;