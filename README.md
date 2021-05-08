## Mini Word Tool 2

Main goal: To create a tool that masks the identities of real people or places in a given text without continuous find and replace.

Other useful features:
* Check word count easily.
* Visualize word frequency by providing every context in which a word appears throughout a text.
* Identify and change redundant vocabulary.
* Compare text to the Official Scrabble Players Dictionary. The OSPD is useful because it isolates most proper nouns and spelling errors. (See example below)

## Workflow Example 
### Mask Identities in a Published Article

#### 1. Add Input Text:

    "It's the best way to treat infections,” said Gerald Jang, associate professor in the Department of Biochemistry and Biophysics at Winthrup University.
    Jang works with Dr. Corbella, one of the principal investigators in the research study.

#### 2. Check the box next to "Automatically Ignore Words in the Official Scrabble Player's Dictionary."

#### 3. Click the "+" icon next to each word to create a replacement word.

Word Count - 36 total word(s). 30 unique word(s).

Ignoring: 25 unique word(s)

Replacing: 5 unique word(s)

```
GERALD...(1)

1. treat infections,” said
Gerald -> 
Henry
Jang, associate professor

JANG...(2)

1. infections,” said Gerald
Jang, -> 
Saltzman
associate professor in

2. at Winthrup University.
Jang -> 
Saltzman
works with Dr.

WINTHRUP...(1)

1. and Biophysics at
Winthrup -> 
Davis
University. Jang works

DR...(1)

1. Jang works with Dr. Corbella, one of

CORBELLA...(1)

1. works with Dr.
Corbella, -> 
Zimmerman,
one of the

```


#### 4. Click "Replace Words in Text" to generate output text.

Output Text: 

    "It's the best way to treat infections,” said Henry Saltzman associate professor in the Department of Biochemistry and Biophysics at Davis University.
    Saltzman works with Dr. Zimmerman, one of the principal investigators in the research study.
