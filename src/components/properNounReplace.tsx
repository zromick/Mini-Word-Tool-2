import React, { Dispatch, SetStateAction } from 'react';
import { Grid } from '@material-ui/core';
import { Word } from '../models';
import TitleBody from './titleBody';
import PasteTextBody from './pasteTextBody';
import WordManagerBody from './wordManagerBody';
import GenerateNewTextBody from './generateNewTextBody';
// import ImportExportBody from './importExportBody';

export interface ProperNounReplaceProps {
	toggleHideSection: (id: string) => any,
	sortWords: () => any,
	sortByFrequency: () => any,
	sortAlphabetically: () => any,
	handleImport: () => any,
	handleExport: () => any,
	handleIncludeWord: (word: Word) => any,
	handleExcludeWord: (word: Word) => any,
	replaceAllIncludedWords: () => any,
	addReplacementWord: (key: string, replacementWord: string, wordIndeces: number[]) => any,
	updateReplacementWord: (key: string, oldReplacement: string, newReplacement: string) => any,
	setCopied: Dispatch<SetStateAction<boolean>>,
	excludedWords: Word[],
	includedWords: Word[],
	allWordsRaw: string[];
	copied: boolean,
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
		excludedWords,
		includedWords,
		allWordsRaw,
		copied,
	} = props;

	return (
		<Grid container justify="center">
			<TitleBody />
			<PasteTextBody
				toggleHideSection={toggleHideSection}
				sortWords={sortWords}
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