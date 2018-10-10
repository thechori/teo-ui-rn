# teo-ui-rn

Beautiful React Native components

## Installation

1. Run `npm install --save teo-ui-rn`

## Usage

1. Import the component(s) you'd like to use in your component

  ```
  import { Card, CardHeader, CardSection } from 'teo-ui-rn'
  ```

2. Use the component

  ```
  <Card>
    <CardHeader title="About" />
    <CardSection>
      <Text>This is a CardSection</Text>
      <Text>This is a CardSection</Text>
      <Text>This is a CardSection</Text>
    </CardSection>
  </Card>
  ```

3. Win

## Components

1. Button
1. Card
1. CardHeader
1. CardSection
1. Confirm
1. Header
1. Input
1. Schedule
1. Speaker
1. Spinner

## Notes

- How can we achieve theming? How can a global variable be implemented?
  - Maybe with something like a `teo-rn-ui.json` file at the root of the directory

## Changelog

Description of the changes between versions.

### v1.0

- Basic components
