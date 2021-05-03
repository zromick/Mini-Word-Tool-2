## Mini Word Tool 2

This application was created to help writers identify and replace multiple proper nouns at once.
Users can keep track of their changes by exporting/importing words and their replacements.

The basic flow is as such:
* Paste the input text.
* Choose whether to include or exclude words in the replacement.
* Write replacement words for each included word.
* Replace the entire text with replacement words.

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
