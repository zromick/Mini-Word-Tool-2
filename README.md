## Mini Word Tool 2

Hi! Welcome to a passion project of mine. This app is built using TypeScript, React, and Material-UI and is hosted on GitHub Pages.

This app allows for global, one-time replacement of words within a body of text.

Other useful features:
* Visualize word frequency by providing every context in which a word appears throughout a text.
* Identify and change redundant vocabulary.
* Isolates proper nouns and spelling errors. (See example below)

## Workflow Example: Mask Identities in a Published Article

#### 1. Add Input Text:

    "It's the best way to treat infections,” said Gerald Jang, associate professor in the Department of Biochemistry and Biophysics at Winthrup University.
    Jang works with Dr. Corbella, one of the principal investigators in the research study.

#### 2. Check the box next to "Automatically Ignore Words in the Official Scrabble Player's Dictionary."

#### 3. Click the "+" icon next to each word to create a replacement word.

**Replacing**

```
GERALD...(1)

1. treat infections,” said
Gerald → Henry
Jang, associate professor

JANG...(2)

1. infections,” said Gerald
Jang, → Saltzman,
associate professor in

2. at Winthrup University.
Jang → Saltzman
works with Dr.

WINTHRUP...(1)

1. and Biophysics at
Winthrup → Davis
University. Jang works

DR...(1)

1. Jang works with Dr. Corbella, one of

CORBELLA...(1)

1. works with Dr.
Corbella, → Zimmerman,
one of the

```

#### 4. Click "Replace Words in Text" to generate output text.

Output Text: 

    "It's the best way to treat infections,” said Henry Saltzman associate professor in the Department of Biochemistry and Biophysics at Davis University.
    Saltzman works with Dr. Zimmerman, one of the principal investigators in the research study.
