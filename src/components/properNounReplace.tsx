import React, { Dispatch, SetStateAction } from 'react';
import { Grid } from '@material-ui/core';
import { Word } from '../models';
import TitleBody from './titleBody';
import IntroductionBody from './introductionBody';
import PasteTextBody from './pasteTextBody';
import WordManagerBody from './wordManagerBody';
import GenerateNewTextBody from './generateNewTextBody';
// import ImportExportBody from './importExportBody';

export interface ProperNounReplaceProps {
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
	excludedWords: Word[],
	includedWords: Word[],
	allWordsRaw: string[];
	copied: boolean,
	autoExcludeOSPD: boolean,
}

const ProperNounReplace = (props: ProperNounReplaceProps) => {
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
		excludedWords,
		includedWords,
		allWordsRaw,
		copied,
		autoExcludeOSPD,
	} = props;

	return (
		<Grid container justify="center">
			<TitleBody />
			<IntroductionBody
				toggleHideSection={toggleHideSection}
			/>
			<PasteTextBody
				toggleHideSection={toggleHideSection}
				sortWords={sortWords}
				setAutoExcludeOSPD={setAutoExcludeOSPD}
				autoExcludeOSPD={autoExcludeOSPD}
			/>
			<WordManagerBody
				toggleHideSection={toggleHideSection}
				handleExcludeWord={handleExcludeWord}
				handleIncludeWord={handleIncludeWord}
				addReplacementWord={addReplacementWord}
				updateReplacementWord={updateReplacementWord}
				excludedWords={excludedWords}
				includedWords={includedWords}
				allWordsRaw={allWordsRaw}
			/>
			<GenerateNewTextBody
				toggleHideSection={toggleHideSection}
				replaceAllIncludedWords={replaceAllIncludedWords}
				setCopied={setCopied}
				copied={copied}
			/>
			{/* <ImportExportBody
				toggleHideSection={toggleHideSection}
				handleExport={handleExport}
				handleImport={handleImport}
			/> */}
		</Grid>
	);
}

export default ProperNounReplace;