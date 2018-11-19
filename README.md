## What's interesting

# General

Contains an "I've used it and it worked nicely" suggestion for file structure and overall architecture in a project. That's a CRA, but it has Typescript with `tslint` setup in a nice way with airbnb and prettier configs. All linters run in precommit stage with `husky` and `lint-staged`. 

# Testing

`react-testing-library` (rtl) is used as a suggusted way of testing components, `jest` is recommended for everything else. Tests are already set up to use `cleanup-after-each` and `emotion` serializer in setupTests.ts file. `test-utils.tsx` contains an extended version of rtl render, but provides context of routing and redux store. The context can be overriden as seen in src/screens/__tests__/navigation.tsx

# Styling

`emotion` is used as a recommended. It looks less opinionated compared to `styled-components`. Object styles are used over string styles in favor of autocomplete, typechecking, readability and simpler integration of variables.

# Integrations

ROuting is already there combined with redux store, models might require some work