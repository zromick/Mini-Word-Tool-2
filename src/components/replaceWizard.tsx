import React, { Dispatch, SetStateAction } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Word } from '../models';
import Button from '@material-ui/core/Button';
import ReplaceWizardProgressBar from './replaceWizardProgressBar';
import ReplaceWizardSteps from './replaceWizardSteps';
import TitleBody from './titleBody';
import IntroductionBody from './introductionBody';
import InputTextBody from './inputTextBody';
import ManageWordsBody from './manageWordsBody';
import GenerateTextBody from './generateTextBody';
import styles from '../styles.module.scss';

export interface ReplaceWizardProps {
  sortWords: () => void,
  sortByFrequency: () => void,
  sortAlphabetically: () => void,
  handleImport: () => void,
  handleExport: () => void,
  handleIncludeWord: (word: Word) => void,
  handleExcludeWord: (word: Word) => void,
  replaceAllIncludedWords: () => void,
  addReplacementWord: (key: string, replacementWord: string, wordIndeces: number[]) => void,
  updateReplacementWord: (key: string, oldReplacement: string, newReplacement: string) => void,
  setCopied: Dispatch<SetStateAction<boolean>>,
  setTransferToReplacing: Dispatch<SetStateAction<boolean>>,
  setTransferToIgnoring: Dispatch<SetStateAction<boolean>>,
  setAutoExcludeOSPD: Dispatch<SetStateAction<boolean>>,
  handleNext: (step: ReplaceWizardSteps) => void;
  handlePrevious: (step: ReplaceWizardSteps) => void;
  handleCancel: () => void;
  nextDisabled: boolean;
  previousDisabled: boolean;
  currentStep: ReplaceWizardSteps;
  excludedWords: Word[],
  includedWords: Word[],
  allWordsRaw: string[];
  copied: boolean,
  transferToReplacing: boolean,
  transferToIgnoring: boolean,
  autoExcludeOSPD: boolean,
}

const ReplaceWizard = (props: ReplaceWizardProps) => {
  const {
    sortWords,
    // sortByFrequency,
    // sortAlphabetically,
    // handleImport,
    // handleExport,
    handleExcludeWord,
    handleIncludeWord,
    replaceAllIncludedWords,
    addReplacementWord,
    updateReplacementWord,
    setCopied,
    setTransferToReplacing,
    setTransferToIgnoring,
    setAutoExcludeOSPD,
    handleNext,
    handlePrevious,
    handleCancel,
    nextDisabled,
    previousDisabled,
    currentStep,
    excludedWords,
    includedWords,
    allWordsRaw,
    copied,
    transferToReplacing,
    transferToIgnoring,
    autoExcludeOSPD,
  } = props;
  return (
    <div>
      {/* <AppBar position="absolute" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar> */}

      <Grid className={styles.components} container spacing={3}>
        <Grid item xs={10}>
          <Paper elevation={2} className={styles.paper}>
            <TitleBody />
            <div className={styles.progressBar}>
              <ReplaceWizardProgressBar step={currentStep} />
            </div>
            {currentStep === ReplaceWizardSteps.INTRODUCTION && (
              <IntroductionBody />
            )}
            {currentStep === ReplaceWizardSteps.INPUT_TEXT && (
              <InputTextBody
                sortWords={sortWords}
                setAutoExcludeOSPD={setAutoExcludeOSPD}
                autoExcludeOSPD={autoExcludeOSPD}
              />
            )}
            {currentStep === ReplaceWizardSteps.MANAGE_WORDS && (
              <ManageWordsBody
                handleExcludeWord={handleExcludeWord}
                handleIncludeWord={handleIncludeWord}
                addReplacementWord={addReplacementWord}
                updateReplacementWord={updateReplacementWord}
                setTransferToReplacing={setTransferToReplacing}
                setTransferToIgnoring={setTransferToIgnoring}
                excludedWords={excludedWords}
                includedWords={includedWords}
                allWordsRaw={allWordsRaw}
                transferToReplacing={transferToReplacing}
                transferToIgnoring={transferToIgnoring}
              />
            )}
            {currentStep === ReplaceWizardSteps.GENERATE_TEXT && (
              <GenerateTextBody
                replaceAllIncludedWords={replaceAllIncludedWords}
                setCopied={setCopied}
                copied={copied}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <div className={styles.cancelButton}>
            <div>
              <Button
                onClick={() => handleCancel()}
                variant="outlined"
                color="primary"
              >
                Start Over
              </Button>
            </div>
            <div className={styles.buttonFlex}>
              <div className={styles.buttonMargin}>
                <Button
                  onClick={() => handlePrevious(currentStep)}
                  variant="contained"
                  color="primary"
                  disabled={previousDisabled}
                >
                  Previous
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => handleNext(currentStep)}
                  variant="contained"
                  color="primary"
                  disabled={nextDisabled}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReplaceWizard;
