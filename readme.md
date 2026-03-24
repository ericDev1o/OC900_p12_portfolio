# Hi
[![License: ISC](https://img.shields.io/badge/license-ISC-lightgrey.svg)](license.md)
[![Accessibility tests](https://img.shields.io/badge/tests-manual-yellow.svg)](#test-please)

## clone & install using yarn, be welcome
git clone https://github.com/ericDev1o/OC900_p12_portfolio.git
yarn install
### detail: default branch is gh-pages
### you should, as often as possible, run
yarn upgrade-interactive

## dev taking advantage of Hot Module Reload
yarn dev

## validate please
### you should keep the following in mind for a future script
#### HyperTextMarkupLanguage HTML
##### WorldWideWebConsortium W3C 
###### check online; please kindly signal if I oversaw the offline same 
[https://validator.w3.org/nu/](https://validator.w3.org/nu/)
#### CascadingStyleSheets CSS
##### W3C
[https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)
##### stylelint pre-validate by linting
yarn add -D stylelint stylelint-config-standard stylelint-config-tailwindcss
###### stylelint.config.mjs
/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-tailwindcss'    
    ]
}
#### accessibility a11y
##### Tailwind motion-reduce
###### chromium browser manual test
F12 dev tools -> 3 vertical ... -> More tools > -> Rendering -> Emulate CSS media feature prefers-reduced-motion -> prefers-reduced-motion: reduce -> you open your project details in 3s. instead of 0.6s

## test please
### Intersection Observer useEffect for memory leaks
yarn test:unit
### complete example of manual workflow
#### $ yarn eslint

#### $ yarn test:unit
#### $ yarn test:integration
#### $ yarn test:webkit:ci
Test Webkit less. 
It's not a native Safari end-to-end user accessibility test.
Besides, it's not distroless yet. 
1. The Docker image size is excessive. It's too expensive.
2. There are intrinsic vulnerabilities: packages are outdated. There are high and critical CVEs to patch.
3. Non-root user isn't implemented yet due to file permissions issues.
4. There's a shell and other tools increasing attacking surface.

##### CVE test using trivy
There is a docker fallback but you better install it locally once. It's greener.
###### linux host install
sudo apt-get update
sudo apt-get install -y wget gnupg lsb-release

wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key \
  | gpg --dearmor \
  | sudo tee /usr/share/keyrings/trivy.gpg > /dev/null

echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb jammy main" \
  | sudo tee /etc/apt/sources.list.d/trivy.list

sudo apt-get update
sudo apt-get install -y trivy
#### $ yarn test:e2e

#### $ yarn build
#### $ yarn preview

## deploy
### run package.json script predeploy & then deploy script
yarn predeploy
yarn deploy
#### details
yarn build
gh-pages -d dist

## preinstall a font
https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400..800&subset=latin&display=swap
### keep only latin 
/* latin */ 
@font-face 
{ 
    font-family: 'JetBrains Mono'; 
    font-style: normal; 
    font-weight: 400 800; 
    font-display: swap; 
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2) format('woff2'); 
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; 
}

https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2

Download only 1 file less than 32 kb and  locally fetch it using 1 DRY 
@font-face 
{ 
    font-family: "JetBrains Mono"; 
    src: url("/fonts/jetbrains-mono-400..800.woff2") format("woff2"); 
    font-weight: 400 800; 
    font-style: normal; 
    font-display: swap; 
}


## do you need help?
### for reading markdown?
#### titles as 2nd color for all non CLI is preferred for multi-line platform & mobile inclusion rather than
[https://github.com/orgs/community/discussions/31570](https://github.com/orgs/community/discussions/31570)
#### please kindly signal if I oversaw the current
[https://code.visualstudio.com/docs/languages/markdown](https://code.visualstudio.com/docs/languages/markdown)

### do you need help to upgrade node?
#### $ nvs add latest
...
##### $ nvs use 25.6
PATH += ~/.nvs/node/25.6.1/x64/bin
###### no yarn nor yarnpkg in this directory?
###### npm install -g yarn
~/.nvs/node/25.6.1/x64/bin/yarn and ...yarnpkg are installed along npm
###### yarn -v
4.12.0

#### do you need help to upgrade yarn?
##### minor version
###### sudo corepack enable
[sudo: authenticate] Password: 
###### corepack prepare yarn@4.13.0 --activate
Preparing yarn@4.13.0 for immediate activation...
###### yarn set version 4.13.0
➤ YN0000: Downloading https://repo.yarnpkg.com/4.13.0/packages/yarnpkg-cli/bin/yarn.js
➤ YN0000: Saving the new release in .yarn/releases/yarn-4.13.0.cjs
➤ YN0000: Done in 0s 337ms
###### yarn test:unit
 RUN  v4.1.1 /home/eric/source/repos/OC/OC900_p12_portfolio

 ✓ test/unit/useIntersectionObserver.unit.test.ts (3 tests) 55ms
   ✓ useIntersectionObserver (3)
     ✓ must set isIntersecting to true and rerender once on intersection 37ms
     ✓ must disconnect observer on unmount to avoid memory leak 7ms
     ✓ should not do state update after unmount 8ms