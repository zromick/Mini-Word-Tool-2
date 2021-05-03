import React, { Dispatch, SetStateAction } from 'react';
import { Grid, Typography, Button, TextareaAutosize, Snackbar } from '@material-ui/core';
import styles from '../styles.module.scss';

export interface GenerateNewTextBodyProps {
  toggleHideSection: (id: string) => any,
  replaceAllIncludedWords: () => any,
  setCopied: Dispatch<SetStateAction<boolean>>,
  copied: boolean,
}

const GenerateNewTextBody = (props: GenerateNewTextBodyProps) => {
  const {
    toggleHideSection,
    replaceAllIncludedWords,
    setCopied,
    copied,
  } = props;
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <div className={styles.basicMargin}>
          <Typography variant="h5" onClick={() => toggleHideSection('generateNewTextBody')}>
            Step 3: Generate New Text
						</Typography>
        </div>
      </Grid>
      <Grid item container justify="center" xs={12} id='generateNewTextBody'>
        <Grid item container justify="center" xs={12}>
          <Button
            className={styles.basicMargin}
            color="primary"
            variant="contained"
            onClick={() => replaceAllIncludedWords()}
          >
            Replace All Included Words
					</Button>
        </Grid>
        <Grid item container justify="center" xs={12}>
          <TextareaAutosize
            className={styles.basicMargin}
            placeholder={`The original text will be replaced here.`}
            id="finalTextArea"
            cols={80}
            rowsMin={8}
          />
        </Grid>
        <Grid item container justify="center" xs={12}>
          <Button
            className={styles.basicMargin}
            color="primary"
            variant="contained"
            onClick={() => {
              const finalTextArea = document.getElementById('finalTextArea') as HTMLTextAreaElement;;
              navigator.clipboard.writeText(finalTextArea.value);
              setCopied(true);
            }}
          >
            Copy New Text
						</Button>
          <Snackbar
            open={copied}
            autoHideDuration={10000}
            onClose={() => setCopied(false)}
            message="The new text has been copied!"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GenerateNewTextBody;