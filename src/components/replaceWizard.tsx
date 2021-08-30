import React, { Dispatch, SetStateAction } from 'react';
import { Grid } from '@material-ui/core';
import { Word } from '../models';
import Button from '@material-ui/core/Button';
import ReplaceWizardProgressBar from './replaceWizardProgressBar';
import styles from './replaceWizard.module.scss';
import ReplaceWizardSteps from './replaceWizardSteps';
import TitleBody from './titleBody';
import IntroductionBody from './introductionBody';
import InputTextBody from './inputTextBody';
import ManageWordsBody from './manageWordsBody';
import GenerateTextBody from './generateTextBody';

export interface ReplaceWizardProps {
  toggleHideSection: (id: string) => void,
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
  autoExcludeOSPD: boolean,
}

const ReplaceWizard = (props: ReplaceWizardProps) => {
  const {
    toggleHideSection,
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
    autoExcludeOSPD,
  } = props;
  return (
    <div>
      <TitleBody />
      <div className={styles.progressBar}>
        <ReplaceWizardProgressBar step={currentStep} />
      </div>
      <Grid className={styles.components} container spacing={3}>
        <Grid item xs={10}>
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
              toggleHideSection={toggleHideSection}
              handleExcludeWord={handleExcludeWord}
              handleIncludeWord={handleIncludeWord}
              addReplacementWord={addReplacementWord}
              updateReplacementWord={updateReplacementWord}
              excludedWords={excludedWords}
              includedWords={includedWords}
              allWordsRaw={allWordsRaw}
            />
          )}
          {currentStep === ReplaceWizardSteps.GENERATE_TEXT && (
            <GenerateTextBody
              replaceAllIncludedWords={replaceAllIncludedWords}
              setCopied={setCopied}
              copied={copied}
            />
          )}
        </Grid>
        <Grid item xs={10}>
          <div className={styles.cancelButton}>
            <div>
              <Button
                onClick={() => handleCancel()}
                variant="outlined"
                color="primary"
              >
                Cancel
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
