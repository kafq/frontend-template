// adds DOM-specific matchers, e.g. toBeInTheDocument, toBeDisabled
import 'jest-dom/extend-expect';
// unmounts react elements after each test
import 'react-testing-library/cleanup-after-each';
import * as emotion from 'emotion';

// allows to see expected/actual css right inside of the test
import { createSerializer } from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));
