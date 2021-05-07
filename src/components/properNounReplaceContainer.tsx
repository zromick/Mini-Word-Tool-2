import React, { useState } from 'react';
import ProperNounReplace from './properNounReplace';
import { ospd, wikiContractions } from '../commonWords'; // Official Scrabble Player's Dictionary
import _ from 'lodash';
import { Word } from '../models';

const ProperNounReplaceContainer = () => {
	let [excludedWords, updateExcludedWords] = useState([] as Word[]);
	let [includedWords, updateIncludedWords] = useState([] as Word[]);
	let [allWordsRaw, updateAllWordsRaw] = useState([] as string[]);
	let [autoExcludeOSPD, setAutoExcludeOSPD] = useState(false);
	// Paste text and sort words into "Excluded" or "Included"
	let [copied, setCopied] = useState(false);
	const sortWords = () => {
		let excludedWordsTemp: Word[] = [];
		let includedWordsTemp: Word[] = [];
		const userTextArea = document.getElementById("userTextArea") as HTMLTextAreaElement;
		// Default exlusions include English Scrabble words and English contractions.
		let defaultExcludedWords = ospd().concat(wikiContractions().map(contraction => contraction.toUpperCase()));
		if (userTextArea) {
			// Split all user text into an array when hitting white space, line breaks, and dashes.
			// Filter out blank strings.
			// Split on this if you want dashes out: (/\s+|-). Example: tip-top becomes tip and top
			allWordsRaw = userTextArea.value.split(/\s+/).filter(i => i);
			allWordsRaw.map((word, wordIndex) => {
				// Rename keys to uppercase and without punctuation (except apostrophes)
				let key = word.replace(/[^\w\s']/g, "").toUpperCase();
				// If the cleaned word is in the Scrabble Dictionary, exclude
				// Removed functionality for now: If the uncleaned word contains a number, exclude (|| /\d/.test(word))
				if (defaultExcludedWords.indexOf(key) !== -1 && autoExcludeOSPD) {
					// If the word is a new excluded word, push it.
					let excludedWordIndex = (excludedWordsTemp.map(word => Object.keys(word)[0])).indexOf(key);
					if (excludedWordIndex === -1) {
						// console.log(excludedWordsTemp, excludedWordIndex, key, wordIndex);
						excludedWordsTemp.push({ [key]: { 'default': [wordIndex] } })
					}
					// Else give the existing key more context.
					else {
						// console.log(excludedWordsTemp, excludedWordIndex, key, wordIndex);
						excludedWordsTemp[excludedWordIndex][key]['default'].push(wordIndex);
					}
				} else {
					// If the word is a new included word, push it.
					let includedWordIndex = (includedWordsTemp.map(word => Object.keys(word)[0])).indexOf(key);
					if (includedWordIndex === -1) {
						includedWordsTemp.push({ [key]: { 'default': [wordIndex] } })
					}
					// Else, give the existing key more context.
					else {
						includedWordsTemp[includedWordIndex][key]['default'].push(wordIndex);
					}
				}
				return null;
			});
			updateExcludedWords([...excludedWordsTemp]);
			updateIncludedWords([...includedWordsTemp]);
			updateAllWordsRaw([...allWordsRaw]);
		}
	}

	const addReplacementWord = (key: string, replacementWord: string, wordIndeces: number[]) => {
		let includedWordsTemp = includedWords;
		let includedWordIndex = (includedWordsTemp.map(word => Object.keys(word)[0])).indexOf(key);
		includedWordsTemp[includedWordIndex][key]['default'] = [];
		includedWordsTemp[includedWordIndex][key][replacementWord] = wordIndeces;
		// console.log(`add`, includedWordsTemp, includedWordIndex, key, replacementWord, wordIndeces);
		updateIncludedWords([...includedWordsTemp]);
	}

	const updateReplacementWord = (key: string, oldReplacement: string, newReplacement: string) => {
		let includedWordsTemp = includedWords;
		let includedWordIndex = (includedWordsTemp.map(word => Object.keys(word)[0])).indexOf(key);
		let replacementField = includedWordsTemp[includedWordIndex][key];
		delete Object.assign(replacementField, { [newReplacement]: replacementField[oldReplacement] })[oldReplacement];
		updateIncludedWords([...includedWordsTemp]);
		// console.log(`update`, includedWordsTemp, includedWordIndex, key, oldReplacement, newReplacement);
	}

	const toggleHideSection = (id: string) => {
		const gottenElement = document.getElementById(id);
		if (gottenElement) {
			let display = gottenElement.style.display;
			(display === "" || display === "block")
				? gottenElement.style.display = "none"
				: gottenElement.style.display = "block";
		}
	}

	const handleImport = () => {
		// Todo
	}

	const sortByFrequency = () => {
		// Todo
	}

	const sortAlphabetically = () => {
		// Todo
	}

	const handleExport = () => {
		// Todo
	}

	// Sent into the handleWordListChange prop for wordsWithContext
	const handleIncludeWord = (word: Word) => {
		includedWords.push(word);
		_.pull(excludedWords, word);
		updateExcludedWords([...excludedWords]);
		updateIncludedWords([...includedWords]);
	}

	// Sent into the handleWordListChange prop for wordsWithContext
	const handleExcludeWord = (word: Word) => {
		excludedWords.push(word);
		_.pull(includedWords, word);
		updateExcludedWords([...excludedWords]);
		updateIncludedWords([...includedWords]);
	}

	const replaceAllIncludedWords = () => {
		// For each included word
		// For each replacement word
		// Go to the location in allIncludedWords and update the word
		// Finally, build a string with All Included Words

		let allWordsTemp = [...allWordsRaw];
		includedWords.map((word) => {
			Object.values(word).map((replacementValues, replacementWordIndex) => {
				// console.log(`replacementLocations, replacementWordIndex`, replacementValues, replacementWordIndex)
				let replacementValuesList = Object.keys(replacementValues);
				Object.values(replacementValues).map((replacementLocations, replacementValueIndex) => {
					replacementLocations.map((location) => {
						if (replacementValuesList[replacementValueIndex] !== 'default') {
							allWordsTemp[location] = replacementValuesList[replacementValueIndex];
						}
						return null;
					});
					return null;
				});
				return null;
			})
			return null;
		});

		const finalTextArea = document.getElementById('finalTextArea') as HTMLTextAreaElement;
		finalTextArea.value = _.join(allWordsTemp, ' ');
	}

	return (
		<ProperNounReplace
			toggleHideSection={toggleHideSection}
			sortWords={sortWords}
			sortByFrequency={sortByFrequency}
			sortAlphabetically={sortAlphabetically}
			handleImport={handleImport}
			handleExport={handleExport}
			handleIncludeWord={handleIncludeWord}
			handleExcludeWord={handleExcludeWord}
			replaceAllIncludedWords={replaceAllIncludedWords}
			addReplacementWord={addReplacementWord}
			updateReplacementWord={updateReplacementWord}
			setCopied={setCopied}
			setAutoExcludeOSPD={setAutoExcludeOSPD}
			excludedWords={excludedWords}
			includedWords={includedWords}
			allWordsRaw={allWordsRaw}
			copied={copied}
			autoExcludeOSPD={autoExcludeOSPD}
		/>
	);
}

export default ProperNounReplaceContainer;