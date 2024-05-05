# Chinese Blackjack Score calculator
## Description
A mobile app to optimise playing experience in Banluck/21/Chinese Blackjack with relatives during Chinese New Year! 

Useful for those who...
1. don't want to play with money => records scores 
2. don't bring physical notes/cash => keeps track of debt/earnings

## Technologies Used:
1. React Native
2. Expo Go

### Inspiration:
- Played 21 with family during free time on overseas trip
- Recorded gains and losses on Apple Notes
- Not only tedious, but also inaccurate as 1 person had to calculate & record the score for 4 people between rounds
- Wanted an app to automate the calculation & was interested in app development => culminated in this app

## Disclaimer
This app is very messy & unstructured as it was created through independent learning
### ~~To improve in future~~ Improved:
- [x] Redundant code: Chose to copy some elements instead of using conditional rendering which could lead to other problems (e.g. Customise Screen is mostly a copy of Score Screen)
- [x] Repeated functionalities: Bypass constraints of use cases so less modification is necessary (e.g. returnUpdated & updateElement)
- [x] Case-specific components: Can be generalised but might cause other errors(e.g. PopupU in Popup.js)
- [x] Minor errors that do not affect usage: Easy to fix but did not want to risk further complications (e.g. value is a number in TextInput)
- [x] Lack of comments & incoherent variable naming: Focus was on making a workable app so readability was compromised(e.g. li, setLi, n)

### Uncertainty
- Basic score patterns have been tested but some extreme cases may not be calculated correctly
- Styling optimised for iPhone 15 Plus so components might be distorted in some other models
- Might still have minor errors I didn't encounter

### Possible New Features:
- Variable bets (e.g. bet $1 in 1st round & $2 in second)
- Include differentiation in wulong success (i.e. five cards = 21 & five cards < 21) and triple 7 (7-7-7)

## What does this app do?
1. Calculates scores based on each player's card combo
2. Supports different playing styles
- Standard: Preset rotation and fixed or variable duration
- Customise: Spontaneously change banker with a single tap

### House Rules:
1. Wulong Success: Five cards <= 21
2. Ban Luck: Ace & Picture card/10
3. Ban Ban: 2 Aces
4. Busted/Bao: > 21

### Detailed Instructions:
![image](https://github.com/PhoebeY05/chinese-blackjack-score-calculator/assets/115935747/99c1fa26-1159-4d01-b1c3-7e7560d0bce8)

## How to install & use?
### Requirements:
- Node.js (https://nodejs.org/en/download)
- Expo CLI & Recommended Tools (https://docs.expo.dev/get-started/installation/)
- react-native-modal (https://www.npmjs.com/package/react-native-modal)
- @kaloraat/react-native-text (https://www.npmjs.com/package/@kaloraat/react-native-text)
### Steps to take:
```
npm install package.json
npx expo start
``` 
1. Run package.json with npm install to manage the dependencies (add 'sudo' to the front if it doesn't work in MacOS)
2. Run npx expo start in the root folder (chinese-blackjack-score-calculator-master)
### Possible errors:
1. Expo Status Bar not installed
```
"expo-status-bar" is added as a dependency in your project's package.json but it doesn't seem to be installed. Please run "yarn" or "npm install" to fix this issue.
```
- Solution:
```bash
sudo npm install
```
# Credits
- banban.png, banluck.png: https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.seedly.sg%2Fguide-to-winning-ban-luck-blackjack-this-chinese-new-year-cny%2F&psig=AOvVaw0hIUOIishhAgP3wkmVl8Gf&ust=1705045646834000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCKiYjO_s1IMDFQAAAAAdAAAAABAE
- bao.png: https://www.google.com/url?sa=i&url=https%3A%2F%2Fclipart-library.com%2Fbusted-cliparts.html&psig=AOvVaw3swXWLQN-CArTgXV-m1POr&ust=1705045954282000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCODegaXt1IMDFQAAAAAdAAAAABAE





