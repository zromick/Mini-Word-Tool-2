## Mini Word Tool 2

This application was created to help writers:
* Check word-count easily.
* Visualize word frequency by providing every context in which each word appears.
* Spice up vocabulary.
* Identify and fix spelling errors by comparing text with the Official Scrabble Players Dictionary.
* Identify and change proper nouns by comparing text with the Official Scrabble Players Dictionary.

The basic flow is as such:
* Write or paste input text.
* Choose whether to automatically ignore words in the Official Scrabble Players Dictionary.
* Click the "+" icon below a word to add a replacement for it.
* Click "replace words" to change the text.

#### Example:

Input Text:
```
Jeremiah's friend, Sarah, greeted Muhammad and asked him about the milk.
```

Words Included in Replacement:
```
JEREMIAH'S...(1)

1. Jeremiah's ->
Damian's
friend, Sarah, greeted

SARAH...(1)

1. Jeremiah's friend,
Sarah, -> 
Gina,
greeted Muhammad and

MUHAMMAD...(1)

1. friend, Sarah, greeted
Muhammad -> 
Max
and asked him
```

Output Text: 
```
Damian's friend, Gina, greeted Max and asked him about the milk.
```
