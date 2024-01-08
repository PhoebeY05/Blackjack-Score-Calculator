# CHINESE BLACKJACK SCORE CALCULATOR
## Description
A mobile app to optimise playing experience with relatives during Chinese New Year!
### Inspiration:
- Playing 21 with family during free time on overseas trip
- Recorded gains and losses on Apple Notes
- Not only tedious, but also inaccurate as 1 person has to calculate & record the score for 4 people
- Wanted an app to automate the calculation & was interested in app development => culminated in this app

### Detailed Instructions:
![image](https://github.com/PhoebeY05/chinese-blackjack-score-calculator/assets/115935747/99c1fa26-1159-4d01-b1c3-7e7560d0bce8)

## Disclaimer
This app is very messy & unstructured as it is training code for me to self-learn react native 
### Might improve in future:
- Redundant code: Chose to copy some elements instead of using conditional rendering which could lead to other problems (e.g. Customise Screen is mostly a copy of Score Screen)
- Repeated functionalities: Bypass constraints of use cases so less modification is necessary (e.g. returnUpdated & updateElement)
- Case-specific components: Can be generalised but might cause other errors(e.g. all the Popups in Popup.js)
- Minor errors that do not affect usage: Easy to fix but did not want to risk further complications (e.g. value is a number in TextInput)
- Lack of comments & incoherent variable naming: Focus was on making a workable app so readability was compromised(e.g. li, setLi, n)

### Uncertainty
- Basic score patterns have been tested but some extreme cases may not be calculated correctly
- Styling optimised for iPhone 15 Plus so components might be distorted in some other models

## What does this app do?
1. Calculates scores based on each player's combo
2. Supports different playing styles
- Standard: Preset rotation and fixed or variable duration
- Customise: Spontaneously change banker with a single tap

## How to install & use?
## Requirements:
- Node.js (https://nodejs.org/en/download)
- Expo CLI & Recommended Tools (https://docs.expo.dev/get-started/installation/)
- react-native-modal (https://www.npmjs.com/package/react-native-modal)
- @kaloraat/react-native-text (https://www.npmjs.com/package/@kaloraat/react-native-text)
## Steps to take:
1. Run package.json with npm install to manage the dependencies
2. Run npx expo start in the root folder (chinese-blackjack-score-calculator-master)
## Possible errors:
1. Expo Status Bar not installed
```
"expo-status-bar" is added as a dependency in your project's package.json but it doesn't seem to be installed. Please run "yarn" or "npm install" to fix this issue.
```
- Solution:
```bash
sudo npm install
```





