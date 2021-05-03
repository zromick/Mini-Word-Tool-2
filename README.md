## Mini Word Tool 2

This application was created to help writers identify and replace multiple proper nouns at once.
Users can keep track of their changes by exporting/importing words and their replacements.

The basic flow is as such:
* Paste the input text.
* Choose whether to include or exclude words in the replacement.
* Write replacement words for each included word.
* Replace the entire text with replacement words.

#### Example

Input Text:
```
Jeremiah's friend, Sarah, greeted Muhammad and asked him about the milk.
Julia suspected the milk belonged to Muhammad.
The milk was Muhammad's.
```

Resulting Word Count:
```
Jeremiah's (1). Replace with: Charles'
Sarah (1). Replace with: Julia
Sarah, (1). Replace with: Julia,
Muhammad. (1). Replace with: T. K.
Muhammad's. (1)s. Replace with: T. K.'s.
```

Output Text: 
```
Charles's friend, Julia, greeted T. K. and asked him about the milk.
She suspected the milk belonged to T. K.
The milk was T. K.'s.
```
